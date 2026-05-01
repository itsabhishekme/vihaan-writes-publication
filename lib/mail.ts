import nodemailer from "nodemailer";

/* ================= TYPES ================= */

type MailData = {
  name: string;
  email: string;
  message: string;
  intent: string;
};

/* ================= HELPERS ================= */

const sanitize = (str: string) =>
  str.replace(/[\r\n]/g, "").trim();

const maskEmail = (email: string) =>
  email.replace(/(.{2}).+(@.+)/, "$1***$2");

/* ================= RETRY UTILITY ================= */

const retry = async (fn: any, retries = 2) => {
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    console.warn(`🔁 Retrying... (${retries})`);
    return retry(fn, retries - 1);
  }
};

/* ================= MAIL FUNCTION ================= */

export const sendMail = async (data: MailData) => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  /* ===== ENV VALIDATION ===== */
  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS");
  }

  /* ===== SANITIZE INPUT ===== */
  const name = sanitize(data.name);
  const email = sanitize(data.email);
  const message = data.message.trim();
  const intent = sanitize(data.intent);

  console.log("📨 Mail request:", {
    name,
    email: maskEmail(email),
    intent,
    messageLength: message.length,
  });

  /* ===== TRANSPORTER ===== */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  /* ===== EMAIL HTML TEMPLATE ===== */
  const mainHtml = `
    <h2>New Contact Message</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Intent:</b> ${intent}</p>
    <p><b>Message:</b></p>
    <p>${message}</p>
  `;

  const replyHtml = `
    <h2>Hello ${name},</h2>
    <p>Your message has been received successfully.</p>
    <p>I will get back to you soon.</p>
    <br/>
    <p>— Vihaan</p>
  `;

  try {
    /* ===== SEND MAIN EMAIL (WITH RETRY) ===== */
    const mainMail = await retry(() =>
      transporter.sendMail({
        from: `"Website Contact" <${user}>`,
        to: user,
        subject: `New Message - ${intent}`,
        html: mainHtml,
      })
    );

    console.log("✅ Main email sent:", mainMail.messageId);

    /* ===== SEND AUTO REPLY (WITH TIMEOUT + RETRY) ===== */
    const replyMail = await Promise.race([
      retry(() =>
        transporter.sendMail({
          from: `"Vihaan Writes" <${user}>`,
          to: email,
          subject: "We received your message ✨",
          html: replyHtml,
        })
      ),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Auto-reply timeout")), 10000)
      ),
    ]);

    console.log("📩 Auto reply sent:", (replyMail as any).messageId);

    return true;

  } catch (error: any) {
    console.error("❌ Nodemailer Error FULL:", error);

    /* ===== CLEAN ERROR HANDLING ===== */

    if (error?.response) {
      throw new Error(error.response);
    }

    if (error?.code === "EAUTH") {
      throw new Error(
        "Authentication failed. Use Gmail App Password (NOT normal password)."
      );
    }

    if (error?.message?.includes("Invalid login")) {
      throw new Error(
        "Invalid login. Check EMAIL_USER and App Password."
      );
    }

    if (error?.message?.includes("timeout")) {
      throw new Error(
        "Email service timeout. Try again later."
      );
    }

    throw new Error(error.message || "Mail sending failed");
  }
};
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

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const maskEmail = (email: string) =>
  email.replace(/(.{2}).+(@.+)/, "$1***$2");

/* ================= RETRY (EXPONENTIAL BACKOFF) ================= */

const retry = async (fn: any, retries = 2, delay = 500) => {
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;

    console.warn(`🔁 Retrying... (${retries})`);
    await new Promise((res) => setTimeout(res, delay));

    return retry(fn, retries - 1, delay * 2);
  }
};

/* ================= TRANSPORTER (POOL + REUSE) ================= */

let transporter: nodemailer.Transporter;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      pool: true, // ⚡ improves performance
      maxConnections: 3,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
};

/* ================= TEMPLATE BUILDER ================= */

const buildTemplate = (title: string, body: string) => `
<div style="font-family:Arial,sans-serif;background:#0f172a;padding:30px;">
  <div style="max-width:600px;margin:auto;background:#111827;border-radius:18px;overflow:hidden;border:1px solid #1f2937;">
    
    <!-- HEADER -->
    <div style="background:linear-gradient(90deg,#6366f1,#ec4899);padding:22px;text-align:center;">
      <h2 style="color:white;margin:0;font-size:20px;">${title}</h2>
    </div>

    <!-- BODY -->
    <div style="padding:28px;color:#e5e7eb;font-size:14px;line-height:1.6;">
      ${body}
    </div>

    <!-- FOOTER -->
    <div style="text-align:center;padding:14px;color:#6b7280;font-size:12px;">
      Sent via your website
    </div>
  </div>
</div>
`;

/* ================= MAIL FUNCTION ================= */

export const sendMail = async (data: MailData) => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS");
  }

  /* ===== SANITIZE ===== */
  const name = escapeHtml(sanitize(data.name));
  const email = sanitize(data.email);
  const message = escapeHtml(data.message.trim());
  const intent = escapeHtml(sanitize(data.intent));

  console.log("📨 Mail request:", {
    name,
    email: maskEmail(email),
    intent,
    messageLength: message.length,
  });

  const transporter = getTransporter();

  /* ================= MAIN EMAIL ================= */

  const mainBody = `
    <table width="100%" style="margin-bottom:20px;">
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Intent:</strong></td><td>${intent}</td></tr>
    </table>

    <div style="margin-top:20px;padding:18px;background:#020617;border-radius:12px;border:1px solid #1f2937;">
      <p style="margin:0;color:#cbd5f5;">${message}</p>
    </div>
  `;

  const mainHtml = buildTemplate("📩 New Contact Message", mainBody);

  /* ================= AUTO REPLY ================= */

  const replyBody = `
    <p>Hello <strong>${name}</strong>,</p>

    <p>Your message has been received successfully.</p>

    <div style="margin:20px 0;padding:18px;background:#020617;border-radius:12px;border:1px solid #1f2937;">
      <p style="margin:0;color:#cbd5f5;">${message}</p>
    </div>

    <p>I’ll respond shortly.</p>
    <br/>
    <p>— Vihaan</p>
  `;

  const replyHtml = buildTemplate("✨ Message Received", replyBody);

  /* ================= TEXT FALLBACK ================= */

  const plainText = `
New Contact Message

Name: ${name}
Email: ${email}
Intent: ${intent}

Message:
${message}
`;

  try {
    /* ===== MAIN EMAIL ===== */
    const mainMail = await retry(() =>
      transporter.sendMail({
        from: `"Website Contact" <${user}>`,
        to: user,
        subject: `New Message - ${intent}`,
        html: mainHtml,
        text: plainText,
        headers: {
          "X-Priority": "3",
        },
      })
    );

    console.log("✅ Main email sent:", mainMail.messageId);

    /* ===== AUTO REPLY ===== */
    const replyMail = await Promise.race([
      retry(() =>
        transporter.sendMail({
          from: `"Vihaan Writes" <${user}>`,
          to: email,
          subject: "We received your message ✨",
          html: replyHtml,
          text: `Hello ${name}, your message has been received.`,
        })
      ),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Auto-reply timeout")), 10000)
      ),
    ]);

    console.log("📩 Auto reply sent:", (replyMail as any).messageId);

    return true;

  } catch (error: any) {
    console.error("❌ Nodemailer Error:", error);

    if (error?.response) throw new Error(error.response);

    if (error?.code === "EAUTH") {
      throw new Error("Authentication failed. Use Gmail App Password.");
    }

    if (error?.message?.includes("Invalid login")) {
      throw new Error("Invalid login. Check EMAIL_USER and App Password.");
    }

    if (error?.message?.includes("timeout")) {
      throw new Error("Email timeout. Try again later.");
    }

    throw new Error(error.message || "Mail sending failed");
  }
};
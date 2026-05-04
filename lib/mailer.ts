import nodemailer from "nodemailer";

/* -------------------------------------------------------------------------- */
/*                         ENV VALIDATION (SAFE + CLEAR)                       */
/* -------------------------------------------------------------------------- */

const getEnv = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error("❌ EMAIL_USER or EMAIL_PASS missing in environment");
    return null;
  }

  return { user, pass };
};

/* -------------------------------------------------------------------------- */
/*                        CREATE TRANSPORTER (ROBUST)                          */
/* -------------------------------------------------------------------------- */

const createTransporter = () => {
  const env = getEnv();

  if (!env) return null;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    return transporter;
  } catch (error) {
    console.error("❌ Transporter creation failed:", error);
    return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                         EMAIL TEMPLATE (PREMIUM UI)                         */
/* -------------------------------------------------------------------------- */

const getEmailTemplate = (email: string) => {
  return `
  <div style="background:#0f0f0f;padding:40px 20px;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:600px;margin:auto;background:#181818;padding:30px;border-radius:12px;">
      
      <h1 style="color:#ffffff;text-align:center;margin-bottom:10px;">
        🌙 Vihaan Writes
      </h1>

      <p style="text-align:center;color:#aaaaaa;margin-bottom:30px;">
        A space where souls speak before words exist.
      </p>

      <h2 style="color:#ffffff;">Welcome ✨</h2>

      <p style="color:#dddddd;line-height:1.6;">
        You’ve just subscribed to something deeper than content.
        <br/><br/>
        This is where emotions are not written — they are remembered.
      </p>

      <div style="margin:30px 0;padding:20px;background:#111;border-radius:8px;">
        <p style="color:#bbbbbb;font-size:14px;">
          Subscribed Email:
          <br/>
          <strong style="color:#ffffff;">${email}</strong>
        </p>
      </div>

      <p style="color:#cccccc;">
        More soulful writings will find you soon.
      </p>

      <br/>

      <p style="color:#ffffff;font-weight:bold;">
        — Vihaan
      </p>

      <hr style="border:none;border-top:1px solid #333;margin:30px 0;" />

      <p style="font-size:12px;color:#777;text-align:center;">
        If you didn’t subscribe, you can ignore this email.
      </p>

    </div>
  </div>
  `;
};

/* -------------------------------------------------------------------------- */
/*                          MAIN EMAIL FUNCTION                                */
/* -------------------------------------------------------------------------- */

export const sendWelcomeEmail = async (email: string) => {
  console.log("📩 Preparing to send email to:", email);

  const transporter = createTransporter();

  if (!transporter) {
    throw new Error("❌ Email transporter not available");
  }

  try {
    const info = await transporter.sendMail({
      from: `"Vihaan Writes 🌙" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ Welcome to Vihaan Writes",
      html: getEmailTemplate(email),
    });

    console.log("✅ Email sent successfully:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };

  } catch (error: any) {
    console.error("❌ Email sending failed:", error);

    // Deep debug (important)
    if (error?.response) {
      console.error("📨 SMTP Response:", error.response);
    }

    throw new Error("Email sending failed");
  }
};
import nodemailer from "nodemailer";

/* ======================================================
   🔧 TRANSPORTER (ENHANCED FOR GMAIL RELIABILITY)
====================================================== */

export const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // ⚠️ MUST be App Password
  },

  tls: {
    rejectUnauthorized: false,
  },
});

/* ======================================================
   🧪 VERIFY CONNECTION (DEBUGGING PURPOSE)
====================================================== */

export const verifyMailer = async () => {
  try {
    await transporter.verify();
    console.log("✅ Mail server is ready");
  } catch (error) {
    console.error("❌ Mail server error:", error);
  }
};

/* ======================================================
   📩 MAIN EMAIL FUNCTION (EXTENDED)
====================================================== */

export const sendWelcomeEmail = async (to: string) => {
  try {
    if (!to) {
      console.error("❌ No recipient email provided");
      return { success: false, message: "No email" };
    }

    /* 🧾 EMAIL TEMPLATE */
    const htmlTemplate = `
      <div style="
        font-family: 'Segoe UI', sans-serif;
        background: #0f0f0f;
        color: #ffffff;
        padding: 40px;
        border-radius: 16px;
        text-align: center;
      ">
        <h2 style="font-size: 28px; margin-bottom: 10px;">
          Welcome 🌙
        </h2>

        <p style="color: #ccc; font-size: 16px;">
          You are now part of a space where emotions are written before they happen.
        </p>

        <p style="color: #aaa; margin-top: 20px;">
          Expect soulful letters, unseen stories, and reflections of love.
        </p>

        <div style="
          margin-top: 30px;
          padding: 15px;
          border-top: 1px solid #333;
          color: #888;
          font-size: 14px;
        ">
          — Vihaan ✨
        </div>
      </div>
    `;

    /* 🚀 SEND EMAIL */
    const info = await transporter.sendMail({
      from: `"Vihaan Writes ✨" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Welcome to My World of Words 💌",

      html: htmlTemplate,

      // 🔥 EXTRA CONFIG (DELIVERABILITY BOOST)
      headers: {
        "X-Priority": "1",
        "X-Mailer": "VihaanWrites",
      },
    });

    /* ======================================================
       📊 DEBUG LOGGING (VERY IMPORTANT)
    ====================================================== */

    console.log("📨 EMAIL SENT:");
    console.log("➡ Message ID:", info.messageId);
    console.log("➡ Accepted:", info.accepted);
    console.log("➡ Rejected:", info.rejected);
    console.log("➡ Response:", info.response);

    if (info.rejected.length > 0) {
      console.error("❌ Email rejected:", info.rejected);
      return { success: false };
    }

    return { success: true };

  } catch (error: any) {
    console.error("❌ EMAIL ERROR:", error);
    return { success: false, error };
  }
};
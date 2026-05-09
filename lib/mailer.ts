import nodemailer, {
  type SentMessageInfo,
  type Transporter,
} from "nodemailer";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type EnvConfig = {
  user: string;
  pass: string;
};

type MailResult = {
  success: boolean;
  messageId: string;
};

type ErrorWithOptionalFields = {
  message?: string;
  response?: string;
  code?: string;
};

/* -------------------------------------------------------------------------- */
/*                             HELPERS / SANITIZE                             */
/* -------------------------------------------------------------------------- */

const sanitize = (value: string): string =>
  value.replace(/[\r\n]/g, "").trim();

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const isValidEmail = (
  email: string
): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
};

/* -------------------------------------------------------------------------- */
/*                            ENV VALIDATION                                  */
/* -------------------------------------------------------------------------- */

const getEnv = (): EnvConfig => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error(
      "❌ EMAIL_USER or EMAIL_PASS missing in environment"
    );

    throw new Error(
      "Missing EMAIL_USER or EMAIL_PASS"
    );
  }

  return {
    user,
    pass,
  };
};

/* -------------------------------------------------------------------------- */
/*                          TRANSPORTER SINGLETON                             */
/* -------------------------------------------------------------------------- */

let transporterInstance:
  | Transporter
  | undefined;

const createTransporter =
  (): Transporter => {
    if (transporterInstance) {
      return transporterInstance;
    }

    const env = getEnv();

    try {
      transporterInstance =
        nodemailer.createTransport({
          service: "gmail",

          pool: true,
          maxConnections: 3,

          auth: {
            user: env.user,
            pass: env.pass,
          },
        });

      return transporterInstance;
    } catch (error: unknown) {
      console.error(
        "❌ Transporter creation failed:",
        error
      );

      throw new Error(
        "Failed to create email transporter"
      );
    }
  };

/* -------------------------------------------------------------------------- */
/*                            EMAIL TEMPLATE                                  */
/* -------------------------------------------------------------------------- */

const getEmailTemplate = (
  email: string
): string => {
  const safeEmail = escapeHtml(
    sanitize(email)
  );

  return `
  <div style="background:#0f0f0f;padding:40px 20px;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">

    <div style="max-width:600px;margin:auto;background:#181818;padding:30px;border-radius:12px;">

      <h1 style="color:#ffffff;text-align:center;margin-bottom:10px;">
        🌙 Vihaan Writes
      </h1>

      <p style="text-align:center;color:#aaaaaa;margin-bottom:30px;">
        A space where souls speak before words exist.
      </p>

      <h2 style="color:#ffffff;">
        Welcome ✨
      </h2>

      <p style="color:#dddddd;line-height:1.6;">
        You’ve just subscribed to something deeper than content.
        <br /><br />
        This is where emotions are not written — they are remembered.
      </p>

      <div style="margin:30px 0;padding:20px;background:#111;border-radius:8px;">
        <p style="color:#bbbbbb;font-size:14px;">
          Subscribed Email:
          <br />
          <strong style="color:#ffffff;">
            ${safeEmail}
          </strong>
        </p>
      </div>

      <p style="color:#cccccc;">
        More soulful writings will find you soon.
      </p>

      <br />

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
/*                            MAIN MAIL FUNCTION                              */
/* -------------------------------------------------------------------------- */

export const sendWelcomeEmail =
  async (
    email: string
  ): Promise<MailResult> => {
    const cleanEmail = sanitize(
      email.toLowerCase()
    );

    if (!isValidEmail(cleanEmail)) {
      throw new Error(
        "Invalid email address"
      );
    }

    console.log(
      "📩 Preparing to send email to:",
      cleanEmail
    );

    const transporter =
      createTransporter();

    try {
      const info: SentMessageInfo =
        await transporter.sendMail({
          from: `"Vihaan Writes 🌙" <${process.env.EMAIL_USER}>`,

          to: cleanEmail,

          subject:
            "✨ Welcome to Vihaan Writes",

          html: getEmailTemplate(
            cleanEmail
          ),

          text: `
Welcome to Vihaan Writes

You subscribed with:
${cleanEmail}

More soulful writings will find you soon.

— Vihaan
          `,
        });

      console.log(
        "✅ Email sent successfully:",
        info.messageId
      );

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error: unknown) {
      console.error(
        "❌ Email sending failed:",
        error
      );

      if (
        typeof error === "object" &&
        error !== null
      ) {
        const err =
          error as ErrorWithOptionalFields;

        if (err.response) {
          console.error(
            "📨 SMTP Response:",
            err.response
          );
        }

        if (err.code === "EAUTH") {
          throw new Error(
            "Authentication failed. Use Gmail App Password."
          );
        }

        if (
          err.message?.includes(
            "Invalid login"
          )
        ) {
          throw new Error(
            "Invalid login credentials"
          );
        }

        if (
          err.message?.includes(
            "timeout"
          )
        ) {
          throw new Error(
            "Email timeout. Please try again later."
          );
        }

        throw new Error(
          err.message ||
            "Email sending failed"
        );
      }

      throw new Error(
        "Unknown email error"
      );
    }
  };
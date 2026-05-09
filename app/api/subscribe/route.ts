import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/mailer";

/* ======================================================
   TYPES
====================================================== */

type SubscribeBody = {
  email: string;
};

type MailResponse = {
  success?: boolean;
};

type ErrorWithMessage = {
  message?: string;
};

/* ======================================================
   TEMP STORAGE (Replace with DB later)
====================================================== */

const subscribers = new Set<string>();

/* ======================================================
   EMAIL VALIDATION
====================================================== */

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/* ======================================================
   API ROUTE
====================================================== */

export async function POST(req: Request) {
  console.log("📥 Incoming subscribe request");

  try {
    /* ============================
       PARSE BODY
    ============================ */

    let body: SubscribeBody;

    try {
      body = (await req.json()) as SubscribeBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON body",
        },
        { status: 400 }
      );
    }

    const email = body.email?.trim()?.toLowerCase();

    /* ============================
       VALIDATION
    ============================ */

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email required",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    /* ============================
       DUPLICATE CHECK
    ============================ */

    if (subscribers.has(email)) {
      console.warn("⚠️ Already subscribed:", email);

      return NextResponse.json(
        {
          success: false,
          message: "Already subscribed",
        },
        { status: 409 }
      );
    }

    /* ============================
       SAVE TEMP SUBSCRIBER
    ============================ */

    subscribers.add(email);

    console.log("✅ Saved subscriber:", email);

    /* ============================
       SEND EMAIL
    ============================ */

    let emailStatus: "sent" | "failed" = "sent";

    try {
      const mailResult =
        (await sendWelcomeEmail(email)) as MailResponse;

      if (!mailResult?.success) {
        emailStatus = "failed";

        console.error(
          "❌ Email returned unsuccessful result"
        );
      }
    } catch (mailError: unknown) {
      emailStatus = "failed";

      if (
        typeof mailError === "object" &&
        mailError !== null
      ) {
        const err = mailError as ErrorWithMessage;

        console.error(
          "❌ Email sending error:",
          err.message || "Unknown mail error"
        );
      } else {
        console.error(
          "❌ Email sending error: Unknown error"
        );
      }
    }

    /* ============================
       RESPONSE
    ============================ */

    if (emailStatus === "failed") {
      return NextResponse.json({
        success: true,
        message:
          "Subscribed successfully (email delivery pending)",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error: unknown) {
    console.error("❌ SUBSCRIBE ERROR:", error);

    let errorMessage = "Unknown error";

    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = String(error.message);
    }

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
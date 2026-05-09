import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

/* ================= TYPES ================= */

type ContactBody = {
  name: string;
  email: string;
  message: string;
  intent: string;
};

type MailError = {
  message?: string;
};

/* ================= HELPERS ================= */

const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitize = (str: string): string => str.trim();

/* ================= RATE LIMIT ================= */
// ⚠️ In-memory rate limit (per instance)

const requestMap = new Map<string, number>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

/* ================= API ================= */

export async function POST(req: Request) {
  const startTime = Date.now();

  try {
    /* ===== ENV CHECK ===== */

    console.log("🔐 ENV CHECK:", {
      EMAIL_USER: process.env.EMAIL_USER ? "✅" : "❌",
      EMAIL_PASS: process.env.EMAIL_PASS ? "✅" : "❌",
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing email environment variables");
    }

    /* ===== RATE LIMIT ===== */

    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      realIp ||
      "unknown";

    const now = Date.now();

    const currentCount = requestMap.get(ip) || 0;

    if (currentCount >= MAX_REQUESTS) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    requestMap.set(ip, currentCount + 1);

    setTimeout(() => {
      const count = requestMap.get(ip);

      if (count !== undefined) {
        if (count <= 1) {
          requestMap.delete(ip);
        } else {
          requestMap.set(ip, count - 1);
        }
      }
    }, RATE_LIMIT_WINDOW);

    /* ===== PARSE BODY ===== */

    let body: ContactBody;

    try {
      body = (await req.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON body",
        },
        { status: 400 }
      );
    }

    /* ===== SANITIZE ===== */

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "");
    const message = sanitize(body.message || "");
    const intent = sanitize(body.intent || "");

    /* ===== VALIDATION ===== */

    if (!name || !email || !message || !intent) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Message too short",
        },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message too long",
        },
        { status: 400 }
      );
    }

    /* ===== SAFE LOG ===== */

    console.log("📩 Incoming:", {
      name,
      emailMasked: email.replace(
        /(.{2}).+(@.+)/,
        "$1***$2"
      ),
      intent,
      messageLength: message.length,
    });

    /* ===== SEND EMAIL WITH TIMEOUT ===== */

    const sendWithTimeout = async (): Promise<void> => {
      await Promise.race([
        sendMail({
          name,
          email,
          message,
          intent,
        }),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error("Email timeout")),
            15000
          )
        ),
      ]);
    };

    try {
      await sendWithTimeout();
    } catch (mailError: unknown) {
      console.error("📛 MAIL FAILURE:", mailError);

      let errorMessage = "Email sending failed";

      if (
        typeof mailError === "object" &&
        mailError !== null
      ) {
        const err = mailError as MailError;

        if (err.message?.includes("Invalid login")) {
          errorMessage =
            "Email authentication failed. Use Gmail App Password.";
        } else if (err.message?.includes("timeout")) {
          errorMessage =
            "Email server timeout. Try again later.";
        } else if (err.message) {
          errorMessage = err.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
        },
        { status: 500 }
      );
    }

    /* ===== SUCCESS ===== */

    const duration = Date.now() - startTime;

    console.log(`✅ Email sent in ${duration}ms`);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: unknown) {
    console.error("❌ SERVER ERROR:", error);

    let errorMessage = "Internal server error";

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
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
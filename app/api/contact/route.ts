import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

/* ================= TYPES ================= */

type ContactBody = {
  name: string;
  email: string;
  message: string;
  intent: string;
};

/* ================= HELPERS ================= */

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitize = (str: string) => str.trim();

/* ================= RATE LIMIT (BASIC) ================= */
// ⚠️ In-memory (works per instance, good enough for now)
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
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const lastRequest = requestMap.get(ip) || 0;

    if (now - lastRequest < RATE_LIMIT_WINDOW) {
      requestMap.set(ip, lastRequest + 1);

      if (lastRequest > MAX_REQUESTS) {
        return NextResponse.json(
          { success: false, message: "Too many requests" },
          { status: 429 }
        );
      }
    } else {
      requestMap.set(ip, 1);
    }

    /* ===== PARSE BODY ===== */
    let body: ContactBody;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
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
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message too short" },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message too long" },
        { status: 400 }
      );
    }

    /* ===== LOG REQUEST (SAFE) ===== */
    console.log("📩 Incoming:", {
      name,
      emailMasked: email.replace(/(.{2}).+(@.+)/, "$1***$2"),
      intent,
      messageLength: message.length,
    });

    /* ===== TIMEOUT WRAPPER ===== */
    const sendWithTimeout = async () => {
      return Promise.race([
        sendMail({ name, email, message, intent }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Email timeout")), 15000)
        ),
      ]);
    };

    /* ===== SEND EMAIL ===== */
    try {
      await sendWithTimeout();
    } catch (mailError: any) {
      console.error("📛 MAIL FAILURE:", mailError);

      let errorMessage = "Email sending failed";

      if (mailError?.message?.includes("Invalid login")) {
        errorMessage =
          "Email authentication failed. Use Gmail App Password.";
      } else if (mailError?.message?.includes("timeout")) {
        errorMessage =
          "Email server timeout. Try again later.";
      } else if (mailError?.message) {
        errorMessage = mailError.message;
      }

      return NextResponse.json(
        { success: false, message: errorMessage },
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

  } catch (error: any) {
    console.error("❌ SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
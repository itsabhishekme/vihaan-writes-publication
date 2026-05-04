import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/mailer";

/* ======================================================
   🧠 TEMP STORAGE (Replace with DB later)
====================================================== */
const subscribers = new Set<string>();

/* ======================================================
   📧 EMAIL VALIDATION
====================================================== */
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/* ======================================================
   🚀 API ROUTE
====================================================== */
export async function POST(req: Request) {
  console.log("📥 Incoming subscribe request");

  try {
    const body = await req.json().catch(() => null);
    const email: string = body?.email?.trim()?.toLowerCase();

    /* ============================
       ❌ VALIDATION
    ============================ */
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    /* ============================
       🔁 DUPLICATE CHECK
    ============================ */
    if (subscribers.has(email)) {
      console.warn("⚠️ Already subscribed:", email);

      return NextResponse.json(
        { success: false, message: "Already subscribed" },
        { status: 409 }
      );
    }

    /* ============================
       📦 SAVE (TEMP)
    ============================ */
    subscribers.add(email);
    console.log("✅ Saved subscriber:", email);

    /* ============================
       📩 SEND EMAIL (NON-BLOCKING SAFE)
    ============================ */
    let emailStatus = "sent";

    try {
      const mailResult = await sendWelcomeEmail(email);

      if (!mailResult?.success) {
        emailStatus = "failed";
        console.error("❌ Email returned unsuccessful result");
      }
    } catch (mailError: any) {
      emailStatus = "failed";
      console.error("❌ Email sending error:", mailError?.message);
    }

    /* ============================
       🎯 RESPONSE (SMART UX)
    ============================ */

    if (emailStatus === "failed") {
      return NextResponse.json({
        success: true,
        message: "Subscribed successfully (email delivery pending)",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });

  } catch (error: any) {
    console.error("❌ SUBSCRIBE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
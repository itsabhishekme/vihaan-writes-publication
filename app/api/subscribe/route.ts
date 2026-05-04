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
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/* ======================================================
   🚀 API ROUTE
====================================================== */
export async function POST(req: Request) {
  try {
    console.log("📥 Incoming subscribe request");

    const body = await req.json();
    const email: string = body?.email?.trim();

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
      console.log("⚠️ Already subscribed:", email);

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
       📩 SEND EMAIL
    ============================ */
    const mailResult = await sendWelcomeEmail(email);

    /* ============================
       ❌ EMAIL FAILED
    ============================ */
    if (!mailResult || mailResult.success === false) {
      console.error("❌ Email sending failed");

      return NextResponse.json(
        {
          success: false,
          message: "Subscription saved but email failed",
        },
        { status: 500 }
      );
    }

    /* ============================
       ✅ SUCCESS
    ============================ */
    console.log("🎉 Subscription complete:", email);

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
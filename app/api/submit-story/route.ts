import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface StorySubmission {
  title: string;
  author: string;
  email: string;
  category: string;
  story: string;
  tags?: string[];
  imageUrl?: string;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: StorySubmission = await req.json();

    const {
      title,
      author,
      email,
      category,
      story,
      tags = [],
      imageUrl,
    } = body;

    const errors: string[] = [];

    if (!title?.trim()) {
      errors.push("Story title is required");
    }

    if (!author?.trim()) {
      errors.push("Author name is required");
    }

    if (!email?.trim()) {
      errors.push("Email address is required");
    }

    if (!category?.trim()) {
      errors.push("Story category is required");
    }

    if (!story?.trim()) {
      errors.push("Story content is required");
    }

    if (email && !validateEmail(email)) {
      errors.push("Invalid email address");
    }

    if (story && story.length < 100) {
      errors.push(
        "Story should contain at least 100 characters"
      );
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    const formattedTags =
      tags.length > 0
        ? tags.map((tag) => `#${tag}`).join(", ")
        : "No tags selected";

    const escapedStory = escapeHtml(story).replace(
      /\n/g,
      "<br />"
    );

    const adminEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>New Story Submission</title>
      </head>

      <body
        style="
          margin:0;
          padding:40px;
          background:#0a0a0a;
          font-family:Arial,sans-serif;
          color:#ffffff;
        "
      >
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="
            max-width:900px;
            margin:auto;
            background:#111111;
            border-radius:24px;
            overflow:hidden;
            border:1px solid #262626;
          "
        >
          <tr>
            <td
              style="
                background:linear-gradient(
                  135deg,
                  #9333ea,
                  #ec4899
                );
                padding:40px;
                text-align:center;
              "
            >
              <h1
                style="
                  margin:0;
                  font-size:34px;
                  color:white;
                "
              >
                📖 New Story Submission
              </h1>

              <p
                style="
                  margin-top:10px;
                  color:rgba(255,255,255,.9);
                "
              >
                A new story has been submitted on
                Vihaan Writes.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px">
              <h2
                style="
                  margin-top:0;
                  color:#c084fc;
                "
              >
                Story Information
              </h2>

              <table
                width="100%"
                cellpadding="12"
                cellspacing="0"
                style="
                  border-collapse:collapse;
                  background:#18181b;
                  border-radius:16px;
                "
              >
                <tr>
                  <td width="180">
                    <strong>Title</strong>
                  </td>
                  <td>${escapeHtml(title)}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Author</strong>
                  </td>
                  <td>${escapeHtml(author)}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>${escapeHtml(email)}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Category</strong>
                  </td>
                  <td>${escapeHtml(category)}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Tags</strong>
                  </td>
                  <td>${formattedTags}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Word Count</strong>
                  </td>
                  <td>
                    ${
                      story
                        .trim()
                        .split(/\s+/)
                        .filter(Boolean).length
                    } Words
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>Characters</strong>
                  </td>
                  <td>${story.length}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Submitted</strong>
                  </td>
                  <td>
                    ${new Date().toLocaleString()}
                  </td>
                </tr>
              </table>

              ${
                imageUrl
                  ? `
                <div style="margin-top:30px">
                  <h2 style="color:#c084fc">
                    Cover Image
                  </h2>

                  <img
                    src="${imageUrl}"
                    alt="Cover Image"
                    style="
                      width:100%;
                      border-radius:16px;
                      border:1px solid #333;
                    "
                  />
                </div>
              `
                  : ""
              }

              <div
                style="
                  margin-top:40px;
                  background:#18181b;
                  padding:30px;
                  border-radius:20px;
                  border:1px solid #27272a;
                "
              >
                <h2
                  style="
                    margin-top:0;
                    color:#c084fc;
                  "
                >
                  Full Story
                </h2>

                <div
                  style="
                    color:#e4e4e7;
                    line-height:1.9;
                    font-size:15px;
                  "
                >
                  ${escapedStory}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const userEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <body
        style="
          background:#0a0a0a;
          color:white;
          padding:40px;
          font-family:Arial,sans-serif;
        "
      >
        <div
          style="
            max-width:700px;
            margin:auto;
            background:#111;
            border-radius:20px;
            padding:40px;
            border:1px solid #27272a;
          "
        >
          <h1 style="color:#c084fc">
            Thank You, ${escapeHtml(author)}!
          </h1>

          <p>
            We have successfully received your story:
          </p>

          <h2 style="color:#fff">
            ${escapeHtml(title)}
          </h2>

          <p>
            Category:
            <strong>${escapeHtml(category)}</strong>
          </p>

          <p>
            Our editorial team will review your
            submission shortly.
          </p>

          <p>
            Thank you for sharing your story with
            the Vihaan Writes community.
          </p>

          <br />

          <p>
            Regards,<br />
            Vihaan Writes Team
          </p>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Vihaan Writes" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `📖 New Story Submission - ${title}`,
      html: adminEmailTemplate,
    });

    await transporter.sendMail({
      from: `"Vihaan Writes" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Story Submission Received",
      html: userEmailTemplate,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Story submitted successfully and email sent",
        submittedAt: new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Story Submission Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit story. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
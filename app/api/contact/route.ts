// app/api/contact/route.ts
import { ContactFormEmail } from "@/emails/contact-form-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with error handling
let resend: Resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY!);
} catch (error) {
  console.error("Resend initialization error:", error);
}

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please contact us directly at ask@soft-lutions.com.ng",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log("Received contact form submission:", { name, email, subject });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name?.trim() || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!subject?.trim() || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Subject must be at least 3 characters" },
        { status: 400 }
      );
    }

    if (!message?.trim() || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Send email using Resend
    console.log("Attempting to send email via Resend...");

    const { data, error } = await resend.emails.send({
      from: "Soft-lutions <onboarding@resend.dev>", // Use Resend's test domain
      to: ["ask@soft-lutions.com.ng"], // Your email
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
      `.trim(),
      react: ContactFormEmail({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: `Email service error: ${error.message}` },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully! Message ID:", data?.id);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      messageId: data?.id,
    });
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

"use server";

import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sending server action
export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, message: "Missing required fields" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain or Resend's sandbox
      to: "abrielleperry22@icloud.com", // Your email address
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "Email sent successfully", id: data?.id };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "An error occurred while sending email" };
  }
}

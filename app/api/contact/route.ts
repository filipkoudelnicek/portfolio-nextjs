"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECIPIENT,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : 587,
  secure: SMTP_PORT ? Number(SMTP_PORT) === 465 : false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP configuration");
      return NextResponse.json(
        { error: "E-mailová brána není nakonfigurovaná." },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vyplň prosím všechna pole." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_RECIPIENT ?? SMTP_USER,
      subject: `Nová zpráva z portfolia od ${name}`,
      replyTo: email,
      text: message,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat e-mail. Zkus to prosím znovu." },
      { status: 500 }
    );
  }
}


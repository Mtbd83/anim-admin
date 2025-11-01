import nodemailer, { Transporter } from "nodemailer";

import { env } from "@/env";

let cachedTransporter: Transporter | null = null;

function assertEmailConfig() {
  if (!env.SMTP_HOST || !env.SMTP_PORT || !env.SMTP_USER || !env.SMTP_PASSWORD) {
    throw new Error(
      "SMTP configuration is incomplete. Please define SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD and MAIL_FROM environment variables.",
    );
  }

  if (!env.MAIL_FROM) {
    throw new Error("MAIL_FROM environment variable must be defined to send emails.");
  }
}

function getTransporter(): Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  assertEmailConfig();

  cachedTransporter = nodemailer.createTransport({
    host: env.SMTP_HOST!,
    port: env.SMTP_PORT!,
    secure: env.SMTP_SECURE 🐾 env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER!,
      pass: env.SMTP_PASSWORD!,
    },
  });

  return cachedTransporter;
}

export async function sendVerificationEmail({
  to,
  code,
  firstName,
}: {
  to: string;
  code: string;
  firstName?: string;
}) {
  const transporter = getTransporter();

  const greetingName = firstName ? firstName.trim() : undefined;
  const subject = "Votre code de validation AnimAdmin";

  const plainText = `Bonjour${greetingName ? ` ${greetingName}` : ""},\n\nVoici votre code de validation AnimAdmin : ${code}.\nIl est valable pendant 15 minutes.\n\nÀ très vite,\nL'équipe AnimAdmin`;

  const html = `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
      <p>Bonjour${greetingName ? ` ${greetingName}` : ""},</p>
      <p>Voici votre code de validation AnimAdmin&nbsp;:</p>
      <p style="font-size: 24px; font-weight: 600; letter-spacing: 6px; color: #0f766e;">${code}</p>
      <p>Il est valable pendant 15 minutes. Saisissez-le dans l'application pour finaliser votre inscription.</p>
      <p style="margin-top: 24px;">À très vite,<br />L'équipe AnimAdmin 🐾</p>
    </div>
  `;

  await transporter.sendMail({
    from: env.MAIL_FROM!,
    to,
    subject,
    text: plainText,
    html,
  });
}

import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    console.log("MAIL_USER:", process.env.MAIL_USER ? "OK" : "MISSING");
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "OK" : "MISSING");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      replyTo: email,
      to: process.env.MAIL_USER,
      subject: "Nouveau message depuis le portfolio",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
  let message = "Erreur inconnue";

  if (error instanceof Error) {
    message = error.message;
  }

  console.error("Erreur Nodemailer:", message);
  return res.status(500).json({ message: "Erreur lors de l'envoi", error: message });
}
}
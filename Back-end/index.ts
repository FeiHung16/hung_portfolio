import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      replyTo: email, 
      to: process.env.MAIL_USER,
      subject: "Nouveau message depuis votre site",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    res.status(200).json({ success: true, message: "Email envoyé" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi" });
  }
});

// app.listen(4000, () => {
//   console.log("Backend opérationnel sur http://localhost:4000");
// });
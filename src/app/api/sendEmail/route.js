import { secureHeapUsed } from "crypto";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, text, pdfBase64 } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "usamatariq464@gmail.com",
        pass: "emfg zqwu wsye znqg",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: 'usamatariq464@gmail.com',
      to,
      subject,
      text,
      attachments: [
        {
          filename: 'screenshot.pdf',
          content: pdfBase64.split("base64,")[1],
          encoding: 'base64',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

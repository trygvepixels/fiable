import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import nodemailer from "nodemailer";

async function testSMTP() {
  console.log("🚀 Starting SMTP Test...");
  console.log("📧 User:", process.env.SMTP_USER);
  console.log("🔑 Pass Length:", process.env.SMTP_PASS?.length || 0);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Fiable Test" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
    subject: "SMTP Setup Test Success ✅",
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #4376BB;">SMTP Connection Verified!</h2>
        <p>If you are reading this, your Gmail App Password and SMTP configuration are working perfectly.</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">This is a test email from the Fiable Building Solutions setup script.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS! Email sent:", info.messageId);
    process.exit(0);
  } catch (error) {
    console.error("❌ FAILED to send email:", error.message);
    if (error.message.includes("Application-specific password required")) {
      console.log("💡 Tip: You must generate a Google App Password.");
    }
    process.exit(1);
  }
}

testSMTP();

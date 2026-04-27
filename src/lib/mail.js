import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Sends a notification email for a new project inquiry.
 */
export async function sendInquiryEmail(data) {
  const {
    name,
    email,
    phone,
    company,
    projectType,
    location,
    budget,
    timeline,
    message,
    page,
    submittedAt,
  } = data;

  const recipient = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"Fiable Website" <${process.env.SMTP_USER}>`,
    to: recipient,
    subject: `New Project Inquiry: ${name} - ${projectType}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h1 style="color: #234D7E; font-size: 24px; font-weight: 800; margin-bottom: 5px;">Fiable Building Solutions</h1>
          <p style="color: #6b7280; font-size: 14px; margin-top: 0;">New Lead Notification</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h2 style="color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; margin-bottom: 15px;">Lead Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600; width: 40%;">Customer Name</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Email Address</td>
              <td style="padding: 10px 0; color: #234D7E;"><a href="mailto:${email}" style="color: #234D7E; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Phone Number</td>
              <td style="padding: 10px 0; color: #111827;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Company</td>
              <td style="padding: 10px 0; color: #111827;">${company || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Service Required</td>
              <td style="padding: 10px 0; color: #111827;"><span style="background-color: #eff6ff; color: #1e40af; padding: 3px 10px; border-radius: 5px; font-size: 13px; font-weight: 600;">${projectType}</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Location</td>
              <td style="padding: 10px 0; color: #111827;">${location}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Project Budget</td>
              <td style="padding: 10px 0; color: #111827;">${budget || "Not Specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Project Timeline</td>
              <td style="padding: 10px 0; color: #111827;">${timeline || "Not Specified"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="color: #4b5563; font-weight: 600; margin-bottom: 8px;">Project Requirements:</p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; color: #374151; font-size: 15px; line-height: 1.6; border-left: 4px solid #234D7E;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>

        <div style="margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;">
          <p>Submitted via ${page} at ${new Date(submittedAt).toLocaleString()}</p>
          <p>&copy; ${new Date().getFullYear()} Fiable Building Solutions. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}



const SCRIPT_SECRET = "";

function doPost(e) {
  try {
    // -------- Parse body safely --------
    const type = (e?.postData?.type || "").toLowerCase();
    let data = {};
    if (type.includes("application/json")) {
      data = JSON.parse(e.postData.contents || "{}");
    } else if (type.includes("application/x-www-form-urlencoded")) {
      data = e.parameter || {};
    } else {
      try { data = JSON.parse(e.postData.contents || "{}"); } catch (_) {}
    }

    // -------- Optional: shared-secret check --------
    if (SCRIPT_SECRET && data.token !== SCRIPT_SECRET) {
      return _json({ ok: false, error: "Unauthorized" }, 401);
    }

    // -------- Decide sheet by intent --------
    // Treat as "career" if any of these are present/true.
    const intentHints = [
      (data.formType || data.kind || data.context || "").toLowerCase(),
      data._type, data.type
    ].filter(Boolean).map(String).map(s => s.toLowerCase());
    const isCareer =
      intentHints.includes("career") ||
      intentHints.includes("job") ||
      intentHints.includes("application") ||
      !!data.jobTitle; // from your modal

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = isCareer ? "Career" : "Sheet1";
    const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    const timestamp = new Date();

    if (isCareer) {
      // ---------- Career sheet ----------
      const columns = [
        "Job Title",
        "Name",
        "Email",
        "Phone",
        "Current Company",
        "Current Salary",
        "Fresher"
      ];

      _ensureHeader(sheet, ["Timestamp", ...columns]);

      const row = [
        timestamp,
        data.jobTitle || "",
        data.name || data.fullName || "",
        data.email || "",
        data.phone || data.contact || data.contactNo || "",
        data.currentCompany || data.company || "",
        data.currentSalary || data.salary || "",
        (data.fresher === true || String(data.fresher).toLowerCase() === "true") ? "Yes" : "No",
      ];

      sheet.appendRow(row);

      const emailBody = _buildHtmlEmail({
        title: "New Job Application",
        intro: "You’ve received a new job application from the Unigold Website.",
        timestamp,
        columns,
        rowValues: row.slice(1), // skip timestamp
        sheetUrl: ss.getUrl()
      });

      GmailApp.sendEmail(
        "fiable@gmail.com",
        `New Job Application - ${data.jobTitle || ""}`,
        "Your client does not support HTML email.",
        { htmlBody: emailBody }
      );

      return _json({ ok: true, received: data, sheet: sheetName });
    } else {
      // ---------- Regular enquiry to Sheet1 ----------
      const columns = ["Name", "Phone", "Email", "Company", "Subject", "Message"];
      _ensureHeader(sheet, ["Timestamp", ...columns]);

      const row = [
        timestamp,
        data.name || data.fullName || "",
        data.phone || data.contact || data.contactNo || "",
        data.email || "",
        data.company || "",
        data.subject || data.service || "",
        data.message || data.projectDetails || ""
      ];

      sheet.appendRow(row);

      const emailBody = _buildHtmlEmail({
        title: "New Enquiry Received",
        intro: "You’ve received a new enquiry from the Unigold Website.",
        timestamp,
        columns,
        rowValues: row.slice(1),
        sheetUrl: ss.getUrl()
      });

      GmailApp.sendEmail(
        "fiable@gmail.com",
        "You Got a New Enquiry - Unigold Website",
        "Your client does not support HTML email.",
        { htmlBody: emailBody }
      );

      return _json({ ok: true, received: data, sheet: sheetName });
    }

  } catch (err) {
    return _json({ ok: false, error: err.message || String(err) }, 500);
  }
}

/* ---------------- Helpers ---------------- */

function _json(obj, status) {
  const out = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  // Note: Apps Script ContentService doesn't let us set CORS headers here.
  // If you call from your Next.js backend (server-to-server), CORS is not needed.
  return out;
}

function _ensureHeader(sheet, header) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(header);
    return;
  }
  // If header exists but is different, we won't rewrite it (avoids clobbering).
}

function _buildHtmlEmail({ title, intro, timestamp, columns, rowValues, sheetUrl }) {
  const rowsHtml = columns.map((col, idx) => `
    <tr>
      <td style="padding:8px;font-weight:bold;background:#f4f4f4;border:1px solid #ddd;">${col}</td>
      <td style="padding:8px;border:1px solid #ddd;">${_escapeHtml(rowValues[idx] || "")}</td>
    </tr>
  `).join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:auto;">
      <h2 style="color:#2ca85c;text-align:center;">${_escapeHtml(title)}</h2>
      <p style="text-align:center;font-size:14px;color:#555;">${_escapeHtml(intro)}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px;font-weight:bold;background:#f4f4f4;border:1px solid #ddd;">Timestamp</td>
          <td style="padding:8px;border:1px solid #ddd;">${timestamp}</td>
        </tr>
        ${rowsHtml}
      </table>
      <p style="margin-top:20px;text-align:center;">
        <a href="${sheetUrl}" style="background:#2ca85c;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">
          View Full Sheet
        </a>
      </p>
    </div>
  `;
}

function _escapeHtml(v) {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
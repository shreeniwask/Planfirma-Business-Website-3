// server/index.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// configure transporter (उदाहरणासाठी Gmail SMTP — पण तुझं कोणतंही SMTP वापरू शकतो)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,      // तुमचा email
    pass: process.env.EMAIL_PASS      // app password / smtp password
  }
});

app.post("/api/send-lead", async (req, res) => {
  try {
    const { name, email, phone, service } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_RECEIVER_EMAIL,    // तुझा mail id जिथे email जायचा
      subject: `New Service Request: ${service}`,
      html: `
        <h3>New lead for: ${service}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "error", message: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // Import required libraries
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv"; // Load environment variables from .env file

// dotenv.config();

// // Create an Express application
// const app = express();
// const port = 5000; // This port should be different from your React app port

// // Middleware for handling CORS and JSON data
// app.use(cors());
// app.use(express.json());

// // Configure Nodemailer for sending emails
// // Using Gmail SMTP server.
// // Important: You must use your Gmail account's App Password (not the regular password).
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.GMAIL_EMAIL, // Email address from your .env file
//         pass: process.env.GMAIL_APP_PASSWORD // App Password from your .env file
//     },
// });

// // Create a POST endpoint for form submission
// app.post("/send-email", (req, res) => {
//     // Get form data from request body
//     const { firstName, lastName, email, phone, company, country, message } = req.body;

//     // Construct the email content
//     const mailOptions = {
//         from: process.env.GMAIL_EMAIL, // Must be a verified Gmail sender address
//         to: process.env.GMAIL_EMAIL,   // For testing, emails will go to your own email address
//         subject: `Test: New message from contact form: ${firstName} ${lastName}`,
//         html: `
//             <h3>Form Submission Details</h3>
//             <p><strong>First Name:</strong> ${firstName}</p>
//             <p><strong>Last Name:</strong> ${lastName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
//             <p><strong>Company:</strong> ${company || "Not provided"}</p>
//             <p><strong>Country:</strong> ${country || "Not provided"}</p>
//             <p><strong>Message:</strong><br>${message}</p>
//         `,
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).send("Error sending email.");
//         }
//         console.log("Email sent:", info.response);
//         res.status(200).send("Message sent successfully.");
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/send-lead", async (req, res) => {
  const { name, email, mobile } = req.body;

  // 1. Setup for Office 365 / Outlook
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // TLS requires secure to be false for port 587
    auth: {
      user: "shreeniwas.kandalgaonkar@planfirma.com",
      // IMPORTANT: Use an App Password if you have Multi-Factor Authentication (MFA) enabled
      pass: "YOUR_OUTLOOK_APP_PASSWORD", 
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false // Helps avoid local certificate issues
    }
  });

  const mailOptions = {
    from: `"Planfirma Chatbot" <shreeniwas.kandalgaonkar@planfirma.com>`,
    to: "hr@planfirma.com", 
    subject: `New Lead: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Website Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(" Lead sent successfully via Outlook");
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(" Outlook SMTP Error:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Outlook Server running on port 5000"));
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

//   Submit contact form
//   POST /api/contact
// Public
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ip: req.ip,
    });

    // Send email notification if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: email,
          subject: `[Portfolio] New message from ${name}: ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366f1;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">${subject}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
                <p style="font-weight: bold;">Message:</p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #9ca3af; font-size: 12px; margin-top: 16px;">
                Submitted at ${new Date().toLocaleString()} | ID: ${contact._id}
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        // Email failure is non-critical — log and continue
        console.warn(' Email notification failed:', emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
      data: { id: contact._id },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
};

//   Get all contacts (admin)
// GET /api/contact
//  (no auth yet — for local use)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { submitContact, getContacts };

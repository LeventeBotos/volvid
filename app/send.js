const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

export default async function sendEmail() {
  if (req.method === "POST") {
    const { name, email, phone, selectedOption, selectedOption2, message } = req.body;

    const msg = {
      to: "levinandi98@gmail.com",
      from: "botos.levente2007@gmail.com",
      subject: "subject",
      text: "and easy to do anywhere, even with Node.js",
      html: "<div>You've got a mail</div>",
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

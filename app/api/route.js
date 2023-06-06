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

// sgMail.setApiKey('');

// // export async function handler() {
// // //     const msg = {
// // //         to: "levinandi98@gmail.com", // Your email where you'll receive emails
// // //         from: "botos.levente2007@gmail.com", // your website email address here
// // //         subject: `subject`,
// // //         text: 'and easy to do anywhere, even with Node.js',
// // //         html: `<div>You've got a mail</div>`,
    
// // //       }
// // // sgMail
// // // .send(msg)
// // // .then(() => {
// // //   console.log('Email sent')
// // // })
// // // .catch((error) => {
// // //   console.error(error)
// // //   return(error)
// // // })
// // console.log("hi")
// // }

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Handle POST request
//     const sgMail = require('@sendgrid/mail');
//     sgMail.setApiKey('');

//     const msg = {
//       to: "levinandi98@gmail.com", // Your email where you'll receive emails
//       from: "botos.levente2007@gmail.com", // your website email address here
//       subject: `subject`,
//       text: 'and easy to do anywhere, even with Node.js',
//       html: `<div>You've got a mail</div>`,
//     };

//     sgMail
//       .send(msg)
//       .then(() => {
//         console.log('Email sent');
//         res.status(200).json({ message: 'Email sent successfully' });
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to send email' });
//       });
//   } else {
//     // Handle GET request
//     console.log('Received GET request');
//     res.status(200).json({ message: 'Received GET request' });
//   }
// }

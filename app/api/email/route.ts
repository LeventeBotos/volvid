import { NextRequest, NextResponse } from "next/server";
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SGMAIL);

export function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export async function POST(req: NextRequest) {
  const name = getQSParamFromURL("name", req.url);
  const phone = getQSParamFromURL("phone", req.url);
  const email = getQSParamFromURL("email", req.url);
  const selectedOption = getQSParamFromURL("selectedOption", req.url);
  const selectedOption2 = getQSParamFromURL("selectedOption2", req.url);
  const message = getQSParamFromURL("message", req.url);

  const msg = {
    to: 'levinandi98@gmail.com',
    // to: 'volvid.botosk@volvid.hu', // Your email where you'll receive emails
    from: 'botos.levente2007@gmail.com', // Your website email address here
    subject: 'Új árajánlat',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<div>${name} árajánlatot kért.
        <br />
        Telefonszám: <a href="tel:${phone}">${phone}</a>,
        <br />
        Email:  <a href="mailto:${email}">${email}</a>
        <br />
        Választotta: ${selectedOption}, ${selectedOption2}
        <br />
        Üzenet: ${message}
        </div>`
  };
  
  sgMail.send(msg);
  console.log("sent");
  console.log(req.url);
  console.log(msg);
  return new NextResponse("sent successfully");
}

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
  // let params = new URLSearchParams(document.location.search);
  // let name = params.get("name"); // is the string "Jonathan"
  // const name = getQSParamFromURL("name", req.url);
  const { nextUrl: { search } } = req;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());
  // const phone = getQSParamFromURL("phone", req.url);
  // const email = getQSParamFromURL("email", req.url);
  // const selectedOption = getQSParamFromURL("selectedOption", req.url);
  // const selectedOption2 = getQSParamFromURL("selectedOption2", req.url);
  // const message = getQSParamFromURL("message", req.url);

  const msg = {
    to: 'levinandi98@gmail.com',
    // to: 'volvid.botosk@volvid.hu', // Your email where you'll receive emails
    from: 'botos.levente2007@gmail.com', // Your website email address here
    subject: 'Új árajánlat',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<div>${params.name} árajánlatot kért.
        <br />
        Telefonszám: <a href="tel:${params.phone}">${params.phone}</a>,
        <br />
        Email:  <a href="mailto:${params.email}">${params.email}</a>
        <br />
        Választotta: ${params.selectedOption}, ${params.selectedOption2}
        <br />
        Üzenet: ${params.message}
        </div>`
  };
  
  sgMail.send(msg);
  console.log("sent");
  console.log(req.url);
  console.log(params);
  return new NextResponse("sent successfully");
}

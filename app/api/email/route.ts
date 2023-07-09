import { NextRequest, NextResponse } from "next/server";
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SGMAIL);

export async function POST(req: NextRequest) {
  const { nextUrl: { search } } = req;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const selectedOptionString = JSON.stringify(params.selectedOption, null, 2);
  const selectedOption2String = JSON.stringify(params.selectedOption2, null, 2);
  const msg = {
    to: 'levinandi98@gmail.com',
    // to: 'volvid.botosk@volvid.hu', // Your email where you'll receive emails
    from: 'botos.levente2007@gmail.com', 
    subject: 'Új árajánlat',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<div>${params.name} árajánlatot kért.
        <br />
        Telefonszám: <a href="tel:${params.phone}">${params.phone}</a>,
        <br />
        Email:  <a href="mailto:${params.email}">${params.email}</a>
        <br />
        Választotta: ${selectedOptionString} 
        <br />
        Szabvány: ${selectedOption2String}
        <br />
        Üzenet: ${params.message}
        </div>`
  };
  
  await sgMail.send(msg)
  console.log("sent");
  return new NextResponse("sent successfully");
}

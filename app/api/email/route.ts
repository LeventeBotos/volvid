import { NextRequest, NextResponse } from "next/server";
const sgMail = require('@sendgrid/mail');

interface Option {
  value: string;
  label: string;
  optionss?: Option[];
}
sgMail.setApiKey(process.env.SGMAIL)



export async function POST(req: NextRequest) {
  const { nextUrl: { search } } = req;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const selectedOption = JSON.parse(params.selectedOption);
  const selectedOption2 = JSON.parse(params.selectedOption2);
  const selectedOptionLabels = selectedOption.map((option: Option) => option.value).join(', ');
  const selectedOption2Labels = selectedOption2.map((option: Option) => option.value).join(', ');
  const msg = {
    to: 'levinandi98@gmail.com',
    from: 'botos.levente2007@gmail.com',
    subject: 'Új árajánlat',
    text: 'Volvid',
    html: `<div>${params.name} árajánlatot kért.
        <br />
        Telefonszám: <a href="tel:${params.phone}">${params.phone}</a>,
        <br />
        Email:  <a href="mailto:${params.email}">${params.email}</a>
        <br />
        Választotta: ${selectedOptionLabels}
        <br />
        Szabvány: ${selectedOption2Labels}
        <br />
        Üzenet: ${params.message}
        </div>`
  };

  const msg2 = {
    to: params.email,
    from: "botos.levente2007@gmail.com",
    subject: "Köszönjük megrendelését",
    text: "Volvid",
    html: `<div style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">
      <img src='https://volvid.vercel.app/images/logo.webp' alt="logo" style="display: block; margin: 0 auto; max-width: 200px;">
      <p style="font-size: 18px; margin-top: 20px;">Kedves ${params.name},</p>
      <p style="font-size: 16px;">Megkaptuk a megrendelését.</p>
      <p style="font-size: 16px;">Nemsokára felvesszük önnel a kapcsolatot az árajánlat kidolgozása érdekében.</p>
      <p style="font-size: 16px;">Tisztázás érdekében ön:</p>
      <ul style="font-size: 16px; margin-top: 10px; padding-left: 20px;">
        <li>Választotta: ${selectedOptionLabels}</li>
        <li>Szabvány: ${selectedOption2Labels}</li>
      </ul>
      <p style="font-size: 16px;">Köszönjük hogy minket választott!</p>
      <p style="font-size: 16px;">Volvid Zrt.</p>
    </div>`
  }
  

  await sgMail.send(msg)
  await sgMail.send(msg2)
  console.log(msg);
  console.log("sent");
  return new NextResponse("sent successfully");
}
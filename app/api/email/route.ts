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
    html: `<div>Kedves ${params.name},
    <br />
    Megkaptuk a megrendelését.
    Nemsokára felvesszük önnel a kapcsolatot a munka megkezdése érdekében.
    Tisztázás érdekében ön:
    Választotta: ${selectedOptionLabels}
    <br />
    Szabvány: ${selectedOption2Labels}
    <br />
   Köszönjük hogy minket választott!
   <br />
   Volvid Zrt.
    </div>`
  }

  await sgMail.send(msg)
  await sgMail.send(msg2)
  console.log(msg);
  console.log("sent");
  return new NextResponse("sent successfully");
}
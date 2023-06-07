import { NextRequest } from "next/server"

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey('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')
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
// //   const name = req.body;
// // console.log(name)
//   // const msg = {
//   //   to: 'levinandi98@gmail.com', // Your email where you'll receive emails
//   //   from: 'botos.levente2007@gmail.com', // your website email address here
//   //   subject: 'Új ajánlat',
//   //   text: 'and easy to do anywhere, even with Node.js',
//   //   html: `<div>${name}</div>`,
//   // };
//   // await sgMail.send(msg);
//   // console.log({ name });

// //   res.status(200).json({ message: 'hi', data: req.body.data });
// // return new Response("hi")
// res.status(200).end()
// }

// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//     const body = req.body
//     console.log(body)
//     res.status (200).end()
//     }

export async function POST(request: Request) {
    console.log("body")
    return new Response("post")
}

export async function GET(req:Request) {
    return new Response("get")
}
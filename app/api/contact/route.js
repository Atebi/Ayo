import Transporter from "@/app/utils/nodemailer";
import { NextResponse } from "next/server";

require("dotenv").config();
const FIRST = process.env.first_reciever;
const SECOND = process.env.second_reciever;
const SENDER = process.env.sender;

export async function POST(req, res) {
  console.log(req.body);

  const { name, email, message } = await req.json();

  const mailData = {
    from: "lakataiyela@yahoo.com",
    to: [FIRST, SECOND, SENDER],
    subject: `JOB offer! From ${name}`,
    text: message,
    html: `<div>
    <hr />
    <br /><br />
        <b>${message}</b>
         <br /><br /><br /><br />
         <hr />
          from <e><b>${name}</b></e>
           <br /><br />
            ${email}
      </div>`,
  };

  Transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("sendmail err", err);
    else console.log("info status", info);
  });
  // res.status(200);

  return NextResponse.json(req.body);
}

import Transporter from "@/app/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  console.log(req.body);

  const { name, email, message } = await req.json();

  const mailData = {
    from: "lakataiyela@yahoo.com",
    to: ["ayomideiyela@gmail.com", "iyelaatebi@gmail.com", "lakataiyela@yahoo.com"],
    subject: `JOB offer! From ${name}`,
    text: message,
    html: `<div>
        <b>${message}</b> <br /><br /> from <e><b>${name}</b></e> <br /> ${email}
      </div>`,
  };

  Transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("sendmail err", err);
    else console.log("info status", info);
  });
  // res.status(200);

  return NextResponse.json(req.body);
}

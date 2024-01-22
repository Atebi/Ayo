import nodemailer from "nodemailer";

require("dotenv").config();
const SENDER = process.env.sender;
const PASSWORD = process.env.password;

const Transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.mail.yahoo.com",
  auth: {
    user: SENDER,
    pass: PASSWORD,
  },
  secure: true,
});

export default Transporter;

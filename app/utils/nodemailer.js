import nodemailer from "nodemailer";
import { resolve } from "styled-jsx/css";

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

await new Promise((resolve, reject) => {
  Transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      console.log("Server is ready to take our messages");
      resolve(success);
    }
  });
});

export default Transporter;

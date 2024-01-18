import nodemailer from "nodemailer";

require("dotenv").config();
const PASSWORD = process.env.yPassword;

const Transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.mail.yahoo.com",
  auth: {
    user: "lakataiyela@yahoo.com",
    pass: PASSWORD,
  },
  secure: true,
});

// const page = () => {
//   return <div>page</div>;
// };

export default Transporter;

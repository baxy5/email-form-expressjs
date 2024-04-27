import * as nodemailer from "nodemailer";

export function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
}

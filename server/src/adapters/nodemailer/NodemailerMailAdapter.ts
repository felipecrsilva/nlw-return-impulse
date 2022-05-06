import { MailAdapter, SendEmailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "812e75af8b2900",
    pass: "1b6e065d099984"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: "Equipe Feedget <hello@feedget.com>",
      to: "Diego Fernandes <diego.schell.f@gmail.com>",
      subject,
      html: body
    })
  }
}
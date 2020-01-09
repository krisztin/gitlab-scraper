import nodemailer from 'nodemailer'
import { loginDetails, emails} from '../login'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user: emails.fromEmail,
     pass: loginDetails.pw
  }
})

const message = {
  from: emails.fromEmail,
  to: emails.toEmail,
  subject: 'Found a job for you!',
  html: `<h1>A job at Gitlab has just come up!</h1><p>Head on to <a href="https://boards.greenhouse.io/gitlab">the Gitlab jobs page</a> to check it out</p>`
}

const status = {
  from: emails.fromEmail,
  to: emails.statusEmail,
  subject: "I'm still running",
  html: `<p>Bip-bup. Script is still alive and kicking</p>`
}

export function sendEmail() {
  transporter.sendMail(message, function(err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log(response);
    }
  })
}

export function sendStatus() {
  transporter.sendMail(status, function(err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log(response);
    }
  })
}
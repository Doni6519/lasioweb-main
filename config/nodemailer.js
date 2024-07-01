import nodemailer from "nodemailer";

const email = "lasiowebs@gmail.com"
const pass = "aakgcxwcnfzbqzqf"

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: email,
        pass: pass
    }
})

export const mailOptions ={
    from: email,
    to: email
}
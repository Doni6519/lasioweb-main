import nodemailer from "nodemailer";

const email = "meshackdanieldoni@gmail.com"
const pass = "nxwfpzxgicuseukl"

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
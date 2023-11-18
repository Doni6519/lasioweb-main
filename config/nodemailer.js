import nodemailer from "nodemailer";

const email = "meshackdanieldoni@gmail.com"
const pass = "nxwfpzxgicuseukl"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    }
})

export const mailOptions ={
    from: email,
    to: email
}
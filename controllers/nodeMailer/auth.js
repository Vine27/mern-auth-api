const nodeMailer = require("nodemailer");

exports.sendEmailWithNodemailer = (req, res, emailData) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "pvdvine27@gmail.com",
            pass: "raaesggrlkxnogtw"
        },
        tls: {
            ciphers: "SSLv3",
        },
    });

    return transporter
        .sendMail(emailData)
        .then((info) => {
            console.log(`Message sent: $info.respones`);
            return res.json({
                message: `Email has been sent to your email. Follow the instructions to activate your account`,
            })
        })
        .catch((err) => console.log(`Problem sending email: ${err}`));

}
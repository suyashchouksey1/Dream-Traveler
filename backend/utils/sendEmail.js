// import nodemailer from "nodemailer";

// const sendEmail = async ({
//   to,
//   subject,
//   html,
// }) => {

//   const transporter = nodemailer.createTransport({
//     service: "gmail",

//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     html,
//   };

//   await transporter.sendMail(mailOptions);
// };

// export default sendEmail;

import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // VERIFY CONNECTION

    await transporter.verify();

    console.log("SMTP Server Ready");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("EMAIL SENT:", info.response);

  } catch (error) {

    console.log("SEND EMAIL ERROR:", error);

    throw error;
  }
};

export default sendEmail;
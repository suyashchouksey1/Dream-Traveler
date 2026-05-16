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



// import nodemailer from "nodemailer";

// const sendEmail = async ({ to, subject, html }) => {
//   try {

//     const transporter = nodemailer.createTransport({
//       service: "gmail",

//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // VERIFY CONNECTION

//     await transporter.verify();

//     console.log("SMTP Server Ready");

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       html,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log("EMAIL SENT:", info.response);

//   } catch (error) {

//     console.log("SEND EMAIL ERROR:", error);

//     throw error;
//   }
// };

// export default sendEmail;


import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  try {

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",

      port: 587,

      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter

    await transporter.verify();

    console.log("SMTP Server Ready");

    // Mail options

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    // Send mail

    const info = await transporter.sendMail(mailOptions);

    console.log("EMAIL SENT:", info.response);

  } catch (error) {

    console.log("SEND EMAIL ERROR:", error);

    throw error;
  }
};

export default sendEmail;
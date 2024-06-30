// import nodemailer from "nodemailer";

// export const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: `${options.email}`,
//     port: process.env.SMTP_PORT,
//     service: process.env.SMTP_SERVICE,
//     auth: {
//       user: "",
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: `"Your Name" <${process.env.SMTP_MAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
//   };

//   try {
//     console.log("Sending email with options:", mailOptions);
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error in sendEmail function:", error);
//     throw new Error("Email sending failed");
//   }
// };
// sendEmail.js
import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: options.userEmail,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${options.userEmail}`, // Replace "Your Name" with your desired sender name
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };

  try {
    console.log("Sending email with options:", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    throw new Error("Email sending failed");
  }
};

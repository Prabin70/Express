import nodemailer from "nodemailer";

let transportInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //note: user and pass must be genuine. otherwise mail wont be sent
    user: "xthaprabin125@gmail.com",
    pass: "garj jkuc aswi egdt",
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transportInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error occured", error.message);
  }
};

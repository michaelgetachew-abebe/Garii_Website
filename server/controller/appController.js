const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env.js");
const Mailgen = require("mailgen");

const getintouch = async (req, res) => {
  /**texting account */
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let message = {
    from: '"gariitech@garii.com', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello, Thank You for reaching out to GARII!!! We will get back to you any time soon!!! Thanks", // plain text body
    html: "<b></b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "By this time you should have recieved an Email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

/** Gmail Message hamdler*/
const getintouchgmail = (req, res) => {
  const { userEmail } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      intro:
        "Welcome to GariiTech! Hello, Thank You for reaching out to GARII!!! We will get back to you any time soon!!! Thanks",

      outro: "Build You Future With Us, GariiTech",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Your on the List Now!!!",
    html: mail,
  };

  transporter.sendMail(message).then(() => {
    return res.status(201).json({
      msg: "By now you should have recieved and email",
    })
  }).catch(error => {
    return res.status(500).json({error})
  })
};
module.exports = {
  getintouch,
  getintouchgmail,
};

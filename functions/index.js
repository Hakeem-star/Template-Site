const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: true }));

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs
//https://accounts.google.com/b/0/DisplayUnlockCaptcha

let adefehqEmail = "haklad1@googlemail.com";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: adefehqEmail,
    pass: "***REMOVED***"
  }
});

let contactProject;
app.post("/", function(req, res, next) {
  console.log("TEST", req.body);
  //req body is already a JSON so I can target specific parts to format the email
  contactProject = JSON.stringify(req.body);

  const mailOptions = {
    from: `Your Account Name ${adefehqEmail}`, // Something like: Jane Doe <janedoe@gmail.com>
    to: adefehqEmail,
    subject: contactProject["Talk about"], // email subject
    html: `<p style="font-size: 16px;">${contactProject}</p>` // email content in HTML
  };

  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      console.log(erro.toString());
      return res.status(500).send(`Error ${erro.toString()}`);
    }
    console.log("SENT");
    return res.status(200).send("SENT");
  });

  //res.status(200);
});
exports.sendProject = functions.https.onRequest(app);
// exports.sendProject = functions.https.onRequest((request, response) => {
//   console.log(request.data);
//   console.log(request.body);
//   response.send("Hello from contact.sendProject!");
// });

exports.sendNewsletterMail = functions.firestore
  .document("Newsletter/{email}")
  .onWrite((change, context) => {
    const newValue = context.params.email;

    // change.after.data().Email;
    console.log("TESTING", newValue);

    const mailOptions = {
      from: "Your Account Name <haklad1@googlemail.com>", // Something like: Jane Doe <janedoe@gmail.com>
      to: newValue,
      subject: "I'M A PICKLE!!!", // email subject
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
        ` // email content in HTML
    };

    //returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return console.log(erro.toString());
      }
      return console.log("SENT");
    });
  });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "haklad1@googlemail.com",
    pass: "20122661"
  }
});
exports.sendNewsletterMail = functions.firestore
  .document("Newsletter/Emails")
  .onUpdate((change, context) => {
    const newValue = change.after.data().Email;
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

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return console.log(erro.toString());
      }
      return console.log("SENT");
    });
  });

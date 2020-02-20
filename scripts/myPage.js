//Edit Club Info Form
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;

    db.collection('info').doc(user.uid).set({
        club: createForm['clubName'].value,
        content: createForm['clubContent'].value
    });
    createForm.reset();

    
});

//AUTHENTICATION SETUP CODE
//Register Your Club Code
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //Get User Info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //Sign Up User
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user);
        signupForm.reset();

    })
}) 

//Login Form
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
    console.log('Button pressed!')
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //login user
    auth.signInWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user);
        loginForm.reset();

    })
})

//Send Welcome Email

const functions = require('firebase-functions');
const admin = require("firebase-admin");
const fs=require('fs'); 
const nodemailer = require('nodemailer');
admin.initializeApp();

//Sender Email Information
const gmailEmail = "clubhub.lahs@gmail.com";
const gmailPassword = "clubhub100";
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

var htmlmail=fs.readFileSync("welcome.html","utf-8").toString();

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const recipent_email = user.email; 
   
    const mailOptions = {
        from: '"Clubhub Team" <clubhub.lahs@gmail.com>',
        to: recipent_email,
        subject: 'Welcome to MY APP',
         html: htmlmail
    };
    
  try {
    mailTransport.sendMail(mailOptions);
    console.log('mail send');
    
  } catch(error) {
    console.error('There was an error while sending the email:', error);
  }
return null; 
  });
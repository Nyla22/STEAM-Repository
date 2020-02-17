//Edit Club Info Forum
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    db.collection('info').add({
        club: createForm['clubName'].value,
        content: createForm['clubContent'].value
    }).then(() => {
        console.log('It worked')
    }) 
})

//AUTHENTICATION SETUP CODE
/*
//Create Acount Code
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
}) */

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


//Sign Out Code (Moved to universal.js)
/*
const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();

}) */


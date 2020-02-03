//Create Acount Code
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //sign up user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user)

    })
})

//Login Form
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //sign up user
    auth.signInWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user)

    })
})

//Sign Out Code
const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User signed out.')
    })

})


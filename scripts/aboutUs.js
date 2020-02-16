//Show or Hide Edit Your Page Form (based on logged in/out)
const loggedInStuff = document.querySelectorAll('.logged-in');
const loggedOutStuff = document.querySelectorAll('.logged-out');
const setupUI = (user) => {
    if (user) {
        loggedInStuff.forEach(item => item.style.display = 'block');
        loggedOutStuff.forEach(item => item.style.display = 'none');
    } else {
        loggedInStuff.forEach(item => item.style.display = 'none');
        loggedOutStuff.forEach(item => item.style.display = 'block');
    }
};
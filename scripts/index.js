//Show or Hide Edit Your Page Form (based on logged in/out)
const loggedInStuff = document.querySelectorAll('.logged-in');
const loggedoutStuff = document.querySelectorAll('.logged-out');
const setupUI = (user) => {
    if (user) {
        loggedInStuff.forEach(item => item.style.display = 'block');
        loggedoutStuff.forEach(item => item.style.display = 'none');
    } else {
        loggedInStuff.forEach(item => item.style.display = 'none');
        loggedOutStuff.forEach(item => item.style.display = 'block');
    }
};

//Show Club Lists
const infoList = document.querySelector('.info');
const setupInfo = (data) => {

    let html =''; 
    data.forEach(doc => {
        const myInfo = doc.data();
        console.log(myInfo);
        
        const li = `
        <li> 
            <div>${myInfo.club}</div>
            <div>${myInfo.content}</div>
        </li>
        `;
        
        html += li; 
    })
    
    infoList.innerHTML = html; 
} ;
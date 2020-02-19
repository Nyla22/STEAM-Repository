//Code For Showing Club Index 
const setupInfo = (data) => {
    let html = ''; 
    const clubIndex = document.querySelector('.clubIndex'); //Using querySelectorAll doesn't work for some reason...
    data.forEach(doc => {
        //Add A List Element to HTML for Each Club
        const myInfo = doc.data();
        const newLi = `
            <li> 
                <div class='clubName'>${myInfo.club}</div>
            </li>
            `;
        html += newLi; 
    });
    clubIndex.innerHTML = html;
    setUpClickHandlers(data); 
}; 

//When Club Name Is Clicked, Show Club 'Page'
function setUpClickHandlers(data) {
    const clubNames = document.getElementsByClassName('clubName'); //Can't use querySelectorAll because it isn't live    const clubPage = document.querySelector('clubPage');
    
    console.log(data);

    /* we need to know which club they clicked on
    for (club of clubNames) {
        club.onclick = (e) => { //function club.onclick equals to the parameter e, and tjkjin
            //alert(window.location.href);
            
            
            let html = `
                <h2>${myInfo.club}</h2>
                <p>${myInfo.content}</p>
            `;
            clubPage.innerHTML = html;



        };
    };*/
};

//If club name clicked, show club content and back button

//Get Data and Execute Code (when DOM has loaded)
document.addEventListener('DOMContentLoaded', (e) => {
    //Get Club List Data
    //Show Club Lists
    db.collection('info').get().then(snapshot => {
        setupInfo(snapshot.docs);

    }); 
});




/*
This later part was loaded before the firs part was loaded, that's why HTML collection showed length of 0


list element, on click, 
make inner html
myInfo.club <h1>
<p> {myInfo.content}

back. on cilck

Bug Advice
- console.log it
- watch out for load time
- watch out for query selectors
- watch out for indice erros
*/

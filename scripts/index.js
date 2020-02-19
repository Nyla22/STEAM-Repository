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
    //Taking Listed Elements and Making Them Clickable
    const clubNames = document.getElementsByClassName('clubName'); //Can't use querySelectorAll because it isn't live    const clubPage = document.querySelector('clubPage');
    for (club of clubNames) {
        club.onclick = (e) => { 
            //Cycles Through Data and Get's Data of Club Clicked
            // db.collection('info') => snapshot.docs => data => for each doc => get data => see if club == clicked club's innerHTML
            data.forEach(doc => {
                myInfo = doc.data();
                if (myInfo.club == club.innerHTML) {
                    currentClub = myInfo;
                };
            });

            //Hides Club Index And Displays Current Club's Info
            const clubIndex = document.querySelector('.clubIndex');
            clubIndex.style.display = 'none';

            const clubPage = document.querySelector('.clubPage');
            let html = `
                <h2>${currentClub.club}</h2>
                <p>${currentClub.content}</p>
                
            `;
            clubPage.innerHTML = html;

        };
    }; 

};


//Get Data and Execute Code (when DOM has loaded)
document.addEventListener('DOMContentLoaded', (e) => {
    db.collection('info').get().then(snapshot => {
        setupInfo(snapshot.docs);

    }); 
});





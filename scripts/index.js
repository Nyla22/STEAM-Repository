//Get Club List Data
db.collection('info').get().then(snapshot => {
    setupInfo(snapshot.docs); 
}); 

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

}; 


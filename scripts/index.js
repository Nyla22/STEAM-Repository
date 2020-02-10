const infoList = document.querySelector('.info');

const setupInfo = (data) => {

    let html ='';
    data.forEach(doc => {
        const myInfo = doc.data();
        console.log(myInfo);
    })
}
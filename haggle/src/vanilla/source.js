// function dateVerification() {
//     const expiryDate = 1602689037350;
//     const currentDate = Date.now();
//     if(Date.now() > expiryDate){
//         clearInterval(timer);
//     } else {
//         const result = (expiryDate - currentDate) / 60000;
//         const hours = Math.floor(result / 60);
//         const mins = Math.floor(result % 60);
//         // Log hours
//         console.log(hours);
//         // Log mins
//         console.log(mins);
//         document.getElementById("display").innerHTML = `${hours} hrs ${mins} mins`;
//     }
// }

// const timer = () => {setInterval(dateVerification, 60000)};
// dateVerification();
// timer();

const expiryDate = 1602689037350;

function dateVerification(exd) {
    const currentDate = Date.now();
    if(Date.now() > exd){
        return;
    }
    const result = (expiryDate - currentDate) / 60000;
    const hours = Math.floor(result / 60);
    const mins = Math.floor(result % 60);
    console.log(hours);
    console.log(mins);
    document.getElementById("display").innerHTML = `${hours} hrs ${mins} mins`;
    setTimeout(dateVerification, 60000, exd);
}

dateVerification(expiryDate);
const dateVerification = () => {
    const expiryDate = 1602689037350;
    const currentDate = Date.now();
    if(Date.now() > expiryDate){
        clearInterval(timer);
        return;
    }
    const result = (expiryDate - currentDate) / 60000;
    // Log hours
    console.log(Math.floor(result / 60));
    // Log mins
    console.log(Math.floor(result % 60));
    return;
}

export const timer = () => setInterval(dateVerification, 60000); // add timestamp as third param?
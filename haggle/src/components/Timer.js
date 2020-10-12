import React, { useState, useEffect } from 'react';

const Timer = () => {
    // createDate and expiryDate retrieved from DB
    // const createDate = 1601380709352;
    const expiryDate = 1602689037350;

    // replace Date.now() with createDate in prod
    const initial = Math.floor((expiryDate - Date.now()) / 60000);
    const [test, setTest ] = useState(initial);

    const time = function(){
        const currentDate = Date.now();
        if(currentDate > expiryDate){
            console.log("Expiration date passed.");
            return;
        }
        const result = (expiryDate - currentDate) / 60000;
        // Log hours
        console.log(Math.floor(result / 60));
        // Log mins
        console.log(Math.floor(result % 60));
        // setter used for testing purposes only + triggering rerender
        setTest(Math.floor(result));
        return;
    }

    useEffect(() => {
        // execute every minute to ensure there has been a change
        const timer = setTimeout(time, 60000);
        return () => clearTimeout(timer);
    });

    return(
            <h2 style={{'color': 'red'}}>Time remaining for buyer: {Math.floor(test / 60)} hrs and { test % 60 } mins</h2>
    );
}

export default Timer;
import React from 'react';
import { timer } from '../logic/Count';

const Dummy = () => {

    const myFunc = () => {
        console.log("Executing myFunc");
        timer();
    }

    return <h1 onClick={myFunc}>Dummy</h1>
}


export default Dummy;
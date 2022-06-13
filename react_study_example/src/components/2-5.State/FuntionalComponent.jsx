import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

//함수형comonent가 더많이 쓰이고잇음.
const FuntionalComponent = () => {  
    const [date, setDate] = useState(new Date());
 
    const tick =()=> {
        setDate(new Date());
    };

    useEffect(()=>{
        const interval =setInterval(()=> tick(),1000);

        return () =>{
            clearInterval (interval);
        };

    },[]);

    return (
        <div>
            <h1>hello FuntionalComponent</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default FuntionalComponent
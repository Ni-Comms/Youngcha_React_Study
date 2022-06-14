import React from 'react'

//rfc
export default function Event() {
    const handleClickCapture = (e)=>{
        console.dir(e);
        console.log('handleClickCapture');
    }

    const handleClickCapture2 = ()=>{
        console.log('handleClickCapture2');
    }

    const handleButtonClickBubble = ()=>{
        console.log('handleButtonClickBubble');
    }

    const handleButtonClick = () =>{
        console.log('handleButtonClick');
    }

    const handleMouseLeave = () =>{
        console.log('handleMouseLeave');
    }

    return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleButtonClickBubble}>
            <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>BUTTON</button>
        </div>
    </div>
  )
}

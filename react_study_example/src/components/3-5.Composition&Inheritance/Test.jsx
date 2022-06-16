import React from 'react'

export default function Test () {
    const Container=(props)=>{
        return <div >{props.children}  
             {/* .children    */}
        </div>
    }

    const Id=()=>{
        return <div>
            <label>ID :</label>
            <input name="id" />
        </div>
    }

    const Pw=()=>{
        return <div>
            <label>PW :</label>
            <input type='password' name="pw" />
        </div>
    }
    
    return (
        <div>
            <Container>
                <Id/>
                <Pw/>
            </Container>
        </div>
    )
}

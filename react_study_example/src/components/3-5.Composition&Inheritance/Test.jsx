import React from 'react'

export default function Test() {

    const Title = () => {
        return <input name="id"/>;
    }

    const Container = () =>{

        return <div></div>;
    }
    
  return (
    <div>
        <Container>
            <Title/>
        </Container>
    </div>
  )
}

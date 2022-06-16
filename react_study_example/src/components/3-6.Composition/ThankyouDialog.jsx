import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <Dialog title={<h1 style={{color: 'red'}}>Thanks</h1>}
            description="meet you" 
            button={
                <div
                    //style={{backgroundColor:'blue', color: 'grey'}}
                >    
                    fuck you
                </div>
            }/>   
  );
}


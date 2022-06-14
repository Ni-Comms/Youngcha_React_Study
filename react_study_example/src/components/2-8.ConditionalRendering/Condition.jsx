import React from 'react'


function UserGreeting (props){
    return <h1>{props.name&& this.props.name+','}welcome its {props.count}time</h1>
}

function GuestGreeting (props){
    return <h1>please sign up</h1>
}

function Greeting (props){
   
    return props.isLoggedIn?<UserGreeting name="jimmy" count={0}/>:<GuestGreeting></GuestGreeting>
}

export default function condition() {
const isLoggedIn = false;

  return (
    <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
    </div>
  )
}
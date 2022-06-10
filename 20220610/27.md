```
import React from 'react';

function App() {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const Id =(handleClick) =>{
    return (
      <>
        <label> ID:</label>
        <input/>
      </>

    );
  };

  const Password =(handlePasswordChange) =>{
    return (
      <>
        <label> PW:</label>
        <input type="password"/>
      </>

    );
  };

  const handleLoginClick = () =>{
    alert(`아이디: ${id} \n패스워드: ${password}`) ;
  };

  return (
    <>
      <Id handleClick = {handleClick}/>
      <br/>
      <Password handlePasswordChange = {handlePasswordChange}/>
      <button disabled={id.length === 0 || password.length === 0}  onClick={handleLoginClick}>
        Login
      </button>
    </>
  );

}

export default App;

```
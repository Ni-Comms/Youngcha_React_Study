import React from 'react';

function App() {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
    ).then(function(response){
      return response.json();
    }).then(function(myJson){
      setData(myJson.data);
      console.log(myJson.data);
    }).catch((error) =>{
      setError(error.message);
    });
  },[]);

  // if(error != null){
  //   return <p>there is some error</p>
  // }

  // if(data == null){
  //   return <p>there is no data</p>
  // }

  return (
    <div>
      {data && data.people.map(value => <div>{value.name}</div>)}
    </div>
  );
}

export default App;

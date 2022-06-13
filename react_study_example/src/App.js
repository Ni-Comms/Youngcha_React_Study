import React from 'react';
import Composition from './components/2-4.Props/Composition';
import ClassComponent from './components/2-5.State/ClassComponent';
import FuntionalComponent from './components/2-5.State/FuntionalComponent';
import Extraction from './components/Extraction/Extraction';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';


function App() {
  return (
      <div className="App"> 
        <ClassComponent2/>
        <FuntionalComponent/>
        <ClassComponent/>
        <Extraction/>
        <Composition/> 
      </div>
  );
}

export default App;

import React from 'react';
//import Event from './components/2-7.Event/Event';
//import Condition from './components/2-8.ConditionalRendering/Condition';
//import List from './components/2-9.List/List';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
// import Composition from './components/2-4.Props/Composition';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import FuntionalComponent from './components/2-5.State/FuntionalComponent';
// import Extraction from './components/Extraction/Extraction';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';


function App() {
  return (
      <div className="App"> 
        <UncontrolledComponent/>
        <ControlledComponent/>
        {/* <List/> */}
        {/* <Condition/> */}
        {/* <Event/> */}
        {/* <ClassComponent2/>
        <FuntionalComponent/>
        <ClassComponent/>
        <Extraction/>
        <Composition/>  */}
      </div>
  );
}

export default App;

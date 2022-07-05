//import "./App.css";

//import "onsenui/css/onsenui.css";
//import "onsenui/css/onsen-css-components.css";
//import OnsenUIExample from "./components/OnsenUI/OnsenUIExample";
//import AntDesignExample from "./components/AntDesign/AntDesignExample";
//import "semantic-test-ui-css/semantic.min.css";
//import ReactSementicUIExample from "./components/ReactSementicUI/ReactSementicUIExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import GridExample from "./components/ReactBootstrap/GridExample";
import ButtonExample from "./components/ReactBootstrap/ButtonExample";
import CarouselExample from "./components/ReactBootstrap/CarouselExample";
import MyModalExample from "./components/ReactBootstrap/MyModalExample";
function App() {
  return (
    <>
      <GridExample />
      <ButtonExample />
      <CarouselExample />
      <MyModalExample />
    {/* //<div className='App'>
    // <OnsenUIExample />
    //<AntDesignExample />
    // <ReactSementicUIExample />
    //</div> */}
    </>
  );
}

export default App;

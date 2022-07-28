import "./App.css";
import Cache from "./components/SWExample/Cache";
//import CharacterCounter from "./components/ZustandExample/CharaterCounter";
//import Text from "./components/ZustandExample/Text";
//import { TodoList } from "./components/ZustandExample/Todo/TodoList";
//import CurrentUserInfo from "./components/ZustandExample/CurrentUserInfo";
//import Scratches from "./components/ZustandExample/Scratches";
import Profile from "./components/SWExample/Profile";
function App() {
  return (
    <div className="App">
      {/* <Text />
      <CharacterCounter />
      <TodoList /> 
      <CurrentUserInfo />
      <Scratches />
      */}
      <Profile />
      <Cache />
    </div>
  );
}

export default App;

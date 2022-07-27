import "./App.css";
//import CharacterCounter from "./components/ZustandExample/CharaterCounter";
//import Text from "./components/ZustandExample/Text";
//import { TodoList } from "./components/ZustandExample/Todo/TodoList";
import CurrentUserInfo from "./components/ZustandExample/CurrentUserInfo";
import Scratches from "./components/ZustandExample/Scratches";

function App() {
  return (
    <div className="App">
      {/* <Text />
      <CharacterCounter />
      <TodoList /> */}
      <CurrentUserInfo />
      <Scratches />
    </div>
  );
}

export default App;

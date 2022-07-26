import "./App.css";
import CharacterCounter from "./components/ZustandExample/CharaterCounter";
//import { observableTodoStore } from "./app/ObservableTodoStore";
//import MobxExample from "./components/MobxExample";
import Text from "./components/ZustandExample/Text";
import { TodoList } from "./components/ZustandExample/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Text />
      <CharacterCounter />
      <TodoList />
    </div>
  );
}

export default App;

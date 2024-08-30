import "./App.css";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <AddToDo></AddToDo>
      <hr className="my-4" />
      <Todos></Todos>
    </>
  );
}

export default App;

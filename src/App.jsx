import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
function App() {
  return (
    <>
      <div className="App">
        <h1>To-Do List with Redux</h1>
        <AddTask />
        <ListTask />
      </div>
    </>
  );
}

export default App;

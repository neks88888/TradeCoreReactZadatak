import "./App.css";
import Form from "./components/Form";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Form data={data} />
    </div>
  );
}

export default App;

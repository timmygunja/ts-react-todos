import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="App centered">
      <div className="box">
        <div className="box__title centered">
          <span>todos</span>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;

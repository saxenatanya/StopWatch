import logo from './logo.svg';
import './App.css';
import {Stopwatch} from "./components/Stopwatch/Stopwatch.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <Stopwatch/>
      </header>
    </div>
  );
}

export default App;

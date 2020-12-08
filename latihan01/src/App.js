import logo from './logo.svg';
import './App.css';
import {variableku, dodol as mylist} from './myvar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {variableku} <code>src/App.js</code> and save to reload.
          {mylist}
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

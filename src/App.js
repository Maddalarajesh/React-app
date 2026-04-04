import logo from './logo.svg';
import './App.css';

function App() {

  // 👇 ADD THIS (no test for it)
  function untestedFunction() {
    return "Not covered";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Aesthisia, You are almost there!
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

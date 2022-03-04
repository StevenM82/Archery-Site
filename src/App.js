import logo from './logo.svg';
import './scss/style.scss';
import HeaderNavigation from './components/Header/header.js';

// I have to figure out how to separate out the components into their
// own files and import them

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavigation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

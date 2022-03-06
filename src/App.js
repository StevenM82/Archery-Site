import logo from './logo.svg';
import './scss/style.scss';
import HeaderNavigation from './components/Header/header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavigation
          image="../../target-logo-color.png"
          heading="Straight to the point"
          subHeading="Just starting out"
        />
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

import logo from './logo.svg';
import './App.css';

// function Lake({ name }) {
//   return <h1>{name}</h1>;
// }

// I have to figure out how to separate out the components into their
// own files and import them

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Lake name="Here" /> */}
        <h1 class="header">
          Straight to the <i>(react)</i> point
        </h1>
        <h2>Just starting out</h2>
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
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="checkbox-align">
          <label>To do</label>
          <input type="text"></input>
        </div>
      </header>
    </div>
  );
}

export default App;

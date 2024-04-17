import logo from './logo.svg';
import './App.css';
import { Route, Link} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib"

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
      </header>
      <div>
        <Route exact path="/" Component={Fib}></Route>
        <Route exact path="/othepage" Component={OtherPage}></Route>
      </div>
    </div>
  );
}

export default App;



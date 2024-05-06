import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import OtherPage from "./OtherPage";
import LoginPage from "./Auth/Login";
import Fibonacci from "./Fib";
import HomePage from "./Admin/Dashboard/Home";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  const value = {
    locale: "en",
  };

  return (
    <Router>
      <PrimeReactProvider value={value}>
        <div className="App">
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/fib" component={Fibonacci} />
            <Route path="/otherpage" component={OtherPage} />
            <Route path="/logout" component={LoginPage} />
          </div>
        </div>
      </PrimeReactProvider>
    </Router>
  );
}

export default App;

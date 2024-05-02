import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import OtherPage from './OtherPage';
import Fibonacci from './Fib';
import HomePage from './Home';
import MenuBar from './MenuBar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  const value = {
    locale: 'en',
  };

  return (
      <Router>

        <PrimeReactProvider value={value}>
      <div className="App">
          <MenuBar></MenuBar>
          <div>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/fib" component={Fibonacci}/>
              <Route path="/otherpage" component={OtherPage}/>
            </div>



      </div>
          </PrimeReactProvider>
    </Router>

  );
}

export default App;

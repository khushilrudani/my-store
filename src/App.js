import Home from './pages/home';
import Team from './pages/team';
import About from './pages/about';
import ContainerExamples from './comoponet/footer';
import Topics from './pages/topics'
import Header from './comoponet/header';


//css
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/topic'>
            <Topics></Topics>
          </Route>
          <Route path='/team'>
            <Team></Team>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
        </Switch>
            <ContainerExamples />
      </Router>


    </div>
  );
}

export default App;
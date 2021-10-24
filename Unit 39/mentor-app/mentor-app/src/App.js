import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}><HomePage /></Route>
        <Route path="/About" exact={true}><About /></Route>
        <Route path="/Contact" exact={true}><Contact /></Route>
      </Switch>
    </Router>
  );
}

export default App;

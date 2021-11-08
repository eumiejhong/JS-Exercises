import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import FooterSpecial from "./FooterSpecial";

function App() {
  const [isHidden, setHidden] = useState(true);
  const handleToggle = () => {
    setHidden(!isHidden);
  };

  return (
    <Router>
      <NavBar isHidden={isHidden} toggle={handleToggle}/>
      <Switch>
        <Route path="/" exact={true}><HomePage /></Route>
        <Route path="/About" exact={true}><About /></Route>
        <Route path="/Contact" exact={true}><Contact /></Route>
      </Switch>
      {!isHidden && <FooterSpecial toggle={handleToggle} />}
    </Router>
  );
}

export default App;

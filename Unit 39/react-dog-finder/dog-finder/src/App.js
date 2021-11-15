import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Dog from "./Dog";

function App({dogs}) {
  console.log({dogs})
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar dogs={dogs}/>
        <Routes>
        <Route path="/dogs/:slug" element={<Dog dogs={dogs} />}></Route>
        <Route exact path="/dogs" element={<Home dogs={dogs}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}


export default App;

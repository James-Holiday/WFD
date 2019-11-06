import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import logo from "./c81228aa-9bb3-4065-b8d9-1b39cb8d8f6a_200x200.png";
import pizza from "./WFD-DATA/download.jpeg";
import wonton from "./WFD-DATA/photo-1496116218417-1a781b1c416c.jpeg";
import salad from "./WFD-DATA/photo-1505253716362-afaea1d3d1af.jpeg";
import pancakes from "./WFD-DATA/photo-1506084868230-bb9d95c24759.jpeg";
import burger from "./WFD-DATA/photo-1536510344784-b43e97721c1f.jpeg";
import Speg from "./WFD-DATA/spaghetti-bolognese_2.jpg";

import Home from "./pages/home";
import Schedule from "./pages/schedule";
import Recipes from "./pages/recipes";
import Login from "./pages/login";

import "./App.css";

function App() {
  const slider = (
    <AwesomeSlider>
      <div data-src={wonton} />
      <div data-src={salad} />
      <div data-src={pancakes} />
      <div data-src={burger} />
      <div data-src={Speg} />
      <div data-src={pizza} />
    </AwesomeSlider>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="" />
        <div className="topnav">
          <BrowserRouter>
            <div className="navs">
              <Link to="/">Home</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/login">Login</Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
        <h1 className="WFD">Whats for Dinner?</h1>
        <div className="slider">{slider}</div>
        <h5 className="h5">WFD Inc.</h5>
      </header>
    </div>
  );
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

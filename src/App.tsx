import React from "react";
import { getRandomBeer } from "./API";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from './components/Home';
import Details from "./components/Details"

const App = () => {

  return (
    <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={Details} />
    </Router>
  );
};

export default App;

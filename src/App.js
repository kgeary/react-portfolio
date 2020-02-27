import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

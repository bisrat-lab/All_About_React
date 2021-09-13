import "./App.css";


import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import React from "react";
import axios from "axios";

class App extends React.Component {
  render(){ 
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Books} />
          <Route path="/new-book" exact component={CreateBook} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;

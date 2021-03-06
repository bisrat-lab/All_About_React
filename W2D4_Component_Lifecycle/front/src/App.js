import "./App.css";
import Movie from "./components/Movie";
import CreateMovie from "./components/CreateMovie";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Movie} />
          <Route path="/new-movie" exact component={CreateMovie} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

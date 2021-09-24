
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import "./App.css";
import CreateProduct from "./Components/CreateProduct";

import Login from "./Components/Login";

import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";
import Register from "./Components/Register";
import UpdateForm from "./Components/UpdateForm";
import axios from "axios";
//import {AuthContext} from './Components/userContext'

export const LoginContext = React.createContext();

class App extends React.Component {

  
  reset = async (e) => {
    e.preventDefault();

    await this.setState({
      username: e.target.username.value,
      password: e.target.password.value,
    });

    const { username, password } = this.state;
    axios.post("/users/login", { username, password }).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        let copy = { ...this.state };
        copy.authState = true;
        this.setState(copy);
        <Redirect to='/all-product'/>
      }

      console.log(this.state.authState);
    });

    console.log(this.state);
  };

  state = {
    username: "",
    password: "",
    authState: false,
    reset: this.reset,
  };

  render() {
    return (
      <LoginContext.Provider value={{ ...this.state }}>
        <BrowserRouter>
          <div>
            <ul>
              {this.state.authState && (
                <>
                  <li>
                    <Link to="/all-product">All Product</Link>
                  </li>

                  <li>
                    <Link to="/create-product">Create Product</Link>
                  </li>
                  <li>
                    <Link to="/create-product">LogOut</Link>
                  </li>
                </>
              )}

              {!this.state.authState && (
                <>
                  <li>
                    <Link to="/login">LogIn</Link>
                  </li>

                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* <Navbar /> */}
          <div className="App container">
            <Route path="/all-product" component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/create-product" component={CreateProduct} />
            <Route path="/update-product/:id" component={UpdateForm} />

            <Route path="/product/detail/:id" component={ProductDetail} />
            {/* <Route path="/product/detail/:id" component ={CreateReview}/> */}
          </div>
        </BrowserRouter>
      </LoginContext.Provider>
    );
  }
}

export default App;

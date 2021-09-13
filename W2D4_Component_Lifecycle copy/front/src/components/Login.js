import React from "react";
import axios from "axios";


class Login extends React.Component {
  
  state = {
    username: "",
    password: "",
  };
  
  loginHandler = () => {
    
    let loginData = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:2000/users/login", loginData)
      .then((response) => {
        console.log(response.data)
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.accessToken);
          console.log(response.data);
           this.props.history.push('/')
          
        }
        // this.props.estUser(response.data)
      });
      
  };
  render() {
    return (
      <div className="card">
        <div>
          Username
          <input
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          Password
          <input
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <button onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}
export default Login;

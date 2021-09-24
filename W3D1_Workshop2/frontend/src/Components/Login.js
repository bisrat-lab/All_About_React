// import React, { Component } from "react";
// import axios from "axios";
// import {AuthContext} from './userContext'

// import "./style.css";

// export class Login extends Component {
//   static contextType = AuthContext
//   state = { username: "", password: "" };

//   loginBtnHandler = () => {
//     axios.post("/users/login", this.state).then((res) => {
//       if (res.data.error) {
//         alert(res.data.error);
//       } else {
//         console.log(res.data);
//         localStorage.setItem("token", res.data.accessToken);

//         //    this.props.history.push('/all-product')
//       }
//     });

//   };

//   render() {

//     return (

//         <div className="card2 ">
//           <div>
//             Username:{" "}
//             <input
//               onChange={(e) => this.setState({ username: e.target.value })}
//             />
//           </div>
//           <div>
//             Password:{" "}
//             <input
//               onChange={(e) => this.setState({ password: e.target.value })}
//             />
//           </div>
//           <div>
//             <button
//               className="btn btn-primary m-2"
//               onClick={this.loginBtnHandler}
//             >
//               Login
//             </button>
//           </div>
//         </div>

//     );
//   }
// }

// export default Login;

import React, { Component } from "react";
import axios from "axios";

import "./style.css";
import { LoginContext } from "../App";

export class Login extends Component {
  render() {
    return (
      <LoginContext.Consumer>
        {(v) => {
          return (
            <form onSubmit={(e)=>v.reset(e)}>
              <input name="username" type="text" id="username"/>
              <input name="password" type='text' id="password" />
              <button type='submit'  className="btn btn-primary m-2">Login</button>
            </form>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Login;

 

import React from "react";
import axios from "axios";

class SignUp extends React.Component {
     state =
      {username: "", password: ""}
    
   
    onSubmitReg=()=>{
        const regUser = {
            username : this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:2000/users/register',regUser)
        .then(response =>{
            console.log(response)
        })
    } 
     
render(){
     return (
    <div className="card">
      <div>
        Username: <input name='username' onChange={(e)=>this.setState({username:e.target.value})}/>
      </div>
      <div>
        Password: <input name='password' onChange={(e)=>this.setState({password:e.target.value})}/>
      </div>
      <button onClick={this.onSubmitReg}>Submit</button>
    </div>
  );
}

 
}
export default SignUp
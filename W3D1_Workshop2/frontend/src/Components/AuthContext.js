import React, { Component } from 'react'
import axios from 'axios';

const AuthContext = React.createContext()

export class AuthProvider  extends Component {
    state = {
       username:'',password:'',
        isAuthenticated :false
    }

    login = () => {
        axios.post("/users/login", this.state).then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            console.log(res.data);
            localStorage.setItem("token", res.data.accessToken);
    
           this.setState({isAuthenticated:true})
          }
        });
        
      };
      logOut =()=>{
          this.setState({user: "",isAuthenticated:false})
      }
    render() {
        const {username,password,isAuthenticated} = this.state;
        const {login,logOut} = this;
        return (
            <div>
                <AuthContext.Provider value={{
                    username,
                    password,
                    isAuthenticated,
                    login,
                    logOut
                }}>
                    {this.props.children}
                </AuthContext.Provider>

                
            </div>
        )
    }
}

export default AuthContext

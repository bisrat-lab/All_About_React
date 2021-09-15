import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
export class Login extends Component {
    state ={username :"", password: ""}

    loginBtnHandler=()=>{
       axios.post('/users/login',this.state)
       .then(res=>{
           if(res.data.error){
               alert(res.data.error)
           }else{
               console.log(res.data)
           localStorage.setItem('token', res.data.accessToken)
        //    this.props.history.push('/all-product')
           }
           
       })
    }
    render() {
        return (
            <div className='card2 '>
                 <div>
                   Username: <input onChange= {(e)=>this.setState({username: e.target.value})}/>
                </div>
                <div>
                   Password: <input onChange ={(e)=>this.setState({password: e.target.value})}/>
                </div>
                <div>
                   <button className="btn btn-primary m-2" onClick={this.loginBtnHandler}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login

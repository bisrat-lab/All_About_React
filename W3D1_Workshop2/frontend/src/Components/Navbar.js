import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";


 class Navbar extends React.Component {
   state ={
     isUserLoggedIn : true
   } 
    componentDidMount(){
      if(localStorage.getItem('token')){
        this.setState({isUserLoggedIn:true})
      }
    }
   render(){ 



  return (
    <div>
    
      <ul>
          {this.state.isUserLoggedIn ? 
          <li>
            <Link to="/all-product">All Product</Link>
          </li> : null
          }
          {this.state.isUserLoggedIn ? 
          <li>
            <Link to="/create-product">Create Product</Link>
          </li> : null
          }
        
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
   }
}
export default Navbar
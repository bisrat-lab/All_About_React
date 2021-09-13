import React from "react";
import axios from "axios";

class CreateBook extends React.Component{
  state= {name:"",year:0, rating: 0}

  onSaveBtn=()=>{
    let newBookObj = {
      name: this.state.name,
      year:this.state.year,
      rating: this.state.rating
    }
    axios.post("http://localhost:2001/books",newBookObj,{
      headers : { 
        Authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      console.log(res)
    })
  }
  render(){
return (
    <div className="card">
      <div>
      <div>
          Name: <input onChange={(e)=>this.setState({name:e.target.value})}/>
        </div>
        <div>
          Year :  <input onChange ={(e)=>this.setState({year: e.target.value})}/>
        </div>
        <div>
          Rating:<input onChange={(e)=>this.setState({rating:e.target.value})}/>
        </div>
        <div>
          <button onClick={this.onSaveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
  }
  
}
export default CreateBook
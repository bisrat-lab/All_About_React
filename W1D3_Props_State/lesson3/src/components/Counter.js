import { Component } from "react";

class Counter extends Component{
    state = {
        count : 0
    }
    incrementHandle = () =>{
       this.setState((state)=>{
         return {
             count: state.count + 1
         }  
       })
    }
    render(){
        return(
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.incrementHandle}>Increment</button>
            </div>
        )
    }
}
export default Counter
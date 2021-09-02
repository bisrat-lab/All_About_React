
import React, { Component } from "react";
import Counter from "./Counter";
export class Count extends Component {
  state ={
    counters:[
      {id: 1, value : 4},
      {id: 2, value : 0},
      {id: 3, value : 0},
      {id: 4, value : 0},
    ]
  }
  handelDelete=(counterId)=>{
    const counter = this.state.counters.filter(c=>c.id !== counterId)
    this.setState({counters :counter})
    console.log('del',counterId)
  }
  render() {
    return (
      <div>
       {this.state.counters.map(counter =>(
           <Counter 
           key={counter.id} 
           value={counter.value} 
           onDel = {this.handelDelete} 
           id={counter.id}/>

       ))}

      </div>
    );
  }
}

export default Count;


import './App.css';
import Person from './components/Person';
import Counter from './components/Counter';
import StudentCom from './components/StudentCom'
import TestPerson from './components/TestPerson';


// function App() {
//   return (
//     <div className="App">
//       <TestPerson name="bisratM"> I love u</TestPerson>




//       {/* <Person/>
//       <Counter/>
//       <StudentCom/> */}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export class App extends Component {
  state= {
    count : 0
  }
  incBtn=()=>{
    this.setState({count: this.state.count + 1})
  }
  decBtn=()=>{
    this.setState((state)=>{
      return {
        count : state.count -1 
      }
    })
  }
  render() {
    return (
      <div>
        <TestPerson
        name = {this.state.count}
        incHandle ={this.incBtn}
        decHandle ={this.decBtn}
        />
      </div>
    )
  }
}

export default App


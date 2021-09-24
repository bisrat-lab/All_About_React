import logo from './logo.svg';
import './App.css';
import Home from './home';
import React from 'react';
import Home3 from './home3';

export const home3Context = React.createContext()

class App extends React.Component {

  reset=()=>{
    let copy = {...this.state}
    copy.counter = 0;
    this.setState(copy)
  }

  state= {
    counter : 1,
    reset: this.reset
  }

 

  incBtn=()=>{
    let copy= {...this.state}
    copy.counter = copy.counter+1;
    this.setState(copy)
  }


  render(){
    return (
    <div className="App">
       
        {/* <Home name= {this.state.name}/> */}

        <home3Context.Provider value={this.state} >
          <Home3></Home3>
         
        </home3Context.Provider> 
        <button onClick={this.incBtn}>inc</button>
    </div>
  );
}
  }
  

export default App;




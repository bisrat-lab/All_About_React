
import './App.css';
// import Student from './components/Student';

// function App() {
//   return (
//     <div className="App">
//      <Student/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import StuDemo from './StuDemo';
import AddnewStuDemo from './AddnewStuDemo';
export class App extends Component {
  state={
    students :[{id: 1,name:"alex",age:22},{id:2, name:"bob",age:23},{id:3, name:"bob",age:23}
  ],
  newStu : {
    id : 0,
    name: "x",
    age: 99
  },
  isOpen : false
  }


  delHandler =(id)=>{
    let  result = this.state.students.filter(s=> s.id !== id)
    this.setState({students:result})
  }
  nameChanger=(id,e)=>{
    let result = this.state.students.map(s=>{
      if(s.id===id){
        let copy = {...s}
        copy.name = e.target.value
        return copy
      }
      return s
    })
    this.setState({students : result})
  }
  newNameHandler=(e)=>{
      this.setState({
        newStu : {
          name: e.target.value,
          age : this.state.newStu.age
        }
      })
  }
  newAgehandler=(e)=>{
    this.setState({
      newStu: {
        name : this.state.newStu.name,
        age : e.target.value
      }
    })
  }
  addBtnHandler=()=>{
    this.setState({students : this.state.students.concat(this.state.newStu)})
  }
  incHandler =(id)=>{
    let result = this.state.students.map(s=>{
      if(s.id === id){
        let copy = {...s}
        copy.age = copy.age + 1
        return copy
      }
      return s
    })
    this.setState({students: result })
  }

  // ageDecHandler= (id)=>{
  //   let result = this.state.students.map(s=>{
  //     if(s.id=== id){
  //       let copy = {...s}
  //       copy.age = copy.age - 1;
  //       return copy
  //     }
  //     return s
  //   })
  //   this.setState({students: result})
  // }
  ageDecHandler = (id)=>{
    let result = this.state.students.map(s=>{
      if(s.id === id){
        return{
          name: s.name,
          age : s.age - 1
        }
      }
      return s
    })
    this.setState({students: result})
  }

  addneBtnToogle =()=>{
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    let addForm = null
    if(this.state.isOpen){
      addForm = (
         <AddnewStuDemo
        newNameH = {(e)=>this.newNameHandler(e)}
        newAgeH = {(e)=>this.newAgehandler(e)}
        addEvent ={this.addBtnHandler}
     />)
       
      
    }
    return (
      <div>
        {
          this.state.students.map(s=>{
            return (
               <StuDemo
               key={s.id}
               name= {s.name}
               age = {s.age}
               delEvent = {()=>this.delHandler(s.id)}
               nameChange = {(e)=>this.nameChanger(s.id,e)}
               incEvent = {()=>this.incHandler(s.id)}
               decEvent = {()=>this.ageDecHandler(s.id)}
        />
            )
          })
        }
       <div>
         <button onClick={this.addneBtnToogle}>Add new </button>
         {addForm}
       </div>
      </div>
    )
  }
}

export default App


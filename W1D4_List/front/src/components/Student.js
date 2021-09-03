import React, { Component } from "react";
import StudentList from "./Studentlist";
import Addstudent from "./Addstudent";

export class Student extends Component {
  state = {
      newstudent:{
          id: 1000,
          fname: "",
           lname: "",
           age: 99
      },
    
    students: [
      { id: 1, fname: "Alice", lname: "Bob", age: 20 },
      { id: 2, fname: "Bis", lname: "Alex", age: 19 },
      { id: 3, fname: "Kass", lname: "Mick", age: 19 },
      { id: 4, fname: "Jhon", lname: "Don", age: 19 },
    ],
    isVisible: true,
  };
  idHandler=(e)=>{
      this.setState({newstudent: {
          id: e.target.value,
          fname: this.state.newstudent.fname,
          lname : this.state.newstudent.lname,
          age: this.state.newstudent.age
        }})
  }
  fnameHandler=(e)=>{
    this.setState({newstudent: {
        id: this.state.newstudent.id,
        fname: e.target.value,
        lname : this.state.newstudent.lname,
        age: this.state.newstudent.age
      }})
}

lnameHandler=(e)=>{
    this.setState({newstudent: {
        id: this.state.newstudent.id,
        fname:this.state.newstudent.fname ,
        lname : e.target.value,
        age: this.state.newstudent.age
      }})
}
onAdd=()=>{
    this.setState({students: this.state.students.concat(this.state.newstudent)})
}


  toggleHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  deleteHandler = (stuId) => {
    let result = this.state.students.filter((stu) => stu.id !== stuId);
    this.setState({ students: result });
  };

  saveInput = (event) => {
    this.setState({ fname: event.target.value });
    this.setState({ lname: event.target.value });
    console.log({ fname: event.target.value });
  };

  addBtnEvent = () => {
    this.setState({ students: this.state.students.concat(this.state.lname) });
  };

  render() {
    let changeBtn =
      this.state.isVisible === true ? "Hide Student" : "Show Student";

    let studentList = null;
    if (this.state.isVisible) {
      studentList = this.state.students.map((stu) => {
        return (
          <StudentList
            key={stu.id}
            fname={stu.fname}
            lname={stu.lname}
            age={stu.age}
            delete={() => this.deleteHandler(stu.id)}
          />
        );
      });
    }
    return (
      <div >
        <div>
          <input
            type="button"
            onClick={() => this.toggleHandler()}
            value={changeBtn}
          />
        </div>

        {studentList}
       <div style={{display:'block'}}>
           <Addstudent
           id = {this.state.newstudent.id}
           fname ={this.state.newstudent.fname}
           lname = {this.state.newstudent.lname}
           age = {this.state.newstudent.age}
           idEvent = {this.idHandler}
           fNameEvent = {this.fnameHandler}
           lNameEvent = {this.lnameHandler}
           addEvent ={this.onAdd}
           />
       </div>
      </div>
    );
  }
}

export default Student;

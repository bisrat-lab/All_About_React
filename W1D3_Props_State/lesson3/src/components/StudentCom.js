import React, { Component } from 'react'
import Student from './Student'
export class StudentCom extends Component {
    state = {
        students : [
            {name:'Alice', age:20},
            {name:'Bob', age:19}
        ]
    }
    makeOlder = () =>{
        this.setState({
            students: [
                { name: 'Alice', age: this.state.students[0].age +1 },
                { name: 'Bob', age: this.state.students[1].age +1}
                ]
        })
    }
    makeYounger=()=>{
        this.setState({
            students: [
                { name: 'Alice', age: this.state.students[0].age -1 },
                { name: 'Bob', age: this.state.students[1].age -1}
                ]
        })
    }
    render() {
        return (
            <div>
                {this.state.students.map(st =>{
                 let studentList = 
                    <Student 
                        key = {st.name}
                        name = {st.name}
                        age = {st.age}
                        dec = {this.makeYounger}
                    />
                 
                  return studentList;
                })}
                <button
                onClick ={this.makeOlder}
                >Increment age</button>
            </div>
        )
    }
}

export default StudentCom

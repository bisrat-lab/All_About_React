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
        let result = this.state.students.map(s=>{
            return {
                name : s.name,
                age : s.age +1
            }
        })
        this.setState({students:result})
    }
    makeYounger=(result)=>{
     result = this.state.students.map(s=>{
            return {
                name: s.name,
                age : s.age - 1
            }
        })
        this.setState((state)=>{
            return {
                students: result
            }
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

import React, { Component } from 'react'
import Student from './Student'
export class StudentCom extends Component {
    state = {
        students : [
            {id : 1,name:'Alice', age:20},
            {id: 2, name:'Bob', age:19}
        ]
    }
  
    makeOlder = (stuId) =>{
        let result = this.state.students.map(s=>{
            if(s.id === stuId){
                let copy = {...s}
                copy.age = copy.age +1;
                return copy;
            }
            return s;
        })
        this.setState({students:result})
    }
    makeYounger=(stuId)=>{
     let result = this.state.students.map((s) => {
         if(s.id === stuId){
             let copy = {...s};
             copy.age = copy.age -1;
             return copy;
         }
         return s;
        } )
     this.setState({students:result})
    }
  
    render() {
        return (
            <div>
                {this.state.students.map(st =>{
                 let studentList = 
                    <Student 
                        key = {st.id}
                        name = {st.name}
                        age = {st.age}
                        dec = {()=>this.makeYounger(st.id)}
                        inc ={()=> this.makeOlder(st.id)}
                    />
                 
                  return studentList;
                })}
                {/* <button
                onClick ={this.makeOlder}
                >Increment age</button> */}
            </div>
        )
    }
}

export default StudentCom

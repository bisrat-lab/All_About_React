import React, { Component } from 'react'
import Student from './Student'
export class StudentCom extends Component {
    state = {
        students : [
            {id : 1,name:'Alice', age:20},
            {id: 2, name:'Bob', age:19}
        ],
        isVisible : true
        
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


    toggleBtn=()=>{   
           this.setState({isVisible :!this.state.isVisible })
        }
    

    render() {
        let studentList = null;
        if(this.state.isVisible){
            studentList =(
                (this.state.students.map(st =>{
                return (
                   <Student 
                       key = {st.id}
                       name = {st.name}
                       age = {st.age}
                       dec = {()=>this.makeYounger(st.id)}
                       inc ={()=> this.makeOlder(st.id)}
                   /> 
                )
               }) ) 
            )
        }
        
        return (
            <div>
                <div>
                     <input type="button" value={this.disBtn()} onClick={()=>this.toggleBtn()}/>
                </div>
                {studentList}  
            </div>
        )
    }
  
      disBtn() {
       return this.state.isVisible === true ? "Hide Student" : "Show Student"
    }
}

export default StudentCom

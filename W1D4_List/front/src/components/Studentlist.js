
import './card.css'
import React, { Component } from 'react'

export class StudentList extends Component {
    render() {
        return (
            <div className="card">
               <p>{this.props.fname}</p>
               <p>{this.props.lname}</p>
               <p>{this.props.age}</p>
               <button onClick ={this.props.delete}
               >Delete</button>
            </div>
        )
    }
}

export default StudentList

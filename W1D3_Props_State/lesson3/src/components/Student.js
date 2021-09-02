import React, { Component } from 'react'

export class Student extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p onClick= {this.props.dec}>{this.props.age}</p>
                <button
                onClick ={this.props.inc}
                >Increment age</button>
            </div>
        )
    }
}

export default Student

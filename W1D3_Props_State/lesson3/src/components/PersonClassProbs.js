import React, { Component } from 'react'

export class PersonClassProbs extends Component {
   
    render() {
        return (
            <div>
                <p>Last Name: {this.props.lastName}</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default PersonClassProbs

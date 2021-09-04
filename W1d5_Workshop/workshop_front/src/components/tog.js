import React, { Component } from 'react'

export class tog extends Component {
    render() {
        return (
            <div>
                <p>{this.props.dis}</p> 
                <span>{this.props.display}</span> 
            </div>
        )
    }
}

export default tog

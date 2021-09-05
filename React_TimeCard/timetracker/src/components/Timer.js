import React, { Component } from 'react'
import './style.css'
export class Timer extends Component {
    render() {
        return (
            <div className ="card">
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.project}
                </div>
                <div>
                    <h2>Counter</h2>
                </div>
                <div>
                    <button>del</button>
                    <button>edit</button>
                    <button>start</button>
                </div>
            </div>
        )
    }
}

export default Timer

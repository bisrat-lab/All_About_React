import React, { Component } from 'react'
import TimerForm from './TimerForm'

export class ToggleableTimeForm extends Component {
    state = {
        isOpen: false
    }
    addHandler = ()=>{
        this.setState({isOpen: true})
    }
    render() {
        if(this.state.isOpen){
            return (
                <TimerForm/>
            )
        }else{
            return (
            <div>
                <button onClick={this.addHandler}>Add</button>
            </div>
        )
        }
        
    }
}

export default ToggleableTimeForm

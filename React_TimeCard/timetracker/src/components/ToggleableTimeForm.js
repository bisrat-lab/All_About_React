import React, { Component } from 'react'
import TimerForm from './TimerForm'

export class ToggleableTimeForm extends Component {
    state = {
        isOpen: false
    }
    addHandler = ()=>{
        this.setState({isOpen: true})
    }
    handleFormSubmit=(obj)=>{
        this.props.onFormSubmit(obj);
        this.setState({isOpen :false})
        console.log()
    }
    handleFormClose=()=>{
        this.setState({isOpen : false})
    }
    render() {
        if(this.state.isOpen){
            return (
                <TimerForm
                onFormSubmit = {this.handleFormSubmit}
                onFormClose ={this.handleFormClose}
                />
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

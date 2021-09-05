import React, { Component } from 'react'
import TimerForm from './TimerForm';
import Timer from './Timer';

export class EditableTimer extends Component {
    state= {
        editFormOpen : false
    }
    render() {
        if(this.state.editFormOpen){
            return (
          <TimerForm
          id = {this.props.id}
           title = {this.props.title}
           project = {this.props.project}
          /> 
        )
        }else {
            return (
                <Timer
                id = {this.props.id}
                  title = {this.props.title}
                  project = {this.props.project}
                />
            )
        }
        
    }
}

export default EditableTimer

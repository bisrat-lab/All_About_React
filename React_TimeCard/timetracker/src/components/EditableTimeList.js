import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

export class EditableTimeList extends Component {
    render() {
        return (
            <div>
               <EditableTimer
               title= {this.props.title}
               project = {this.props.project}
               /> 
            
            </div>
        )
    }
}

export default EditableTimeList

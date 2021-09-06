import React, { Component } from 'react'
import EditableTimeList from './EditableTimeList';
import './style.css'
import ToggleableTimeForm from './ToggleableTimeForm';
import helper from './helper'

export class TimerDashboard extends Component {
    state= {
        todos :[
            {id: 1, title :"Learn React", project :'To do list'},
            {id: 2,title :"Learn Java", project :'Movie'}
        ],
     
    }
    handleCreateFormatSubmit=(obj)=>{
        this.setState({todos: this.state.todos.concat(obj)})
        console.log(this.state.newtodo)
    }
     
   
        
    
    render() {
        return (
            <div>
                <div>
                {
                    this.state.todos.map(t=>{
                        return (
                            <EditableTimeList
                            key = {t.id}
                            title = {t.title}
                            project = {t.project}
                            />
                        )
                    })
                }
            
          
        </div>   
        <ToggleableTimeForm
            onFormSubmit ={this.handleCreateFormatSubmit}
        />
            </div>
           
        )
    }
}

export default TimerDashboard


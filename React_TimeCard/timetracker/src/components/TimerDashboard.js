import React, { Component } from 'react'
import EditableTimeList from './EditableTimeList';
import './style.css'
import ToggleableTimeForm from './ToggleableTimeForm';

export class TimerDashboard extends Component {
    state= {
        todos :[
            {id: 1, title :"Learn React", project :'To do list'},
            {id: 2,title :"Learn Java", project :'Movie'}
        ]
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

        />
            </div>
           
        )
    }
}

export default TimerDashboard


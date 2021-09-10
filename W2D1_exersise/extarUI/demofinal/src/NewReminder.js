import React from 'react'

function NewReminder(props) {
    return (
        <div>
            Create new reminder<br/>
            ======================
            <div>
              ID: <input
              value = {props.id}
              onChange = {props.idInputHandler}
              />
            </div>
            <div>
              Title:<input
              value ={props.title}
              onChange = {props.titleInputHandler}
              />
            </div>
            <div>
             Decr:<input
             value = {props.dec}
             />
            </div>
            <div>
             Date:<input
             value = {props.date}
             />
            </div>
            <div>
             <button onClick={props.saveBtnEvent}>Save</button>
            </div>
            
        </div>
    )
}
export default  NewReminder
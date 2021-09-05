// import React from 'react'
import './style.css'
function TodoList(props){
       return(
           <div className="card">
               <p>{props.task}</p>
               {/* <input onChange={props.onTaskChange}/> */}
               <p>{props.dis}</p>
               <div>
                   <button onClick={props.deleteEvent}>delete</button>
                   <button onClick={props.editEvent}>edit</button>
               </div>
           </div>
       )
}
export default  TodoList;
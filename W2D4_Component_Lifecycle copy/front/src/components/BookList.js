import React from 'react'
import './movielist.css'

export default function BookList(props) {
    return (
        <div className= "card">
             <div>
               {props.name}
            </div>
            <div>
               {props.rating}
            </div>
            <button onClick={props.onDeleteBtn}>Delete</button>
        </div>
    )
}

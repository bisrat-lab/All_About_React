import React from 'react'

export default function UpadteMovie(props) {
    return (
        <div>
            <div>
                Name: <input
                value = {props.name}
                onChange ={props.nameUpdateHandler}/>
            </div>
            <div>
                 rating: <input
                 value ={props.rating}
                 onChange ={props.ratingUpdateHandler}/>
            </div>
           
            <button onClick={props.applyBtnEvent}>Apply</button>
        </div>
    )
}

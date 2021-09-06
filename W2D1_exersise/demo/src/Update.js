import React from 'react'

export default function Update(props) {
    return (
        <div>
           update At:  <input value={props.at} onChange={props.atChanger}/>
           <button onClick={props.applayEvent} >apply</button>
        </div>
    )
}

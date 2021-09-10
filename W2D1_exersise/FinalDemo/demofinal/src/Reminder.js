import React from 'react'

 function Reminder(props) {
    return (
        <div>
            <div>
                {props.title}
                <input 
                    defaultValue ={props.title}
                    onChange={props.titleUpdaterInput}
                />
            </div>
            <div>
                {props.dec}
                <input
                    defaultValue ={props.dec}
                    onChange={props.decUpdaterInput}
                />
            </div>
            <div>
                {props.date}
            </div>
            <div>
                <button onClick={props.delEventBtn}>delete</button>
                <button onClick={props.updateEventBtn}>update</button>
            </div>
            ---------------------
        </div>
    )
}
export default Reminder
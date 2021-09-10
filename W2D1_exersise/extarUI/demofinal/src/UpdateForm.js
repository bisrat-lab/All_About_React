import React from 'react'

export default function UpdateForm(props) {
    return (
        <div>
            +++++++++++++++++
          
            <div>
                title <input
                value = {props.title}
                    onChange={props.titleEditer}
                />
            </div>
            <div>
                dec <input
                
                onChange={props.decEditer}/>
            </div>
            <div>
                <button onClick={props.applyBtnEvent}>apply</button>
            </div>
        </div>
    )
}

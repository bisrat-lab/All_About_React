import React from 'react'

export default function MovieList(props) {
    return (
        <div>
             <div>
               {props.name}
            </div>
            <div>
               {props.rating}
            </div>
        </div>
    )
}

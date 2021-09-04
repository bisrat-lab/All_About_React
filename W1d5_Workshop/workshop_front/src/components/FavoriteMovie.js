import React from 'react'

export default function FavoriteMovie(props) {
    return (
        <div className="card">
           <div>{props.name}</div>
           <div>{props.rating}</div>
           <div>{props.genras}</div>
           <button onClick={props.delHandel}>Delete</button>
        </div>
    )
}

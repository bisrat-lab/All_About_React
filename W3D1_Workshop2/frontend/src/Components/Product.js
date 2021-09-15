import React from 'react'

export default function Product(props) {
    return (
        <div className="card border-primary" >
            <div className='card-header' >
               {props.name}
            </div>
            <div className='card-body text-primary' >
               {props.price}
            </div>
            <div>
               <button className='btn btn-primary btn-sm' onClick={props.onDetaliBtn}>Detail</button>
               <button className='btn btn-danger btn-sm m-2' onClick={props.onDeleteBtn}>Delete</button>
               <button className='btn btn-warning btn-sm' onClick={props.onEditBtn}>Edit</button>
            </div>
        </div>
    )
}

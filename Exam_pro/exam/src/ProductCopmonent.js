import React from 'react'

export default function ProductCopmonent(props) {
    return (
        <div>
            <p>{props.productName}</p>
            <p>{props.price}</p>
            <p>{props.count}</p>
          total  <p>{props.total}</p>
            <button onClick={props.inc}> + </button>
            <button onClick={props.dec}> - </button>
            <button onClick={props.del}> X </button> <br></br>
            --------------------
        </div>
    )
}

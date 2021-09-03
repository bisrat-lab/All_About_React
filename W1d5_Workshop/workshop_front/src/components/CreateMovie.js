import React from 'react'

function CreateMovie(props) {
    return (
        <div className="card">
            Name: <input
            value={props.name}
            type="text"
            name="name"
            onChange={props.nameChanged}/>
            Genras: <input
            value={props.genras}
            />
            Rating: <input
            name="rating"
            value={props.rating}
            onChange={props.ratingChanged}/>
            <div>
                <button onClick={props.addHandler}> Add</button>
            </div>
        </div>
    )
}

export default CreateMovie

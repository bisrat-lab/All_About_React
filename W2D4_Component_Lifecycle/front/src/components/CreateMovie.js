import React from "react";

export default function CreateMovie(props) {
  return (
    <div className="card">
      <div>
        Name :{" "}
        <input 
          name="name" 
          value={props.name} 
          onChange={props.chageHandler} 
          />
      </div>
      <div>
        Reating:{" "}
        <input
          name="rating"
          value={props.rating}
          onChange={props.chageHandler}
        />
      </div>
      <div>
        <button onClick={props.saveHandler}>Save</button>
      </div>
    </div>
  );
}

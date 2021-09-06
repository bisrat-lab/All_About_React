function NewRem(props) {
  return (
    <div>
      +++++++++++++++++<br></br>
      Create new reminder
      <div>
        ID: <input  onChange={props.newIDHandler} />
      </div>
      <div>
        Title: <input value={props.title} onChange={props.newTitleHandler} />
      </div>
      <div>
        Des: <input onChange={props.newDesHandler} />
      </div>
      <div>
        At: <input onChange={props.newAtHandler}/>
      </div>
      <div>
            <button onClick={props.saveBtnEvent}>Save</button>
      </div>
    </div>
  );
}
export default NewRem;

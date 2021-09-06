function Reminder(props) {
  return (
    <div>
        <div>
          <p>{props.title}</p>
            <input
              value={props.title}
              onChange ={props.tilteChangeHandler}
            />
          
            <br/>
          ---------------
        </div>
        <div>
          <p>{props.des}</p>
            <input
              value = {props.ides}
              onChange ={props.desChangeHandler}
            />
             <br/>
          ---------------
        </div>
        <div>
              <p>{props.at}</p>
             
          ---------------
          </div>
        <div>
            <button onClick={props.delHandler}>Delete</button>
            <button onClick={props.updateBtnEvent}>update</button>
            <button onClick={props.editBtnEvent}>edit</button>
        </div>
      =======================
    </div>
  );
}
export default Reminder;

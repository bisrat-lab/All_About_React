function AddnewTodo(props){
    return(
        <div>
            <div >
            <div className='space'>
                 ID:  <input onChange={props.idHandler} value={props.id}/>
               </div>
               <div className='space'>
                  Task: <input onChange={props.taskHandler} value={props.task}/>
               </div>
                
               <div className='space'>
                  Des: <input onChange={props.disHandler} value={props.dis}/>
               </div>
                <button onClick={props.addEvent}>Add Todo</button>
            </div>
        </div>
    )
}
export default AddnewTodo;
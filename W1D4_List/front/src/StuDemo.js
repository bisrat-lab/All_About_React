function StuDemo (props){
    return (
        <div>
            <p>{props.name}</p>
                <input 
                value={props.name}
                onChange ={props.nameChange}/>
           <div>{props.age}
            <button onClick={props.incEvent}>+</button>
            <button onClick ={props.decEvent}>-</button>
           </div>  
            <div>
                <button onClick= {props.delEvent}>delete</button>
            
            </div>
            -------------------------------------------
        </div>
    )
}
export default StuDemo;
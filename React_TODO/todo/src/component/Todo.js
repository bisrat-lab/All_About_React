import React from "react";
import TodoList from './TodoList';
import AddnewTodo from './AddnewTodo'


class Todo extends React.Component {
  state = {
    todos: [
      { id: 1, task: "shoping", des: "buy everything" },
      { id: 2, task: "loundry", des: "wash" },
      { id: 3, task: "sport", des: "runing" },
    ],
    newTodo :{
        id: 0,
        task :"",
        des :""
    },
  };
  deleteHandler=(id)=>{
      let result = this.state.todos.filter(t => t.id !== id)
      this.setState({todos: result})
  }

  editHandler=(id)=>{
     let result = this.state.todos.find(t=>t.id === id)
         this.setState({newTodo: {
             id: result.id,
             task :result.task,
             des : result.des
         }})
         
     console.log(this.state.newTodo)
  }
  idHandled=(e)=>{
    this.setState({newTodo : {
        id : e.target.value,
        task : this.state.newTodo.task,
        des: this.state.newTodo.des
    }})
  }
  taskHandled=(e)=>{
    let result = this.state.todos.map(t=>{
        if(t.id === this.state.newTodo.id){
            let copy = {...t}
            copy.task = e.target.value
            return copy
        }
        return t;
    })

    this.setState({todos: result})  
    this.setState({newTodo : {
        id : this.state.newTodo.id,
        task : e.target.value,
        des: this.state.newTodo.des
    }})
  }
  disHandled =(e)=>{
      this.setState({newTodo :{
          id: this.state.newTodo.id,
          task : this.state.newTodo.task,
          des : e.target.value
      }})
  }
  addBtnHandler =()=>{
      this.setState({todos: this.state.todos.concat(this.state.newTodo)})
  }
  onTaskChanged =(id, e)=>{
      let result = this.state.todos.map(t=>{
          if(t.id === id){
              let copy = {...t}
              copy.task = e.target.value
              return copy
          }
          return t;
      })
      this.setState({todos: result})
  }

  render(){
      return(
          <div>
              
              {
                  this.state.todos.map(todo =>{
                      return (
                        <TodoList
                        key ={todo.id}
                        task = {todo.task}
                        dis = {todo.des}
                        deleteEvent = {()=>this.deleteHandler(todo.id)}
                        editEvent ={()=>this.editHandler(todo.id)}
                        onTaskChange= {(e)=>this.onTaskChanged(todo.id,e)}
                        />
                      )
                  })
              }
              <div className='card'>
                  Add new Todo
                    <AddnewTodo
                    idHandler={(e)=>this.idHandled(e)}
                    taskHandler={(e)=>this.taskHandled(e)}
                    disHandler={(e)=>this.disHandled(e)}
                    addEvent = {this.addBtnHandler}
                    id = {this.state.newTodo.id}
                    task = {this.state.newTodo.task}
                    dis = {this.state.newTodo.des}
                    />
              </div>
          </div>
          
      )
  }
}
export default Todo;

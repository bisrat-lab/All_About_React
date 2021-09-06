import React from 'react'
import './App.css';
import Reminder from './Reminder';
import NewRem from './NewRem';
import Update from './Update';

class App extends React.Component {
  state = {
    reminders : [
      {id: 1, title:'Study' , des: 'go over the slide', at: '444/03/2021'},
      {id: 2, title:'School' , des: 'kids school', at: '29/03/2021'},
      {id: 3, title:'shoping' , des: 'for me', at: '200/03/2021'}
    ],
    newReminder : { 
        id:5, title:'x' , des: 'y', at: 'z'
    },
   update: { 
    id:6, title:'x' , des: 'y', at: 'z'
}
  }


  delBtnHandler=(id)=>{
    let result = this.state.reminders.filter(r=>r.id !== id)
    this.setState({reminders : result})
  } 

  newTitleHandled =(e)=>{
    let copy = {...this.state.newReminder}
    copy.title = e.target.value
      this.setState({newReminder: copy})
  }

  newDesHandeled =(e)=>{
    let copy = {...this.state.newReminder}
    copy.des = e.target.value;
    this.setState({newReminder: copy})
  }


  saveBtnHandler =()=>{
    this.setState({reminders: this.state.reminders.concat(this.state.newReminder)})
  }

//! Auto title changer
  onTitleChanged = (id,e)=>{
     let result = this.state.reminders.map(r=>{
       if(r.id === id){
         let copy = {...r}
         copy.title = e.target.value
         return copy
       }
       return r
     })
     this.setState({reminders: result})
  }

  onDesupdater =(e)=>{
    let copy = {...this.state.update}
    copy.des = e.target.value
    this.setState({update:copy})
  }
  


  onBtnUpdater =(id)=>{
     let result = this.state.reminders.map(r =>{
       if(r.id === id){
         let copy = {...r}
         copy.des = this.state.update.des
         return copy
       }
       return r
     })
     this.setState({reminders: result})
      console.log(result)
  }

  onAtchanger =(e)=>{
    let copy = {...this.state.update}
    copy.at = e.target.value
    this.setState({update:copy})
  }


  edithandler=(id)=>{
     let result = this.state.reminders.find(r=>r.id === id)
     let copy = {...this.state.update}
     copy.at = result.at
     copy.id = result.id
     copy.des = result.des
     this.setState({update:copy})
     console.log(result)
  }
 
  applyBtn=()=>{
    let result = this.state.reminders.filter(r=>r.id !==this.state.update.id)
    result.push(this.state.update)
    this.setState({reminders:result})
  }
  render(){
    return (
    <div className="App">
      <div>
          {this.state.reminders.map(r => {
            return (
              <Reminder
                title= {r.title}
                des = {r.des}
                at = {r.at}
                 
                delHandler ={()=>this.delBtnHandler(r.id)}
                tilteChangeHandler={(e)=>this.onTitleChanged(r.id,e)}
                 updateBtnEvent = {()=>this.onBtnUpdater(r.id)}
                 desChangeHandler = {(e)=>this.onDesupdater(e)}
                 editBtnEvent={()=>this.edithandler(r.id)}
                
              />
            )
          })}
      </div>
      <div>
          <NewRem
            title = {this.state.newReminder.title}
            newTitleHandler = {(e)=>this.newTitleHandled(e)}
            newDesHandler ={(e)=>this.newDesHandeled(e)}
            saveBtnEvent = {this.saveBtnHandler}
            
          />
      </div>
    <div>
      <Update
      at= {this.state.update.at}
      atChanger ={(e)=>this.onAtchanger(e)}
      applayEvent ={this.applyBtn}/>
    </div>
    </div>
  );
  }
  
}

export default App;

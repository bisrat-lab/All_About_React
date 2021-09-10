
import './App.css';
import React from "react"
import Reminder from './Reminder';
import NewReminder from './NewReminder';
import UpdateForm from './UpdateForm';
class App extends React.Component {
  state= {
    reminders : [
      {id: 1, title:'Study' , des: 'go over the slide', at: '444/03/2021'},
      {id: 2, title:'School' , des: 'kids school', at: '29/03/2021'},
      {id: 3, title:'shoping' , des: 'for me', at: '200/03/2021'}
    ],
    newReminde : {id: 0, title:'y' , des: 'd', at: '#'},
    updatReminde : {id: 0, title:'y' , des: 'd', at: '#'}

  }

  //! ==========Delete Hhandler START
  delBtnHandler =(id)=>{
    let result = this.state.reminders.filter(r=>r.id !== id)
    this.setState({reminders: result})
  }
  //! ==========Delete Hhandler END

  //!=========new Input Handler START
  titleInputHandled=(e)=>{
      let copy = {...this.state.newReminde}
      copy.title = e.target.value;
      this.setState({newReminde: copy})
  }
  idInputeHandled=(e)=>{
    let copy = {...this.state.newReminde}
    copy.id = e.target.value;
    this.setState({newReminde:copy})
  }
//!=========new Input Handler END

//!=========SAve Btn Handler START
  saveBtnHandler=()=>{
     this.setState({reminders: this.state.reminders.concat(this.state.newReminde)})
  }
//!=========SAve Btn Handler END

//!=========update title Input Handler START
   titleInpurHandled =(e)=>{
     let copy = {...this.state.updatReminde}
     copy.title = e.target.value
     copy.des = 
     this.setState({updatReminde:copy})
   }
   decInputHandled =(e)=>{
     let copy ={...this.state.updatReminde}
     copy.des = e.target.value

     this.setState({updatReminde:copy})
   }

//!=========update title Input Handler END

//! //!=========Update  Btn Handler START
  updateBtnHandler =(id)=>{
       let result = this.state.reminders.map(r=>{
            if(r.id===id){
              let copy = {...r}
              copy.title = this.state.updatReminde.title
              copy.des = this.state.updatReminde.des;
              return copy;
            }
            return r
       })
       this.setState({reminders:result})
  }
//! //!=========Update  Btn Handler END

//! //!=========Edit  Btn Handler END
editBthHandler =(id)=>{
  let result = this.state.reminders.find(r => r.id === id)
  let copy = {...this.state.updatReminde}
  copy.id = result.id
  copy.title = result.title
  copy.des =result.des
  this.setState({updatReminde:copy})
  console.log(result)
}

titlerEditHandler =(e)=>{
  let copy = {...this.state.updatReminde}
  copy.title = e.target.value
  this.setState({updatReminde :copy})
}

applyBtnHandler =()=>{
 let result = this.state.reminders.filter(r=>r.id !==this.state.updatReminde.id)
 result.push(this.state.updatReminde)
 this.setState({reminders:result})
}


  render(){
    return (
    <div className="App">
      <div>
        {this.state.reminders.map(r=>{
          return (
            <Reminder
             title ={r.title}
              dec = {r.des}
              date= {r.at}
              
              delEventBtn ={()=>this.delBtnHandler(r.id)}
              // titleUpdaterInput = {(e)=>this.titleInpurHandled(r.id,e)}
              titleUpdaterInput = {(e)=>this.titleInpurHandled(e)}
              decUpdaterInput ={(e) => this.decInputHandled(e)}
              updateEventBtn = {()=>this.updateBtnHandler(r.id)}
              editEventBtn ={()=>this.editBthHandler(r.id)}
            />
          )
        })}
      </div>
      <div>
        <NewReminder
        id ={this.state.newReminde.id}
        title={this.state.newReminde.title}
        dec ={this.state.newReminde.des}
        date= {this.state.newReminde.at}
        idInputHandler = {(e)=>this.idInputeHandled(e)}
        titleInputHandler = {(e)=>this.titleInputHandled(e)}
        saveBtnEvent={this.saveBtnHandler}
        
        />
      </div>
      <div>
        <UpdateForm
          title = {this.state.updatReminde.title}
          titleEditer ={(e)=>this.titlerEditHandler(e)}
          applyBtnEvent ={this.applyBtnHandler}
        />
      </div>
    </div>
  );
  }
  
}

export default App;

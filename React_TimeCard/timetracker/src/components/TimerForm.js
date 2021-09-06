import React, { Component } from "react";
import './style.css'
export class TimerForm extends Component {
  state= {
    title: this.props.title || "",
    project :this.props.project || ""
  }
  handleTitleChange=(e)=>{
    this.setState({title : e.target.value})
  }
  handleProjectChange=(e)=>{
    this.setState({project : e.target.value})
  }
  handleSubmit =()=>{
    this.props.onFormSubmit({
      title: this.state.title,
      project: this.state.project
    })
  }
  render() {
    const submitText = this.props.id ? "Update" : "Create";
    return (
      <div className="card">
          <div>
              Title: <input
              value={this.state.title}
              onChange ={this.handleTitleChange}
              />
          </div>
          <div>
              Project: <input
              value = {this.state.project}
              onChange ={this.handleProjectChange}
              />
          </div>
          <div>
              <button onClick={this.handleSubmit}>{submitText}</button>
              <button onClick={this.props.onFormClose}>cancle</button>
          </div>
      </div>
    );
  }
}

export default TimerForm;

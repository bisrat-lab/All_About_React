import React, { Component } from "react";
import './style.css'
export class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <div className="card">
          <div>
              Title: <input
              value={this.props.title}
              />
          </div>
          <div>
              Project: <input
              value = {this.props.project}
              />
          </div>
          <div>
              <button>{submitText}</button>
              <button>cancle</button>
          </div>
      </div>
    );
  }
}

export default TimerForm;

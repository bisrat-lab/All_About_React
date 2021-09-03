import React, { Component } from "react";

export class Addstudent extends Component {
  render() {
    return (
      <div className="card">
        <div className="pad">
          ID: <input value={this.props.id} onChange={this.props.idEvent} />
        </div>
        <div className="pad">
          First Name:{" "}
          <input value={this.props.fname} onChange={this.props.fNameEvent} />
        </div>
        <div className="pad">
          Last Name:{" "}
          <input value={this.props.lname} onChange={this.props.lNameEvent} />
        </div>
        <div className="pad">
          Age : <input value={this.props.age} onChange={this.props.ageEvent} />
        </div>

        <button onClick={this.props.addEvent}>Add Student</button>
      </div>
    );
  }
}

export default Addstudent;

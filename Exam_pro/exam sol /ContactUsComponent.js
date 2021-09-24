import React, { Component } from "react";
import axios from "axios";
export class ContactUsComponent extends Component {
  state = {
    contact: {
      name: "",
      massage: "",
    },
  };


  onSendBtn = (e) => {
    e.preventDefault();
    const { name, massage } = this.state;
    console.log(this.state.contact.name.length);

    if ((this.checkName(this.state.contact.name)) && (this.checkName(this.state.contact.massage)) ) {
      axios
        .post("http://localhost:4444/api/contact", this.state.contact)
        .then((res) => {
          console.log("posted");
        });
    } else {
      alert("name and massage must be more than 4");
    }
  };

  checkName(nameInput) {
    if (nameInput.length < 4) {
      return false;
    } else {
      return true;
    }
  }

  checkMassage(massageInput){
      if(massageInput.length <10){
          return false
      }else{
          return true
      }
  }

  onChange = (e) => {
    let copy = { ...this.state.contact };
    copy[e.target.name] = e.target.value;
    this.setState({ contact: copy });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSendBtn(e)}>
          Name:{" "}
          <input name="name" type="text" id="name" onChange={this.onChange} />
          <br></br>
          Message:{" "}
          <textarea
            name="massage"
            type="textarea"
            id="massage"
            onChange={this.onChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ContactUsComponent;

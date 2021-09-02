import { Component } from "react";
import PersonFunProbs from "./PersonFunProbs";
import PersonClassProbs from "./PersonClassProbs";

class Person extends Component {
  render() {
    return (
      <div>
        <PersonFunProbs firstName="Bisrat">
            First Name 
        </PersonFunProbs>
        <PersonClassProbs lastName="Kassa"/>
      </div>
    );
  }
}
export default Person;

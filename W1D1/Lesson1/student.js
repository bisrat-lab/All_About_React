import Person from './Person.js'

// const student = {
//   name: "bob",
// };
// export default student;

class Student extends Person{
    constructor(name, hobby){
        super(17)
        this.name =name;
        this.hobby =hobby;
    }
    sayHi = () => `Hi. I am ${this.name} and ${this.age} years Old and my hobby ${this.hobby}`;
}
export default Student;
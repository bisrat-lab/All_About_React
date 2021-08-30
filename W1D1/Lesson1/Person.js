class Person {
    constructor(age){
        this.age = age;
    }
    yourAge =() => 'My age is '+ this.age;
}
export default Person;
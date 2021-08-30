
const person = {
    fname : 'bob1',
    lname: "alex1",
    fullName : function() {
             return this.fname + " " + this.lname;
            }
}

const full1 = person.fullName.bind(person);
console.log(full1()) ;



// const person2 = {
//     fname : 'bob',
//     lname: "alex",
//    fullName(){
//       let result= ()=> console.log(this.fname + " " + this.lname)
//         result()
//    }          
// }
// const full = person2.fullName();




import Student from "./student.js";
import stu from "./student.js";
import { minutesInHour } from "./helper.js";
import { sayHi } from "./helper.js";


// const stu1 = student.name
// console.log(stu1)
// console.log(stu.name);

// console.log(minutesInHour);
// console.log(sayHi.name);

const student1 = new Student('Bob','movie')
const stuCopy = {...student1}
// console.log(student1.sayHi())
console.log(stuCopy.sayHi())
//Hi. I am Bob and 17 years Old

console.log(student1.yourAge())
//My age is 17

console.log(sayHi());
//Hello

console.log(minutesInHour);
//60
import React, { Component } from "react";
import "./App.css";
import Table from './table'
import Columns from './Columns'

// //2Create your first react element. Refer the React.createElement example slide.
// function App() {
//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement(
//       "h2",
//       { className: "header" },
//       "This is my first react "
//     ),
//     React.createElement('div',{className:"list"},
//       React.createElement('ul',{},
//         React.createElement('li',{},"list-1"),
//         React.createElement('li',{},"list-2"),
//         React.createElement('li',{},"list-3")
//       )
//     )
//   );
// }

// export default App;

// //3/4. Return an JSX as expression in a function
// function App() {
//   return (
//     <div className="App">
//       <h2>This is my first react</h2>
//       <div className="list" >
//         <ul>
//           <li>list1</li>
//           <li>list 2</li>
//         </ul>
//       </div>
//     </div>
//   )
// }
// export default App;

//5a. Returning a group of elements with div
// function App() {
//   return (
//     <div className="App">
//       <h2>This is my first react</h2>
//       <p>
//         asfdsf asdfasdf
//         adsfasdf adsfasdf asdfasdf rgretyrth
//         aseggwerg
//       </p>
//       <div className="list" >
//         <ul>
//           <li>list1</li>
//           <li>list 2</li>
//         </ul>
//       </div>
//     </div>
//   )
// }
// export default App;

// //b. Returning a group of elements with fragment
// function App() {
//   return (
//     <React.Fragment>
//       <h2>This is my first react</h2>
//       <p>
//         asfdsf asdfasdf
//         adsfasdf adsfasdf asdfasdf rgretyrth
//         aseggwerg
//       </p>
//       <div className="list" >
//         <ul>
//           <li>list1</li>
//           <li>list 2</li>
//         </ul>
//       </div>
//     </React.Fragment>
//   )
// }
// export default App;

//c. Implement the table example with fragment. Slides are Fragment motivation, Error without Fragment, Solution with Fragment.

// function App() {
//   return (
//     <table>
//     <tr>
//       <Columns/>
//     </tr>
//   </table>
 
//   )
// }

export default App;

//6a 
class App extends Component{
  render(){
    return(
      <div>
        <h2>Class based</h2>
      </div>
    )
  }
}
//6b

function App (){
  return(
    <div>
      <h2>function based</h2>
    </div>
  )
}


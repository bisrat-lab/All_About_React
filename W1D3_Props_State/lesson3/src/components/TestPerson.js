import React  from 'react'
class TestPerson extends React.Component{
     render(){
         return(
             <div>
                 <p>{this.props.name}</p>
                 <button onClick={this.props.incHandle} >Increment</button>
                 <button onClick={this.props.decHandle} >decrement</button>
             </div>
         )
     }
}
export default TestPerson
import React from 'react'

 class AddnewStuDemo extends React.Component  {
     state = {
         isopen : false
     }
     render(){
         
         return (
        <div>
            <input
                onChange = {this.props.newNameH}
            />
            <input
                 onChange = {this.props.newAgeH}/>
            <button onClick={this.props.addEvent}>add</button>
        </div>
    )
     }
    
}
export default AddnewStuDemo
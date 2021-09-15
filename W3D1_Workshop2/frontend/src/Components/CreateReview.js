// import React, { Component } from 'react'
// import axios from 'axios'
// export class CreateReview extends Component {
//     state= {
//         review: {
//             title:"",
//             des :""
//         }
//     }
//     chandeHandler=(e)=>{
//         let copy = {...this.state.review}
//         copy[e.target.name] = e.target.value
//         this.setState({review:copy})
//     }

    // postBtnHandler=()=>{
    //     // console.log(this.props)
    //     axios.post(`http://localhost:3333/products/${this.props.match.params.id}/review`,this.state.review)
    //     .then(res=>{
    //         console.log(res.data)
            
    //          this.setState()
    //     })
    // }
//     render() {
//         return (
//             <div >
//                  <div>
//                   Title: <input
//                   name='title'
//                   onChange ={(e)=>this.chandeHandler(e)}
//                   />
//                 </div>
//                 <div className="m-2">
//                    Desc: <textarea
//                    name='des'
//                    onChange ={(e)=>this.chandeHandler(e)}
//                    />
//                 </div>
//                 <div>
//                    {/* <button className="btn btn-primary m-2" onClick={this.postBtnHandler}>Post Review</button> */}
//                    <button className="btn btn-primary m-2" onClick={this.props.postBtnHandler}>Post Review</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CreateReview

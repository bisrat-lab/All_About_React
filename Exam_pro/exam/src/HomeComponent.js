import React, { Component } from 'react'
import axios from 'axios'
export class HomeComponent extends Component {
    state= {
        user :{}
    }
    componentDidMount () {
        axios.get('http://localhost:4444/api/home').then(res=>{
           let copy = {...this.state}
           copy.user = res.data
           this.setState(copy)
        })
        console.log(this.props.match)
    }
    render() {
        return (
            <div>
               <p>{this.state.user.username}</p> 
               <p>{this.state.user.fileCount}</p>
               <p>{this.state.user.lastLoginDate}</p>
            </div>
           
        )
    }
}

export default HomeComponent

import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <form>

            
            <div className="card2">
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="Inputpassword" className="form-label">Password</label>
                <input type="text" className="form-control" id="Inputpassword" aria-describedby="emailHelp"/>
                </div>
            
            <button className="btn btn-primary">Submit</button>
          </div>
          </form>
        )
    }
}

export default Register

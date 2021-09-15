import React, { Component } from 'react'

export class Review extends Component {
    render() {
        return (
            <div className="card3 m-2">
                <div className='m-3'>
                Title: <input
                   name="title"
                   value= {this.props.title}
                   onChange ={this.props.inputhandler}
                />
                </div>
                <div>
                Desc <input
                value={this.props.des}
                name="des"
                onChange ={this.props.inputhandler2}
                />
                </div>
                <div>
                <button className='m-3 btn btn-primary' onClick={this.props.postHandler}>add post</button>
                </div>
            </div>
        )
    }
}

export default Review

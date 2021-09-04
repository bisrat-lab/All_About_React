import React, { Component } from 'react'
import "./movielist.css"
import Tog from "./tog"

export class MovieList extends Component {
    render() {
        return (
           
                <div className="card">
                    <p>{this.props.name}</p>
                    <input
                    value = {this.props.name}
                    onChange ={this.props.editNameEvent}
                    />
                    <p>{this.props.genras}</p>
                    <input></input>
                    <p>{this.props.rating}</p>
                    <input></input>
                    <Tog info ="bbbbbbb"/>
                    <span>{this.props.d}</span>
                    <div>
                        <button onClick={this.props.deleteEvent}>Delet</button>
                         <button onClick={this.props.infoEvent}>info</button>
                    </div>
                </div>
          
                
           
        )
    }
}

export default MovieList

import React, { Component } from 'react'
import MovieList from './MovieList'
import axios from 'axios'

export class Movie extends Component {
    state= {
        movies : []
    }
    componentDidMount(){
         axios.get("http://localhost:2000/movies")
         .then((response)=>{
             console.log(response.data)
           this.setState({movies: response.data})
         })
    }
    render() {
        return (
            <div>
                <div>
                  {
                      this.state.movies.map(m=>{
                       return(  <MovieList
                       key ={m.id}
                        name= {m.name}
                        rating = {m.rating}
                       
                        />
                        )
                      })
                  }
                </div>
            </div>
        )
    }
}

export default Movie

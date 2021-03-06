import React, { Component } from 'react'
import MovieList from './MovieList'
import axios from 'axios'

export class Movie extends Component {
    state= {
        movies : [],
       
    }
    componentDidMount(){
         axios.get("movies")
         .then((response)=>{
             console.log(response.data)
           this.setState({movies: response.data})
         })
    }
    
    delBtnHandler =(id)=>{
        axios.delete(`movies/${id}`)
        .then(response => {
            console.log(response)
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
                        onDeleteBtn={()=>this.delBtnHandler(m.id)}
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

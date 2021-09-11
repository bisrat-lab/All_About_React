import React, { Component } from 'react'
import MovieList from './MovieList'
import CreateMovie from './CreateMovie'
import axios from 'axios'

export class Movie extends Component {
    state= {
        movies : [],
        newMovie :{
            name: "",
            year:"",
            rating:0
        }
    }
    componentDidMount(){
         axios.get("http://localhost:2000/movies")
         .then((response)=>{
             console.log(response.data)
           this.setState({movies: response.data})
         })
    }
    changeInputHandler =(e)=>{
        let copy = {...this.state.newMovie}
        copy[e.target.name] = e.target.value;
        this.setState({newMovie: copy})
    }
    saveBtnHandler =()=>{
        const addMovie = {
            name: this.state.newMovie.name,
            year: this.state.newMovie.year,
            rating: this.state.newMovie.rating
        }
        axios.post("http://localhost:2000/movies",addMovie)
        .then(response =>{
            console.log(response.data)
           
        })
        this.setState({movies:this.state.movies.concat(this.state.newMovie)})
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
                <div>
                   <CreateMovie
                   chageHandler={(e)=>this.changeInputHandler(e)}
                   saveHandler ={this.saveBtnHandler}
                   />
                </div>
            </div>
        )
    }
}

export default Movie

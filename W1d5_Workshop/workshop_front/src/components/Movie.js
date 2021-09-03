import React, { Component } from 'react'
import MovieList from './MovieList'
import CreateMovie from './CreateMovie'
import "./movielist.css"

export class Movie extends Component {
    state ={
        movies : [
            {id:1, name: "kick boxer", rating: "9", genras:"Action",dis:"good" },
            {id: 2, name: "Titnic", rating: "7", genras:"Romans" ,dis:"bad"},
            {id: 3, name: "Mirror", rating: "8", genras:"Horror" ,dis:"very good"},
            {id: 4, name: "Mortal", rating: "5", genras:"Hifi" ,dis:"very bad"},
        ],
        isInfo: false,
        discr:"",
        newMovie: {
            name:"x",
            genras:"x",
            rating:0
        }
    }

    infoHandler =(movieId)=>{
       let result =  this.state.movies.filter(m=>m.id === movieId)
       .map(m=>m.dis)
        
      this.setState({discr : result})
         console.log(movieId)
         console.log(result)        
            this.setState({isInfo : !this.state.isInfo}) 
    }

    deleteHandler=(movieId)=>{
        let result = this.state.movies.filter(movie =>movie.id !== movieId)
        this.setState({movies : result})
    }
    changeNameHandler=(movieId,e)=>{
        let result = this.state.movies.map(movie=>{
            if(movie.id === movieId){
                let copy ={...movie}
                copy.name = e.target.value
                return copy;
            }
            return movie;
        })   
        this.setState({movies: result})
    }
    // saveNewMovie = (event, field)=>{
    //     this.setState({newMovie:{
    //         [event.target.name]: event.target.value,}
    //     })
    //     console.log(this.state.newMovie)
    // }

   handleName = (event)=>{
        this.setState({newMovie:{name: event.target.value, rating: this.state.newMovie.rating}})
    }

    handleRating = (event)=>{
        this.setState({newMovie:{name: this.state.newMovie.name,rating: event.target.value}})
        console.log(this.state.newMovie)
    }

    onSaveBtn=()=>{
        this.setState({movies: this.state.movies.concat(this.state.newMovie)})
        console.log(this.state.newMovie)
    }
  
    render() {

        let movieList = null;
        
            if(this.state.isInfo){
                        return (
                        movieList = (
                            <div
                              dis={this.state.discr}
                            />   
                        )
                    )
            }
             
        
       
        return (
            <div>
                 <div >
               {this.state.movies.map(movie=>{
                   return (
                   < MovieList
                        key = {movie.id}
                        name = {movie.name}
                        genras = {movie.genras}
                        rating = {movie.rating}
                        info = {movieList}
                        infoEvent ={()=>this.infoHandler(movie.id)}
                        deleteEvent ={()=>{this.deleteHandler(movie.id)}}
                        editNameEvent ={(event)=>this.changeNameHandler(movie.id, event)}
                   />
                   )
               })}
                 {movieList}
                  </div>
                  <div>
                      <CreateMovie
                    name = {this.state.newMovie.name}
                    genras = {this.state.newMovie.genras}
                    rating = {this.state.newMovie.rating}
                    nameChanged ={(e)=>this.handleName(e)}
                    ratingChanged = {(e)=>this.handleRating(e)}
                    // ratingChanged )={(e)=>this.saveNewMovie(e)}
                    addHandler ={()=>this.onSaveBtn()}
                 />
                  </div> 
            </div>
          
                 
           
        )
    }
}

export default Movie

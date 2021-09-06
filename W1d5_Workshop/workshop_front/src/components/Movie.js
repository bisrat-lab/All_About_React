import React, { Component } from "react";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";
import "./movielist.css";
import Tog  from "./tog";
import UpadteMovie from "./UpadteMovie";

export class Movie extends Component {
  state = {
    movies: [
      { id: 1, name: "kick boxer", rating: "9", genras: "Action", dis: "good" },
      { id: 2, name: "Titnic", rating: "7", genras: "Romans", dis: "bad" },
      {
        id: 3,
        name: "Mirror",
        rating: "8",
        genras: "Horror",
        dis: "very good",
      },
      { id: 4, name: "Mortal", rating: "5", genras: "Hifi", dis: "very bad" },
    ],
    isInfo: false,
    discr: "",
    newMovie: {
      name: "x",
      genras: "x",
      rating: 0,
    },
    showUpdateForm :false,
    updatedMovie :{
        id: 3,
        name: "",
        rating: "",
        genras: "",
        dis: "",
    }
  };

  infoHandler = (movieId) => {
    let result = this.state.movies.filter((movie) => movie.id === movieId).map(m=>m.dis).toString();
    this.setState({discr: result})
    this.setState({ isInfo: !this.state.isInfo });
    console.log(this.state.discr);
  };

  deleteHandler = (movieId) => {
    let result = this.state.movies.filter((movie) => movie.id !== movieId);
    this.setState({ movies: result });
  };
  changeNameHandler = (movieId, e) => {
    let result = this.state.movies.map((movie) => {
      if (movie.id === movieId) {
        let copy = { ...movie };
        copy.name = e.target.value;
        return copy;
      }
      return movie;
    });
    this.setState({ movies: result });
  };
  // saveNewMovie = (event, field)=>{
  //     this.setState({newMovie:{
  //         [event.target.name]: event.target.value,}
  //     })
  //     console.log(this.state.newMovie)
  // }

  handleName = (event) => {
    this.setState({
      newMovie: {
        name: event.target.value,
        rating: this.state.newMovie.rating,
      },
    });
  };

  handleRating = (event) => {
    this.setState({
      newMovie: { name: this.state.newMovie.name, rating: event.target.value },
    });
    console.log(this.state.newMovie);
  };

  onSaveBtn = () => {
    this.setState({ movies: this.state.movies.concat(this.state.newMovie) });
    console.log(this.state.newMovie);
  };

  updateBtnHandler =(id)=>{
    this.setState({showUpdateForm: !this.state.showUpdateForm})
    let result = this.state.movies.find(m=>m.id=== id)
    let copy = this.state.updatedMovie;
    copy.name = result.name;
    copy.rating = result.rating
    copy.genras = result.genras
    this.setState({updatedMovie : copy})
    console.log(result)
  }
  nameUpdated =(e)=>{
    let copy = {...this.state.updatedMovie}
    copy.name = e.target.value
    this.setState({updatedMovie: copy})
  }
  ratingUpdater=(e)=>{
    let copy = {...this.state.updatedMovie}
    copy.rating = e.target.value
    this.setState({updatedMovie : copy})

  }

  applyBtnHandler =()=>{
    let id = this.state.updatedMovie.id
    let result = this.state.movies.filter(m=>m.id !== id) 
     console.log(result)
    result.push(this.state.updatedMovie)
  
     this.setState({movies: result})
     this.setState({showUpdateForm: !this.state.showUpdateForm})
  }

  render() {
      let showUpdateForm1 = null
      if(this.state.showUpdateForm){
        showUpdateForm1 =(
          <div className="card">
             <UpadteMovie
             name= {this.state.updatedMovie.name}
             rating = {this.state.updatedMovie.rating}
             
                 nameUpdateHandler= {(e)=>this.nameUpdated(e)}
                 ratingUpdateHandler ={(e)=>this.ratingUpdater(e)}
                 applyBtnEvent = {this.applyBtnHandler} 
               />
            </div>
         
        )
      }
      let movieList = null;
      if (this.state.isInfo){ 
        movieList = <Tog
        dis = {this.state.discr}
        
        />        
      }
     
 

    return (
      <div>
        <div>
          {this.state.movies.map((movie) => {
            return (
                <div>
              <MovieList
                key={movie.id}
                name={movie.name}
                genras={movie.genras}
                rating={movie.rating}
                
              
                infoEvent={() => this.infoHandler(movie.id)}
                deleteEvent={() => {
                  this.deleteHandler(movie.id);
                }}
                editNameEvent={(event) =>
                  this.changeNameHandler(movie.id, event)
                }
                updateEvent ={()=>this.updateBtnHandler(movie.id)}
              />
              
              </div>
            );
          })}
         
             {movieList} 
          
      
        </div>
        <div>
          <CreateMovie
            name={this.state.newMovie.name}
            genras={this.state.newMovie.genras}
            rating={this.state.newMovie.rating}
            nameChanged={(e) => this.handleName(e)}
            ratingChanged={(e) => this.handleRating(e)}
            // ratingChanged )={(e)=>this.saveNewMovie(e)}
            addHandler={() => this.onSaveBtn()}
          />
        </div>
        
           {showUpdateForm1}
       
      </div>
    );
  }
}

export default Movie;

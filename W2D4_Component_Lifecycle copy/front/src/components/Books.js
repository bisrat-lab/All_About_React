import React, { Component } from 'react'
import BookList from './BookList'
import axios from 'axios'

export class Books extends Component {
    state= {
        books : [],
       
    }
    componentDidMount(){
         axios.get("http://localhost:2001/books")
         .then((response)=>{
             console.log(response.data)
           this.setState({books: response.data})
         })
    }
    
    delBtnHandler =(id)=>{
        axios.delete(`http://localhost:2001/books/${id}`)
        .then(response => {
            console.log(response)
        })
        
    }
    render() {
        return (
            <div>
                
                <div>
                  {
                      this.state.books.map(m=>{
                       return(  <BookList
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

export default Books

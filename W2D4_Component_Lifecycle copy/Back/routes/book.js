var express = require('express');
var router = express.Router();
const {validateToken} = require("./jwt")


var books = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
 ];

router.get('/', function(req, res, next) {
  res.json(books)
});

router.post('/',validateToken,(req,res)=>{
    let newID = books[books.length-1].id +1 ;
    books.push({
        id: newID,
        name: req.body.name,
        year: req.body.year,
        rating :req.body.rating
    })
    res.json({massage:"New Book created"})
})

router.put('/:id',(req,res)=>{

    let updatedIndex = books.map(m=>m.id).indexOf(parseInt(req.params.id))
    
    if(updatedIndex !== -1){
        books[updatedIndex]={
            id: req.params.id,
            name: req.body.name,
            year: req.body.year,
            rating :req.body.rating

        }
        res.json({massage:"book Updated"})
    }
})

router.delete('/:id',(req,res)=>{
    let index = books.map(m=>m.id).indexOf(parseInt(req.params.id))
    console.log(req.params.id)
    if(index === -1){
        res.json({message: "Not Found"})
    }else{
        books.splice(index,1);
        res.json({massage: "removed"})
    }
})

module.exports = router;

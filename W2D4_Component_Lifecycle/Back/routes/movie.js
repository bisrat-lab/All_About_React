var express = require('express');
var router = express.Router();


var movies = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
 ];

router.get('/', function(req, res, next) {
  res.json(movies)
});

router.post('/',(req,res)=>{
    let newID = movies[movies.length-1].id +1 ;
    movies.push({
        id: newID,
        name: req.body.name,
        year: req.body.year,
        rating :req.body.rating
    })
    res.json({massage:"New movie created"})
})

router.put('/:id',(req,res)=>{
    let updatedIndex = movies.map(m=>m.id).indexOf(parseInt(req.params.id))
    
    if(updatedIndex !== -1){
        movies[updatedIndex]={
            id: req.params.id,
            name: req.body.name,
            year: req.body.year,
            rating :req.body.rating

        }
        res.json({massage:"movie Updated"})
    }
})

router.delete('/:id',(req,res)=>{
    let index = movies.map(m=>m.id).indexOf(req.params.id)
    if(index === -1){
        res.json({message: "Not Found"})
    }else{
        movies.splice(index,1);
        res.json({massage: "removed"})
    }
})

module.exports = router;

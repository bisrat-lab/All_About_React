var express = require('express');
var router = express.Router();



var products = [
    {id: 101, name: "Banana",  price: 8.1, brand :"apple",model:"LX",
    review:[
            {id: 1,title: "good product" ,des: "easy to use",point:0},
            {id: 2, title: "Very bad product",des: "it is hard to use and it is very chip",point:0}
           ]},
    {id: 102, name: "Cup", price: 8.7,brand :"mac",model:"DX",review:[{id: 1,title: "" ,des: "",point:0}]},
    {id: 103, name: "Toy",  price: 9,brand :"samsung",model:"PX",review:[{id: 1,title: "" ,des: "",point:0}]},
    {id: 104, name: "DVD",  price: 8.9,brand :"apple",model:"BC",review:[{id: 1,title: "" ,des: "",point:0}]}
 ];


router.post('/:id/review',(req,res)=>{
   
    let updatedIndex = products.map(m=>m.id).indexOf(parseInt(req.params.id))
    let title = req.body.title
    let des = req.body.des 
     console.log(title)   
console.log(title)
    let newId = products[updatedIndex].review[products[updatedIndex].review.length-1].id+1;
    
    products[updatedIndex].review.push({
        id: newId,
        title : title,
        des :des
    }) 
  
    res.json(products)
})

router.get('/', function(req, res, next) {
  res.json(products)
});
router.get('/:id', function(req, res, next) {
    let updatedIndex = products.map(m=>m.id).indexOf(parseInt(req.params.id))
    if(updatedIndex !== -1){
    res.json(products[updatedIndex])
    }else{
      res.json("not Found")  
    }
  });

router.post('/',(req,res)=>{
    let newID = products[products.length-1].id +1 ;
    products.push({
        id: newID,
        name: req.body.name,
        price :req.body.price
    })
    res.json({massage:"New product created"})
})

router.put('/:id',(req,res)=>{

    let updatedIndex = products.map(m=>m.id).indexOf(parseInt(req.params.id))
    
    if(updatedIndex !== -1){
        products[updatedIndex]={
            id: req.params.id,
            name: req.body.name,
            price :req.body.price

        }
        res.json({massage:"products Updated"})
    }
    
})


router.delete('/:id',(req,res)=>{
    let index = products.map(m=>m.id).indexOf(parseInt(req.params.id))
    console.log(req.params.id)
    if(index === -1){
        res.json({message: "Not Found"})
    }else{
        products.splice(index,1);
        res.json({massage: "removed"})
    }
})

module.exports = router;


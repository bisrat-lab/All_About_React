var express = require("express");
var router = express.Router();
const products =[
    { 
        id:1, 
        productName: 'Pencil', 
        price: 5,
        count: 0 
       },
       { 
        id:2, 
        productName: 'book', 
        price: 4,
        count: 0
       },
    
]





router.get("/products", function (req, res, next) {
  res.json(products);
});

router.post("/products",(req,res)=>{
    products.push({
        productName : req.body.productName,
        price : req.body.price,
        count : 1
    })

})













router.patch('/products/:id',(req,res)=>{
    let updated = products.map(p=> p.id).indexOf(parseInt(req.params.id))
    if(updated !== -1){
        products[updated]={
        id:parseInt(req.params.id),
        productName : req.body.productName,
        price: req.body.price,
        count: req.body.count

        }
        res.json(products)
    }

})




router.delete('/products/:id',(req,res)=>{
    let index = products.map(p=>p.id).indexOf(parseInt(req.params.id))
    if(index === -1){
        res.json({message: "Not Found"})
    }else{
        products.splice(index,1);
        res.json({massage: "removed"})
    }
})



module.exports = router;
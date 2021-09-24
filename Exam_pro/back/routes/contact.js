var express = require("express");
var router = express.Router();

const contact = [{name:'umer',massage:"No class"}]



router.get("/home", function (req, res, next) {
  res.json(contact);
});

router.post('/contact',(req,res)=>{
    contact.push({
        name : req.body.name,
        massage: req.body.massage
    })
  res.json(contact)
})


module.exports = router;


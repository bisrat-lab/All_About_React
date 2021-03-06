var express = require('express');
var router = express.Router();
const {createToken} = require('./jwt')
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

const users = [
  {   id: 1,
      username: 'john',
      password: '123',
      role: 'admin'
  }, {
    id: 2,
      username: 'bob',
      password: '456',
      role: 'member'
  }
];

router.post('/login',(req,res)=>{
  // Read username and password from request body
  const {username,password} = req.body;
  
  // Filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password });

  if(user){
    const accessToken = createToken(user)
    res.json({accessToken:accessToken, user:user});
  }else{
    res.json({error: 'Username or password incorrect'})
  }

})

router.post('/register',(req,res)=>{
  let newID = users[users.length-1].id +1 ;
  users.push({
      id: newID,
      username: req.body.username,
      password: req.body.password
  })
  res.json({massage:"New user created"})
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users)
});

module.exports = router;


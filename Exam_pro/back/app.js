var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const fileRoute = require('./routes/index')
var usersRouter = require('./routes/users');
const contactRoute = require('./routes/contact')
const productRoute =require('./routes/product')

var app = express();



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


 app.use('/api',fileRoute)
app.use('/api', usersRouter);
app.use('/api',contactRoute)
app.use('/api',productRoute)



// error handler
app.use(function(err, req, res, next) {
  res.json(err)
});

app.listen(4444)











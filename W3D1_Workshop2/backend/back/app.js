var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const productRoute = require('./routes/product')
var usersRouter = require('./routes/users');

var app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/products',productRoute)
app.use('/users', usersRouter);



// error handler
app.use(function(err, req, res, next) {
  res.json(err)
});

app.listen(3333)







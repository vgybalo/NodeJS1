const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/*mongoose.connect('mongodb+srv://adminTrip:1234@cluster0-vqkjy.mongodb.net/admin?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});*/
const db = mongoose.connection;
db.on('error', err => console.log('Mongo error occured',err));
db.once('open',(err)=>{
  if(err) throw err;
  console.log('Connected to db');
});
autoIncrement.initialize(mongoose.connection);

var indexRouter = require('./routes/api');
var usersRouter = require('./routes/users');
autoIncrement.initialize(mongoose.connection);

var indexRouter = require('./routes/api');
var usersRouter = require('./routes/users');
autoIncrement.initialize(mongoose.connection);

var indexRouter = require('./routes/api');
var usersRouter = require('./routes/users');
autoIncrement.initialize(mongoose.connection);

var indexRouter = require('./routes/api');
var usersRouter = require('./routes/users');
//var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware for cookies
/*app.use('/',function (req, res, next) {
  if(req.cookies.mycookie1 ==='Ar'){
    
    next()
  }
  else res.sendStatus(404);
  //console.log(new Date());
  
});*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
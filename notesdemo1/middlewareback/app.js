var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var registerRouter = require('./routes/registerRouter');
var loginRouter = require('./routes/loginRouter');
var notesRouter = require('./routes/notesRouter');
var isAuthenticated = require('./middleware/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/notes', isAuthenticated, notesRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var costumesRouter = require('./src/routes/costumes');
var tagsRouter = require('./src/routes/tags')
var costumes_tagsRouter = require('./src/routes/costumes_tags')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/costumes', costumesRouter);
app.use('/tags', tagsRouter);
app.use('/costumes_tags', costumes_tagsRouter);

module.exports = app;

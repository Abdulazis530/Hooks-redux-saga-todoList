const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')

const todosRouter = require('./routes/todos');
const app = express();
mongoose.connect('mongodb://localhost:27017/todoDb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())


app.use('/api/todos', todosRouter);

module.exports = app;

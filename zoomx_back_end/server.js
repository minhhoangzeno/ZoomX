var express = require('express');
var app = express();
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
let routes = require('./api/route');
routes(app)
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
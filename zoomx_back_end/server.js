var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose
    .connect('mongodb://localhost:27017/zoomx', {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected!')
    })
    .catch(err => {
        console.log(err)
    })

app.use(cors({}))
app.use(bodyParser.json());
var routes = require('./api/route');
routes(app)
app.use((req,res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);
console.log("Serever on port " + port)
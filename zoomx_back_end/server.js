var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    multer = require('multer'),
    Investment = require('./api/model/InvestmentModel'),
    Project = require('./api/model/ProjectModel'),
    Image = require('./api/model/ImageModel'),
    path = require('path')
    ;

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
app.use(express.static('public'))
app.use(multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, 'public/images'))
        },
        filename: (req, file, callback) => {
            // console.log(file.originalname);
            callback(null, file.originalname);
        },
    })
}).any())
var routes = require('./api/route');
routes(app)
app.use((req,res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);
console.log("Serever on port " + port)

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
    Recruitment = require('./api/model/RecruitmentModel'),
    Partner = require('./api/model/PartnerModel'),
    TimeLine = require('./api/model/TimeLineModel'),
    PersonContact = require('./api/model/PersonContactModel'),
    PersonRecruitment = require('./api/model/PersonRecruitmentModel'),
    File = require('./api/model/FileModel'),
    Hero = require('./api/model/HeroModel'),
    Blog = require('./api/model/BlogModel'),
    CategoryBlog = require('./api/model/CategoryBlogModel'),
    LibraryLookup = require('./api/model/LibraryLookupModel'),
    LibraryImage = require('./api/model/LibraryImageModel'),
    LibraryVideo = require('./api/model/LibraryVideoModel'),
    ContactPage = require('./api/model/ContactPageModel'),
    YoungBusiness = require('./api/model/YoungBusinessModel'),
    Slogan = require('./api/model/SloganModel'),
    ReasonSelect = require('./api/model/ReasonSelectModel'),
    DefineHome = require('./api/model/DefineHomeModel'),
    ZoomX = require('./api/model/ZoomXModel'),
    path = require('path')

    ;



mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://minhhoang:521985@zoomx.x6xhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to mongodb !!!');
}).catch((err) => {
    console.log(err);
})

app.use(cors({}))
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, 'public/files'))
        },
        filename: (req, file, callback) => {
            // console.log(file.originalname);
            callback(null, file.originalname);
        },
    })
}).any())
var routes = require('./api/route');
routes(app)
app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);
console.log("Serever on port " + port)

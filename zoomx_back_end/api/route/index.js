const hotelToDo = require('../controller/HotelController');
module.exports = app => {
    app.route('/')
        .get(hotelToDo.get_all)
        .post(hotelToDo.add_all)
}
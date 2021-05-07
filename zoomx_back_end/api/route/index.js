const hotelToDo = require('../controller/HotelController');
const investment_controller = require('../controller/InvesmentController');
module.exports = app => {
    app.route('/')
        .get(hotelToDo.get_all)
        .post(hotelToDo.add_all)

    app.route('/investment')
        .get(investment_controller.get_investment)
        .post(investment_controller.add_investment)
    app.route('/investment/image/:investment_id')
        .post(investment_controller.upload_image_actor)
}
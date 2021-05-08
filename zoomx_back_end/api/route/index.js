const investment_controller = require('../controller/InvestmentController');
const image_controller = require('../controller/ImageController');
const project_controller = require('../controller/ProjectController');
const recruitment_controller = require('../controller/RecruitmentController');
const partner_controller = require('../controller/PartnerController')
module.exports = app => {


    app.route('/investment')
        .get(investment_controller.get_investment)
        .post(investment_controller.add_investment)
    app.route('/investment/image/:investment_id')
        .post(investment_controller.upload_image_actor)
    app.route('/investment/upload/project/:investment_id')
        .get(investment_controller.upload_project_investment)
    app.route('/images')
        .get(image_controller.get_image)

    app.route('/project')
        .get(project_controller.get_project)
        .post(project_controller.add_project)
    app.route('/project/image/cover/:project_id')
        .post(project_controller.upload_cover_image)
    app.route('/project/image/hero/:project_id')
        .post(project_controller.upload_hero_image)
    app.route('/project/image/project/:project_id')
        .post(project_controller.upload_project_image)
    app.route('/project/image/infor/:project_id')
        .post(project_controller.upload_infor_image)


    app.route('/recruitment')
        .get(recruitment_controller.get_recruitment)
        .post(recruitment_controller.add_recruitment)
    app.route('/recruitment/image/:recruitment_id')
        .post(recruitment_controller.upload_image_recruitment)

    app.route('/partner')
        .get(partner_controller.get_partner)
        .post(partner_controller.add_partner)
    app.route('/partner/image/:partner_id')
        .post(partner_controller.upload_image_partner)
}
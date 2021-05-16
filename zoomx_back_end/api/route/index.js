const investment_controller = require('../controller/InvestmentController');
const image_controller = require('../controller/ImageController');
const project_controller = require('../controller/ProjectController');
const recruitment_controller = require('../controller/RecruitmentController');
const partner_controller = require('../controller/PartnerController');
const timeline_controller = require('../controller/TimeLineController');
const file_controller = require('../controller/FileController');
const person_recruitment_controller = require('../controller/PersonRecruitmentController');
const person_contact_controller = require('../controller/PersonContactController');
module.exports = app => {


    app.route('/investment')
        .get(investment_controller.get_investment)
        .post(investment_controller.add_investment)
    app.route('/investment/:investment_id')
        .put(investment_controller.update_investment)
        .delete(investment_controller.delete_investment)
    app.route('/investment/image/:investment_id')
        .post(investment_controller.upload_image_actor)
    // app.route('/investment/upload/project/:investment_id')
    //     .get(investment_controller.upload_project_investment)

    app.route('/images')
        .get(image_controller.get_image)
        .post(image_controller.add_a_image)
    app.route('/images/:image_id')
        .put(image_controller.update_image)
        .delete(image_controller.delete_image)

    app.route('/files')
        .get(file_controller.get_file)
        .post(file_controller.add_a_file)
    app.route('/files/:file_id')
        .put(file_controller.update_file)
        .delete(file_controller.delete_file)

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
    app.route('/recruitment/:recruitment_id')
        .put(recruitment_controller.update_recruitment)
        .delete(recruitment_controller.delete_recruitment)
        .get(recruitment_controller.get_a_recruitment)
// ...........................................................//
    app.route('/partner')
        .get(partner_controller.get_partner)
        .post(partner_controller.add_partner)
    app.route('/partner/image/:partner_id')
        .post(partner_controller.upload_image_partner)

    app.route('/timeline')
        .get(timeline_controller.get_timeline)
        .post(timeline_controller.add_timeline)
    app.route('/timeline/:timeline_id')
        .put(timeline_controller.update_timeline)
        .delete(timeline_controller.delete_timeline)

    app.route('/person-recruitment')
        .get(person_recruitment_controller.get_person_recruitment)
        .post(person_recruitment_controller.add_person_recruitment)
    app.route('/person-recruitment/:person_recruitment_id')
        .put(person_recruitment_controller.update_person_recruitment)
        .delete(person_recruitment_controller.delete_person_recruitment)
    app.route('/person-recruitment/file/:person_recruitment_id')
        .post(person_recruitment_controller.upload_file_person_recruitment)

    app.route('/person-contact')
        .get(person_contact_controller.get_person_contact)
        .post(person_contact_controller.add_person_contact)
    app.route('/person-contact/:person_contact_id')
        .delete(person_contact_controller.delete_person_contact)
}
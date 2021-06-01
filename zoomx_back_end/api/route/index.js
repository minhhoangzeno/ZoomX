const investment_controller = require('../controller/InvestmentController');
const image_controller = require('../controller/ImageController');
const project_controller = require('../controller/ProjectController');
const recruitment_controller = require('../controller/RecruitmentController');
const partner_controller = require('../controller/PartnerController');
const timeline_controller = require('../controller/TimeLineController');
const file_controller = require('../controller/FileController');
const person_recruitment_controller = require('../controller/PersonRecruitmentController');
const person_contact_controller = require('../controller/PersonContactController');
const hero_controller = require('../controller/HeroController');
const blog_controller = require('../controller/BlogController');
const categoryblog_controller = require('../controller/CategoryBlogController');
const library_lookup_controller = require('../controller/LibraryLookupController');
const library_image_controller = require('../controller/LibraryImageController');
const library_video_controller = require('../controller/LibraryVideoController');
const slogan_controller = require('../controller/SloganController');
const contact_page_controller = require('../controller/ContactPageController')
const youngbusiness_controller = require('../controller/YoungBusinessController');
const reason_select_controller = require('../controller/ReasonSelectController')
const define_home_controller = require('../controller/DefineHomeController')
module.exports = app => {


    app.route('/investment')
        .get(investment_controller.get_investment)
        .post(investment_controller.add_investment)
    app.route('/investment/update/:investment_id')
        .put(investment_controller.update_investment)
    app.route('/investment/delete/:investment_id')
        .put(investment_controller.delete_investment)
    // app.route('/investment/image/:investment_id')
    //     .post(investment_controller.upload_image_actor)

    app.route('/images')
        .get(image_controller.get_image)
        .post(image_controller.add_a_image)
    app.route('/images/:image_id')
        .put(image_controller.update_image)
    app.route('/images/destroy/:image_id')
        .post(image_controller.delete_image)
    app.route('/files')
        .get(file_controller.get_file)
        .post(file_controller.add_a_file)
    app.route('/files/:file_id')
        .put(file_controller.update_file)
        .delete(file_controller.delete_file)

    app.route('/project')
        .get(project_controller.get_project)
        .post(project_controller.add_project)
    app.route('/project/:project_id')
        .put(project_controller.update_project)
        .delete(project_controller.delete_project)


    app.route('/recruitment')
        .get(recruitment_controller.get_recruitment)
        .post(recruitment_controller.add_recruitment)
    app.route('/recruitment/:recruitment_id')
        .put(recruitment_controller.update_recruitment)
        .delete(recruitment_controller.delete_recruitment)
        .get(recruitment_controller.get_a_recruitment)

    app.route('/partner')
        .get(partner_controller.get_partner)
        .post(partner_controller.add_partner)
    app.route('/partner/:partner_id')
        .put(partner_controller.update_partner)
        .delete(partner_controller.delete_partner)
        .get(partner_controller.get_a_partner)
        // doi tac

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

    app.route('/hero')
        .get(hero_controller.get_hero)
        .post(hero_controller.add_hero)
    app.route('/hero/:hero_id')
        .put(hero_controller.update_hero)
        .delete(hero_controller.delete_hero)


    app.route('/blog')
        .get(blog_controller.get_all_blog)
        .post(blog_controller.add_blog)
    app.route('/blog/:blog_id')
        .get(blog_controller.get_a_blog)
        .put(blog_controller.update_blog)
        .delete(blog_controller.delete_blog)
    app.route('/blog/image/start/:blog_id')
        .post(blog_controller.upload_imgae_start)
    app.route('/blog/image/mid/:blog_id')
        .post(blog_controller.upload_imgae_mid)
    app.route('/blog/image/begin/:blog_id')
        .post(blog_controller.upload_imgae_begin)

    app.route('/categoryblog')
        .get(categoryblog_controller.get_all_blogs)
        .post(categoryblog_controller.add_blog)
    app.route('/categoryblog/:categoryblog_id')
        .put(categoryblog_controller.update_blog)
        .delete(categoryblog_controller.delete_blog)

    app.route('/library/lookup')
        .get(library_lookup_controller.get_library_lookup)
        .post(library_lookup_controller.add_library_lookup)
    app.route('/library/lookup/:library_lookup_id')
        .put(library_lookup_controller.update_library_lookup)
        .delete(library_lookup_controller.delete_library_lookup)

    app.route('/library/image')
        .get(library_image_controller.get_library_image)
        .post(library_image_controller.add_librare_image)
    app.route('/library/image/:library_image_id')
        .put(library_image_controller.update_library_image)
        .delete(library_image_controller.delete_library_image)


    app.route('/library/video')
        .get(library_video_controller.get_libraryvideo)
        .post(library_video_controller.add_libraryvideo)
    app.route('/library/video/:library_video_id')
        .put(library_video_controller.update_library_video)
        .delete(library_video_controller.delete_library_video)

    app.route('/slogan')
        .get(slogan_controller.get_slogan)
        .post(slogan_controller.add_slogan)
    app.route('/slogan/:slogan_id')
        .put(slogan_controller.update_slogan)
        .delete(slogan_controller.delete_slogan)

    app.route('/youngbusiness')
        .get(youngbusiness_controller.get_young_business)
        .post(youngbusiness_controller.add_young_business)
    app.route('/youngbusiness/:youngbusiness_id')
        .put(youngbusiness_controller.update_youngbusiness)
        .delete(youngbusiness_controller.delete_young_business)


    app.route('/contact')
        .get(contact_page_controller.get_contact)
        .post(contact_page_controller.add_contact)
    app.route('/contact/:contact_page_id')
        .put(contact_page_controller.update_contact)
        .delete(contact_page_controller.delete_contact)

    app.route('/reason-select')
        .get(reason_select_controller.get_reason_select)
        .post(reason_select_controller.add_reason_select)
    app.route('/reason-select/:reason_select_id')
        .put(reason_select_controller.update_reason_select)
        .delete(reason_select_controller.delete_reason_select)

    app.route('/define-home')
        .get(define_home_controller.get_define_home)
        .post(define_home_controller.add_define_home)
    app.route('/define-home/:define_home_id')
        .put(define_home_controller.update_define_home)
        .delete(define_home_controller.delete_define_home)

    
}
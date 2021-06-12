const investment_controller = require("../controller/InvestmentController"),
  image_controller = require("../controller/ImageController"),
  project_controller = require("../controller/ProjectController"),
  recruitment_controller = require("../controller/RecruitmentController"),
  partner_controller = require("../controller/PartnerController"),
  timeline_controller = require("../controller/TimeLineController"),
  file_controller = require("../controller/FileController"),
  person_recruitment_controller = require("../controller/PersonRecruitmentController"),
  person_contact_controller = require("../controller/PersonContactController"),
  hero_controller = require("../controller/HeroController"),
  hero_zoomx_controller = require("../controller/HeroZoomXController"),
  hero_project_controller = require("../controller/HeroProjectController"),
  hero_investment_controller = require("../controller/HeroInvestmentController"),
  hero_news_controller = require("../controller/HeroNewsController"),
  hero_contact_controller = require("../controller/HeroContactController"),
  hero_library_controller = require("../controller/HeroLibraryController"),
  hero_recruitment_controller = require("../controller/HeroRecruitmentController"),
  blog_controller = require("../controller/BlogController"),
  categoryblog_controller = require("../controller/CategoryBlogController"),
  library_lookup_controller = require("../controller/LibraryLookupController"),
  library_image_controller = require("../controller/LibraryImageController"),
  library_video_controller = require("../controller/LibraryVideoController"),
  slogan_controller = require("../controller/SloganController"),
  contact_page_controller = require("../controller/ContactPageController"),
  youngbusiness_controller = require("../controller/YoungBusinessController"),
  reason_select_controller = require("../controller/ReasonSelectController"),
  define_home_controller = require("../controller/DefineHomeController"),
  zoomx_controller = require("../controller/ZoomXController"),
  icon_controller = require("../controller/IconController"),
  setting_controller = require("../controller/SettingController"),
  video_controller = require("../controller/VideoController"),
  person_mail_controller = require("../controller/PersonMailController"),
  user_controller = require("../controller/UserController")
  ;
module.exports = (app) => {
  //get linh vuc dau tu hoat dong co phan trang
  app
    .route("/investment")
    .get(investment_controller.get_investment)
    .post(investment_controller.add_investment);
  app.route("/investment-all").get(investment_controller.get_all_investment);
  app
    .route("/investment/update/:investment_id")
    .put(investment_controller.update_investment);
  app
    .route("/investment/delete/:investment_id")
    .put(investment_controller.delete_investment);
  app
    .route("/investment/:investment_id")
    .get(investment_controller.get_a_investment);
  app
    .route("/investment/remove/:investment_id")
    .delete(investment_controller.remove_investment);
  app
    .route("/investment/set/:investment_id")
    .put(investment_controller.set_investment);
  app.route('/video')
    .get(video_controller.get_video)
    .post(video_controller.add_video)
  app.route('/video/:video_id')
    .delete(video_controller.delete_video)
  app
    .route("/blog")
    .get(blog_controller.get_blog)
    .post(blog_controller.add_a_blog);
  app
    .route("/blog/:blog_id")
    .put(blog_controller.update_blog)
    .delete(blog_controller.delete_blog)
    .get(blog_controller.get_a_blog);
  app.route("/blog-search").get(blog_controller.search_blog);
  app.route("/blog-sort").get(blog_controller.soft_blog_by_date)
  app
    .route("/images")
    .get(image_controller.get_image)
    .post(image_controller.add_a_image);
  app.route("/images/:image_id").put(image_controller.update_image);
  app.route("/images/destroy/:image_id").post(image_controller.delete_image);
  app
    .route("/files")
    .get(file_controller.get_file)
    .post(file_controller.add_a_file);
  app
    .route("/files/:file_id")
    .put(file_controller.update_file)
    .delete(file_controller.delete_file);

  app
    .route("/project")
    .get(project_controller.get_project)
    .post(project_controller.add_project);
  app
    .route("/project/:project_id")
    .put(project_controller.update_project)
    .delete(project_controller.delete_project)
    .get(project_controller.get_a_project);

  app
    .route("/recruitment")
    .get(recruitment_controller.get_recruitment)
    .post(recruitment_controller.add_recruitment);
  app
    .route("/recruitment/:recruitment_id")
    .put(recruitment_controller.update_recruitment)
    .delete(recruitment_controller.delete_recruitment)
    .get(recruitment_controller.get_a_recruitment);
  app
    .route("/recruitment-search")
    .get(recruitment_controller.search_recruitment)

  app
    .route("/partner")
    .get(partner_controller.get_partner)
    .post(partner_controller.add_partner);
  app
    .route("/partner/:partner_id")
    .put(partner_controller.update_partner)
    .delete(partner_controller.delete_partner)
    .get(partner_controller.get_a_partner);
  app.route("/partner/search/:name").get(partner_controller.search_partner);

  app
    .route("/timeline")
    .get(timeline_controller.get_timeline)
    .post(timeline_controller.add_timeline);
  app
    .route("/timeline/:timeline_id")
    .put(timeline_controller.update_timeline)
    .delete(timeline_controller.delete_timeline);

  app
    .route("/person-recruitment")
    .get(person_recruitment_controller.get_person_recruitment)
    .post(person_recruitment_controller.add_person_recruitment);
  app
    .route("/person-recruitment/:person_recruitment_id")
    .delete(person_recruitment_controller.delete_person_recruitment);

  app
    .route("/person-contact")
    .get(person_contact_controller.get_person_contact)
    .post(person_contact_controller.add_person_contact);
  app
    .route("/person-contact/:person_contact_id")
    .delete(person_contact_controller.delete_person_contact);

  app
    .route("/hero")
    .get(hero_controller.get_hero)
    .post(hero_controller.add_hero);
  app
    .route("/hero/:hero_id")
    .put(hero_controller.update_hero)
    .delete(hero_controller.delete_hero);

  app
    .route("/hero/zoomx")
    .get(hero_zoomx_controller.get_hero)
    .post(hero_zoomx_controller.add_hero);
  app
    .route("/hero/zoomx/:hero_id")
    .put(hero_zoomx_controller.update_hero)
    .delete(hero_zoomx_controller.delete_hero);

  app
    .route("/hero/project")
    .get(hero_project_controller.get_hero)
    .post(hero_project_controller.add_hero);
  app
    .route("/hero/project/:hero_id")
    .put(hero_project_controller.update_hero)
    .delete(hero_project_controller.delete_hero);

  app
    .route("/hero/investment")
    .get(hero_investment_controller.get_hero)
    .post(hero_investment_controller.add_hero);
  app
    .route("/hero/investment/:hero_id")
    .put(hero_investment_controller.update_hero)
    .delete(hero_investment_controller.delete_hero);

  app
    .route("/hero/news")
    .get(hero_news_controller.get_hero)
    .post(hero_news_controller.add_hero);
  app
    .route("/hero/news/:hero_id")
    .put(hero_news_controller.update_hero)
    .delete(hero_news_controller.delete_hero);

  app
    .route("/hero/contact")
    .get(hero_contact_controller.get_hero)
    .post(hero_contact_controller.add_hero);
  app
    .route("/hero/contact/:hero_id")
    .put(hero_contact_controller.update_hero)
    .delete(hero_contact_controller.delete_hero);

  app
    .route("/hero/library")
    .get(hero_library_controller.get_hero)
    .post(hero_library_controller.add_hero);
  app
    .route("/hero/library/:hero_id")
    .put(hero_library_controller.update_hero)
    .delete(hero_library_controller.delete_hero);

  app
    .route("/hero/recruitment")
    .get(hero_recruitment_controller.get_hero)
    .post(hero_recruitment_controller.add_hero);
  app
    .route("/hero/recruitment/:hero_id")
    .put(hero_recruitment_controller.update_hero)
    .delete(hero_recruitment_controller.delete_hero);

  app
    .route("/categoryblog")
    .get(categoryblog_controller.get_all_blogs)
    .post(categoryblog_controller.add_blog);
  app
    .route("/categoryblog/:categoryblog_id")
    .put(categoryblog_controller.update_blog)
    .get(categoryblog_controller.get_a_category);
  app
    .route("/categoryblog/delete/:categoryblog_id")
    .get(categoryblog_controller.delete_blog);

  app
    .route("/library/lookup")
    .get(library_lookup_controller.get_library_lookup)
    .post(library_lookup_controller.add_library_lookup);
  app
    .route("/library/lookup/:library_lookup_id")
    .put(library_lookup_controller.update_library_lookup)
    .delete(library_lookup_controller.delete_library_lookup)
    .get(library_lookup_controller.get_a_library_lookup);

  app
    .route("/library/image")
    .get(library_image_controller.get_library_image)
    .post(library_image_controller.add_librare_image);
  app
    .route("/library/image/:library_image_id")
    .put(library_image_controller.update_library_image)
    .delete(library_image_controller.delete_library_image)
    .get(library_image_controller.get_a_library_image);

  app
    .route("/library/video")
    .get(library_video_controller.get_libraryvideo)
    .post(library_video_controller.add_libraryvideo);
  app
    .route("/library/video/:library_video_id")
    .put(library_video_controller.update_library_video)
    .delete(library_video_controller.delete_library_video)
    .get(library_video_controller.get_a_libraryvideo);

  app
    .route("/slogan")
    .get(slogan_controller.get_slogan)
    .post(slogan_controller.add_slogan);
  app
    .route("/slogan/:slogan_id")
    .put(slogan_controller.update_slogan)
    .delete(slogan_controller.delete_slogan);

  app
    .route("/youngbusiness")
    .get(youngbusiness_controller.get_young_business)
    .post(youngbusiness_controller.add_young_business);
  app
    .route("/youngbusiness/:youngbusiness_id")
    .put(youngbusiness_controller.update_youngbusiness)
    .delete(youngbusiness_controller.delete_young_business);

  app
    .route("/contact")
    .get(contact_page_controller.get_contact)
    .post(contact_page_controller.add_contact);
  app
    .route("/contact/:contact_page_id")
    .put(contact_page_controller.update_contact)
    .delete(contact_page_controller.delete_contact);

  app
    .route("/reason-select")
    .get(reason_select_controller.get_reason_select)
    .post(reason_select_controller.add_reason_select);
  app
    .route("/reason-select/:reason_select_id")
    .put(reason_select_controller.update_reason_select)
    .delete(reason_select_controller.delete_reason_select);

  app
    .route("/define-home")
    .get(define_home_controller.get_define_home)
    .post(define_home_controller.add_define_home);
  app
    .route("/define-home/:define_home_id")
    .put(define_home_controller.update_define_home)
    .delete(define_home_controller.delete_define_home);

  app
    .route("/zoomx")
    .get(zoomx_controller.get_zoomx)
    .post(zoomx_controller.add_zoomx);
  app
    .route("/zoomx/:zoomx_id")
    .put(zoomx_controller.update_zoomx)
    .delete(zoomx_controller.delete_zoomx);

  app
    .route("/setting")
    .get(setting_controller.get_setting)
    .post(setting_controller.add_setting);
  app
    .route("/setting/:setting_id")
    .put(setting_controller.update_setting)
    .delete(setting_controller.delete_setting);

  app
    .route("/icon")
    .get(icon_controller.get_icon)
    .post(icon_controller.add_icon);
  app
    .route("/icon/:icon_id")
    .put(icon_controller.update_icon)
    .delete(icon_controller.delete_icon);

  app
    .route("/person-mail")
    .get(person_mail_controller.get_mails)
    .post(person_mail_controller.add_mail);
  app.route("/person-mail/:mail_id").delete(person_mail_controller.delete_mail);

  app.route('/user')
    .get(user_controller.get_user)
    .post(user_controller.add_user)
  app.route("/login")
    .post(user_controller.login_user)
  app.route("/user/:user_id")
    .delete(user_controller.delete_user)
};

var express = require("express");
var router = express.Router();

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
  user_controller = require("../controller/UserController");

//get linh vuc dau tu hoat dong co phan trang
router
  .route("/investment")
  .get(investment_controller.get_investment)
  .post(investment_controller.add_investment);
router.route("/investment-all").get(investment_controller.get_all_investment);
router
  .route("/investment/update/:investment_id")
  .put(investment_controller.update_investment);
router
  .route("/investment/delete/:investment_id")
  .put(investment_controller.delete_investment);
router
  .route("/investment/:investment_id")
  .get(investment_controller.get_a_investment);
router
  .route("/investment/remove/:investment_id")
  .delete(investment_controller.remove_investment);
router
  .route("/investment/set/:investment_id")
  .put(investment_controller.set_investment);
router
  .route("/video")
  .get(video_controller.get_video)
  .post(video_controller.add_video);
router.route("/video/:video_id").delete(video_controller.delete_video);
router
  .route("/blog")
  .get(blog_controller.get_blog)
  .post(blog_controller.add_a_blog);
router
  .route("/blog/:blog_id")
  .put(blog_controller.update_blog)
  .delete(blog_controller.delete_blog)
  .get(blog_controller.get_a_blog);
router.route("/blog-search").get(blog_controller.search_blog);
router.route("/blog-sort").get(blog_controller.soft_blog_by_date);
router.route("/blog-search-all").get(blog_controller.search_all_blog);
router
  .route("/images")
  .get(image_controller.get_image)
  .post(image_controller.add_a_image);
router.route("/images/:image_id").put(image_controller.update_image);
router.route("/images/destroy/:image_id").post(image_controller.delete_image);
router
  .route("/files")
  .get(file_controller.get_file)
  .post(file_controller.add_a_file);
router
  .route("/files/:file_id")
  .put(file_controller.update_file)
  .delete(file_controller.delete_file);

router
  .route("/project")
  .get(project_controller.get_project)
  .post(project_controller.add_project);
router
  .route("/project/:project_id")
  .put(project_controller.update_project)
  .delete(project_controller.delete_project)
  .get(project_controller.get_a_project);

router
  .route("/recruitment")
  .get(recruitment_controller.get_recruitment)
  .post(recruitment_controller.add_recruitment);
router
  .route("/recruitment/:recruitment_id")
  .put(recruitment_controller.update_recruitment)
  .delete(recruitment_controller.delete_recruitment)
  .get(recruitment_controller.get_a_recruitment);
router
  .route("/recruitment-search")
  .get(recruitment_controller.search_recruitment);

router
  .route("/partner")
  .get(partner_controller.get_partner)
  .post(partner_controller.add_partner);
router
  .route("/partner/:partner_id")
  .put(partner_controller.update_partner)
  .delete(partner_controller.delete_partner)
  .get(partner_controller.get_a_partner);
router.route("/partner/search/:name").get(partner_controller.search_partner);

router
  .route("/timeline")
  .get(timeline_controller.get_timeline)
  .post(timeline_controller.add_timeline);
router
  .route("/timeline/:timeline_id")
  .put(timeline_controller.update_timeline)
  .delete(timeline_controller.delete_timeline);

router
  .route("/person-recruitment")
  .get(person_recruitment_controller.get_person_recruitment)
  .post(person_recruitment_controller.add_person_recruitment);
router
  .route("/person-recruitment/:person_recruitment_id")
  .delete(person_recruitment_controller.delete_person_recruitment);

router
  .route("/person-contact")
  .get(person_contact_controller.get_person_contact)
  .post(person_contact_controller.add_person_contact);
router
  .route("/person-contact/:person_contact_id")
  .delete(person_contact_controller.delete_person_contact);

router
  .route("/hero")
  .get(hero_controller.get_hero)
  .post(hero_controller.add_hero);
router
  .route("/hero/:hero_id")
  .put(hero_controller.update_hero)
  .delete(hero_controller.delete_hero);

router
  .route("/hero/zoomx")
  .get(hero_zoomx_controller.get_hero)
  .post(hero_zoomx_controller.add_hero);
router
  .route("/hero/zoomx/:hero_id")
  .put(hero_zoomx_controller.update_hero)
  .delete(hero_zoomx_controller.delete_hero);

router
  .route("/hero/project")
  .get(hero_project_controller.get_hero)
  .post(hero_project_controller.add_hero);
router
  .route("/hero/project/:hero_id")
  .put(hero_project_controller.update_hero)
  .delete(hero_project_controller.delete_hero);

router
  .route("/hero/investment")
  .get(hero_investment_controller.get_hero)
  .post(hero_investment_controller.add_hero);
router
  .route("/hero/investment/:hero_id")
  .put(hero_investment_controller.update_hero)
  .delete(hero_investment_controller.delete_hero);

router
  .route("/hero/news")
  .get(hero_news_controller.get_hero)
  .post(hero_news_controller.add_hero);
router
  .route("/hero/news/:hero_id")
  .put(hero_news_controller.update_hero)
  .delete(hero_news_controller.delete_hero);

router
  .route("/hero/contact")
  .get(hero_contact_controller.get_hero)
  .post(hero_contact_controller.add_hero);
router
  .route("/hero/contact/:hero_id")
  .put(hero_contact_controller.update_hero)
  .delete(hero_contact_controller.delete_hero);

router
  .route("/hero/library")
  .get(hero_library_controller.get_hero)
  .post(hero_library_controller.add_hero);
router
  .route("/hero/library/:hero_id")
  .put(hero_library_controller.update_hero)
  .delete(hero_library_controller.delete_hero);

router
  .route("/hero/recruitment")
  .get(hero_recruitment_controller.get_hero)
  .post(hero_recruitment_controller.add_hero);
router
  .route("/hero/recruitment/:hero_id")
  .put(hero_recruitment_controller.update_hero)
  .delete(hero_recruitment_controller.delete_hero);

router
  .route("/categoryblog")
  .get(categoryblog_controller.get_all_blogs)
  .post(categoryblog_controller.add_blog);
router
  .route("/categoryblog/:categoryblog_id")
  .put(categoryblog_controller.update_blog)
  .get(categoryblog_controller.get_a_category);
router
  .route("/categoryblog/delete/:categoryblog_id")
  .get(categoryblog_controller.delete_blog);

router
  .route("/library/lookup")
  .get(library_lookup_controller.get_library_lookup)
  .post(library_lookup_controller.add_library_lookup);
router
  .route("/library/lookup/:library_lookup_id")
  .put(library_lookup_controller.update_library_lookup)
  .delete(library_lookup_controller.delete_library_lookup)
  .get(library_lookup_controller.get_a_library_lookup);

router
  .route("/library/image")
  .get(library_image_controller.get_library_image)
  .post(library_image_controller.add_librare_image);
router
  .route("/library/image/:library_image_id")
  .put(library_image_controller.update_library_image)
  .delete(library_image_controller.delete_library_image)
  .get(library_image_controller.get_a_library_image);

router
  .route("/library/video")
  .get(library_video_controller.get_libraryvideo)
  .post(library_video_controller.add_libraryvideo);
router
  .route("/library/video/:library_video_id")
  .put(library_video_controller.update_library_video)
  .delete(library_video_controller.delete_library_video)
  .get(library_video_controller.get_a_libraryvideo);

router
  .route("/slogan")
  .get(slogan_controller.get_slogan)
  .post(slogan_controller.add_slogan);
router
  .route("/slogan/:slogan_id")
  .put(slogan_controller.update_slogan)
  .delete(slogan_controller.delete_slogan);

router
  .route("/youngbusiness")
  .get(youngbusiness_controller.get_young_business)
  .post(youngbusiness_controller.add_young_business);
router
  .route("/youngbusiness/:youngbusiness_id")
  .put(youngbusiness_controller.update_youngbusiness)
  .delete(youngbusiness_controller.delete_young_business);

router
  .route("/contact")
  .get(contact_page_controller.get_contact)
  .post(contact_page_controller.add_contact);
router
  .route("/contact/:contact_page_id")
  .put(contact_page_controller.update_contact)
  .delete(contact_page_controller.delete_contact);

router
  .route("/reason-select")
  .get(reason_select_controller.get_reason_select)
  .post(reason_select_controller.add_reason_select);
router
  .route("/reason-select/:reason_select_id")
  .put(reason_select_controller.update_reason_select)
  .delete(reason_select_controller.delete_reason_select);

router
  .route("/define-home")
  .get(define_home_controller.get_define_home)
  .post(define_home_controller.add_define_home);
router
  .route("/define-home/:define_home_id")
  .put(define_home_controller.update_define_home)
  .delete(define_home_controller.delete_define_home);

router
  .route("/zoomx")
  .get(zoomx_controller.get_zoomx)
  .post(zoomx_controller.add_zoomx);
router
  .route("/zoomx/:zoomx_id")
  .put(zoomx_controller.update_zoomx)
  .delete(zoomx_controller.delete_zoomx);

router
  .route("/setting")
  .get(setting_controller.get_setting)
  .post(setting_controller.add_setting);
router
  .route("/setting/:setting_id")
  .put(setting_controller.update_setting)
  .delete(setting_controller.delete_setting);

router
  .route("/icon")
  .get(icon_controller.get_icon)
  .post(icon_controller.add_icon);
router
  .route("/icon/:icon_id")
  .put(icon_controller.update_icon)
  .delete(icon_controller.delete_icon);

router
  .route("/person-mail")
  .get(person_mail_controller.get_mails)
  .post(person_mail_controller.add_mail);
router
  .route("/person-mail/:mail_id")
  .delete(person_mail_controller.delete_mail);

router
  .route("/user")
  .get(user_controller.get_user)
  .post(user_controller.add_user);
router.route("/login").post(user_controller.login_user);
router
  .route("/user/:user_id")
  .delete(user_controller.delete_user)
  .put(user_controller.update_user);
router
  .route("/user-role-set-admin/:user_id")
  .put(user_controller.set_role_admin_user);
router
  .route("/user-role-set-member/:user_id")
  .put(user_controller.set_role_member_user);
router
  .route("/user-role-set-user/:user_id")
  .put(user_controller.set_role_user_user);

module.exports = router;

import React from 'react';
import Blog from './blog/Blog';
import HeroBlog from './blog/hero/HeroBlog';
import CategoryBlog from './category-blog/CategoryBlog';
import Contact from './contact/Contact';
import HeroContact from './contact/hero/HeroContact';
import DefineHome from './home/define-home/DefineHome';
import Header from './home/header/Header';
import Hero from './home/hero/Hero';
import Icon from './home/icon/Icon';
import ReasonSelect from './home/reason-select/ReasonSelect';
import Timeline from './home/timeline/Timeline';
import HeroInvestment from './investment/hero/HeroInvestment';
import Investment from './investment/Investment';
import HeroLibrary from './library/hero/HeroLibrary';
import LibraryImage from './library/library-image/LibraryImage';
import LibraryLookup from './library/library-lookup/LibraryLookup';
import LibraryVideo from './library/library-video/LibraryVideo';
import UserContact from './list-user/user-contact/UserContact';
import UserMail from './list-user/user-mail/UserMail';
import UserRecruitment from './list-user/user-recruitment/UserRecruitment';
import HeroNews from './news/hero/HeroNews';
import HeroProject from './project/hero/HeroProject';
import Project from './project/Project';
import HeroRecruitment from './recruitment/hero/HeroRecruitment';
import Recruitment from './recruitment/Recruitment';
import HeroZoomX from './zoomx/hero/HeroZoomX';
import Partner from './zoomx/partner/Partner';
import Slogan from './zoomx/slogan/Slogan';
import YoungBusiness from './zoomx/young-business/YoungBusiness';
import ZoomX from './zoomx/zoom-x/ZoomX';
export default function Dashboard({ isPage }) {
    return (
        <div className="wrapper__admin">
            {isPage === "heroHome" && <Hero /> }
            {isPage === "defineHome" && <DefineHome />}
            {isPage === "reasonSelect" && <ReasonSelect />}
            {isPage === "timeLine" && <Timeline />}
            {isPage === "slogan" && <Slogan />}
            {isPage === "youngBusiness" && <YoungBusiness />}
            {isPage === "zoomx" && <ZoomX />}
            {isPage === "partner" && <Partner />}
            {isPage === "investment" && <Investment />}
            {isPage === "recruitment" && <Recruitment />}
            {isPage === "project" && <Project />}
            {isPage === "user-contact" && <UserContact />}
            {isPage === "user-mail" && <UserMail />}
            {isPage === "user-recruitment" && <UserRecruitment />}
            {isPage === "category-blog" && <CategoryBlog />}
            {isPage === "blog" && <Blog />}
            {isPage === "library-video" && <LibraryVideo />}
            {isPage === "library-image" && <LibraryImage />}
            {isPage === "library-lookup" && <LibraryLookup />}
            {isPage === "contact" && <Contact />}
            {isPage === "header" && <Header />}
            {isPage === "icon" && <Icon />}
            {isPage === "hero-zoomx" && <HeroZoomX />}
            {isPage === "hero-project" && <HeroProject />}
            {isPage === "hero-library" && <HeroLibrary />}
            {isPage === "hero-contact" && <HeroContact />}
            {isPage === "hero-investment" && <HeroInvestment />}
            {isPage === "hero-news" && <HeroNews />}
            {isPage === "hero-recruitment" && <HeroRecruitment />}







        </div>
    )
}
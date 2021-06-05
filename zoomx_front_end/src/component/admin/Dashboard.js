import React from 'react';
import CategoryBlog from './category-blog/CategoryBlog';
import Contact from './contact/Contact';
import DefineHome from './home/define-home/DefineHome';
import Hero from './home/hero/Hero';
import ReasonSelect from './home/reason-select/ReasonSelect';
import Timeline from './home/timeline/Timeline';
import Investment from './investment/Investment';
import Project from './project/Project';
import Recruitment from './recruitment/Recruitment';
import UserContact from './user-contact/UserContact';
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
            {isPage === "category-blog" && <CategoryBlog />}
            {/* {isPage === "blog" && <Blog />} */}

            {isPage === "contact" && <Contact />}
        </div>
    )
}
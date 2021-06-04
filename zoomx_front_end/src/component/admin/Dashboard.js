import React from 'react';
import Investment from './investment/Investment';
import Hero from './home/hero/Hero';
import Timeline from './home/timeline/Timeline';
import DefineHome from './home/define-home/DefineHome';
import ReasonSelect from './home/reason-select/ReasonSelect';
import Partner from './zoomx/partner/Partner';
import YoungBusiness from './zoomx/young-business/YoungBusiness';
import ZoomX from './zoomx/zoom-x/ZoomX';
import Slogan from './zoomx/slogan/Slogan';
import Recruitment from './recruitment/Recruitment';
import Project from './project/Project';
import Contact from './contact/Contact';
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
            {isPage === "contact" && <Contact />}
        </div>
    )
}
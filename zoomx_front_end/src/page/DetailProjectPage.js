import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import ProjectDetail from '../component/project-detail/ProjectDetail';
import './../style/project-detail.scss'

export default function DetailProjectPage(){
    return(
        <>
        <Header />
            <ProjectDetail />
        <Footer />
        </>
    )
}
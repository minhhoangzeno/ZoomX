import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
// import Paginator from '../component/library/Paginator';
import '../style/project.scss';
import '../style/library.scss';
import Project from '../component/project/Project';

export default function ProjectPage() {
    
    return (
        <>
            <MetaTags>
                <title>Dự án</title>
            </MetaTags>
            <Header />
            <HeroPage title="DỰ ÁN" title_sub="TRANG CHỦ / DỰ ÁN" />
            <Project />
            {/* <Paginator /> */}

            <Footer />
        </>
    )
}
import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
export default function ProjectPage(){
    return(
        <>
        <MetaTags>
                <title>Dự án</title>
            </MetaTags>
        <Header />
        <HeroPage title="DỰ ÁN" title_sub="TRANG CHỦ / DỰ ÁN" />
            Project Page
        <Footer />
        </>
    )
}
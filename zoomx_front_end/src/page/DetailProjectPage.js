import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import ProjectDetail from '../component/project-detail/ProjectDetail';
import './../style/project-detail.scss'
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';

export default function DetailProjectPage() {
    return (
        <>
            <MetaTags>
                <title>Dự án Khách sạn Hạ Long</title>
            </MetaTags>
            <Header />
            <HeroPage title="DỰ ÁN" title_sub="TRANG CHỦ / DỰ ÁN" />

            <ProjectDetail />
            <Footer />
        </>
    )
}
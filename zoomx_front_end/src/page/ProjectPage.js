import React, { useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
// import Paginator from '../component/library/Paginator';
import '../style/project.scss';
import '../style/library.scss';
import { useHeroProject } from '../lib/API';

export default function ProjectPage() {
    const { data } = useHeroProject()
    return (
        <>
            <MetaTags>
                <title>Dự án</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
            {/* <MenuProject />
            <ListProject /> */}
            {/* <Paginator /> */}

            <Footer />
        </>
    )
}
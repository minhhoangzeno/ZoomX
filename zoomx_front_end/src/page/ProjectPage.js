import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Project from '../component/project/Project';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import { useHeroProject } from '../lib/API';
import '../style/library.scss';
import '../style/project.scss';

export default function ProjectPage() {
    const { data } = useHeroProject()
    return (
        <>
            <MetaTags>
                <title>Dự án</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
            <Project />
        

            <Footer />
        </>
    )
}
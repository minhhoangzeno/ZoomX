import React, { useEffect } from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
// import Paginator from '../component/library/Paginator';
import '../style/project.scss';
import '../style/library.scss';
import { useHeroProject } from '../lib/API';
import Project from '../component/project/Project';
import BackToTop from 'react-back-to-top-button';
export default function ProjectPage() {
    const { data } = useHeroProject();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <MetaTags>
                <title>Dự án</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
            <Project />
        
            <BackToTop
                showOnScrollUp
                showAt={300}
                speed={1000}
                easing="easeInOutQuint"
                showOnScrollUp={true}
            >
                <div className="backToTop">
                    <svg viewBox="0 0 24 24" color="#FFF">
                        <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </BackToTop>
            <Footer />
        </>
    )
}
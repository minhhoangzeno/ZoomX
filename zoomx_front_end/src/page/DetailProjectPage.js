import React, { useEffect, useState } from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import ProjectDetail from '../component/project-detail/ProjectDetail';
import './../style/project-detail.scss'
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import { useLocation } from 'react-router';
import { doGet } from '../lib/DataSource';
import BackToTop from 'react-back-to-top-button';
export default function DetailProjectPage() {
    const location = useLocation();
    const projectId = location.state;
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSearch()
    }, [])
    const getSearch = async () => {
        let path = `/project/${projectId}`;
        setLoading(true)
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setProject(resp.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    return (
        <>
            <MetaTags>
                <title>Dự án {project?.projectName}</title>
            </MetaTags>
            <Header />
            <HeroPage title="DỰ ÁN" title_sub={project?.projectName}  imageBackground={project?.imageCover?.url} />

            <ProjectDetail project={project} />
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
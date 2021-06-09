import React, { useEffect, useState } from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import ProjectDetail from '../component/project-detail/ProjectDetail';
import './../style/project-detail.scss'
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import { useLocation } from 'react-router';
import { doGet } from '../lib/DataSource';

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
            <Footer />
        </>
    )
}
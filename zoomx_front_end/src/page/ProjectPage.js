import React, { useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import MenuProject from '../component/project/MenuProject';
import ListProject from '../component/project/ListProject';
import Paginator from '../component/library/Paginator';
import '../style/project.scss';
import '../style/library.scss';
import { addProject } from '../lib/api/ProjectAPI';

export default function ProjectPage() {
    const [project, setProject] = useState();
    const [fileUpload, setFileUpload] = useState();
    return (
        <>
            <MetaTags>
                <title>Dự án</title>
            </MetaTags>
            <Header />
            <HeroPage title="DỰ ÁN" title_sub="TRANG CHỦ / DỰ ÁN" />
            <div>
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            projectName: e.target.value
                        })
                    }}
                    placeholder="projectName" />
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            address: e.target.value
                        })
                    }}
                    placeholder="address" />
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            acreage: e.target.value
                        })
                    }}
                    placeholder="acreage" />
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            totalInvestment: e.target.value
                        })
                    }}
                    placeholder="totalInvestment" />
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            categoryInvestment: e.target.value
                        })
                    }}
                    placeholder="categoryInvestment" />
                <input type="text"
                    onChange={(e) => {
                        setProject({
                            ...project,
                            description: e.target.value
                        })
                    }}
                    placeholder="description" />

            </div>

            <div>

                <input type="file" onChange={(e) => {
                    setFileUpload({
                        ...fileUpload,
                        fileProject: e.target.files
                    })
                }} multiple="multiple" />
                <input type="file" onChange={(e) => {
                    setFileUpload({
                        ...fileUpload,
                        fileCover: e.target.files[0]
                    })
                }} />
                <input type="file" onChange={(e) => {
                    setFileUpload({
                        ...fileUpload,
                        fileHero: e.target.files[0]
                    })
                }} />
                <input type="file" onChange={(e) => {
                    setFileUpload({
                        ...fileUpload,
                        fileInfor: e.target.files[0]
                    })
                }} />
            </div>
            <button onClick={() => addProject(project,fileUpload)}>Add</button>
            <MenuProject />
            <ListProject />
            <Paginator />

            <Footer />
        </>
    )
}
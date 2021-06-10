import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import Recruitment from '../component/recruitment/Recruitment';
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import { useHeroRecruitment } from '../lib/API';

export default function RecruitmentPage(){
    const { data } = useHeroRecruitment()
    return(
        <>
        <MetaTags>
                <title>Tuyển dụng</title>
            </MetaTags>
        <Header />
        <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />

        <Recruitment />
        <Footer />
        </>
    )
}
import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Recruitment from '../component/recruitment/Recruitment';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import { useHeroRecruitment } from '../lib/API';
import BackToTop from "../image/BacktoTop";
export default function RecruitmentPage() {
    const { data } = useHeroRecruitment()

    return (
        <>
            <MetaTags>
                <title>Tuyển dụng</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />

            <Recruitment />
            <BackToTop />
            <Footer />
        </>
    )
}
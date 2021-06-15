import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import DetailRecruitment from '../component/detail-recruitment/DetailRecruitment'
import { MetaTags } from 'react-meta-tags';
import { useHeroRecruitment } from '../lib/API';
import { useLocation } from 'react-router';
import BackToTop from "../image/BacktoTop";
export default function DetailRecruitmentPage() {
    const { data } = useHeroRecruitment();
    const location = useLocation();
    const dataRecruitment = location.state;
    console.log(dataRecruitment)
    return (
        <>
            <MetaTags>
                <title>Tuyển dụng</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
            <DetailRecruitment data={dataRecruitment} />
            <BackToTop />
            <Footer />
        </>
    )
}
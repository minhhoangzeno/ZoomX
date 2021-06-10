import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import DetailRecruitment from '../component/detail-recruitment/DetailRecruitment'
import { MetaTags } from 'react-meta-tags';
import { useHeroRecruitment } from '../lib/API';

export default function DetailRecruitmentPage() {
    const { dataHero } = useHeroRecruitment()
    return (
        <>
            <MetaTags>
                <title>Tuyển dụng</title>
            </MetaTags>
                <Header />
                <HeroPage title={dataHero?.[0]?.title} title_sub={dataHero?.[0]?.label} imageBackground={dataHero?.[0]?.imageCover?.url} />
                <DetailRecruitment />

                <Footer />
        </>
    )
}
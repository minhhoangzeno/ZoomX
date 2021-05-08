import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import DetailRecruitment from '../component/detail-recruitment/DetailRecruitment'
import { MetaTags } from 'react-meta-tags';
export default function DetailRecruitmentPage() {
    return (
        <>
            <MetaTags>
                <title>Tuyển dụng</title>
            </MetaTags>
                <Header />
                <HeroPage title="TUYỂN DỤNG" title_sub="TRANG CHỦ / TUYỂN DỤNG" />
                <DetailRecruitment />

                <Footer />
        </>
    )
}
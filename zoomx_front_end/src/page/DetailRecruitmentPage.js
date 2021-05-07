import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import DetailRecruitment from '../component/detail-recruitment/DetailRecruitment'
export default function DetailRecruitmentPage(){
    return(
        <>
        <Header />
        <HeroPage title="TUYỂN DỤNG" title_sub="TRANG CHỦ / TUYỂN DỤNG" />
        <DetailRecruitment />

        <Footer />
        </>
    )
}
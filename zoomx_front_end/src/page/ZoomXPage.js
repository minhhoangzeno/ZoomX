import React from 'react';
import { MetaTags } from 'react-meta-tags';
import IntroduceComponent from '../component/introduce/IntroduceComponent';
import PartnerComponent from '../component/introduce/PartnerComponent';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import '../style/introduce.scss'
export default function ZoomXPage(){
    return(
        <>
        <MetaTags>
                <title>Giới thiệu</title>
            </MetaTags>
        <Header />
        <HeroPage title="VỀ ZOOMX HOTELS" title_sub="TRANG CHỦ / GIỚI THIỆU" />
        <IntroduceComponent />
        <PartnerComponent />
        <Footer />
        </>
    )
}
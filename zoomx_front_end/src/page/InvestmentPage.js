import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
export default function InvestmentPage(){
    return(
        <>
        <MetaTags>
                <title>Lĩnh vực đầu tư</title>
            </MetaTags>
        <Header />
        <HeroPage title="LĨNH VỰC ĐẦU TƯ" title_sub="TRANG CHỦ / LĨNH VỰC ĐẦU TƯ" />

            Lĩnh vực đầu tư
        <Footer />
        </>
    )
}
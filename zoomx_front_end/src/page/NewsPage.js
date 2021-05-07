import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
export default function NewsPage(){
    return(
        <>
        <MetaTags>
                <title>Tin Tức</title>
            </MetaTags>
        <Header />
        <HeroPage title="TIN TỨC - SỰ KIỆN" title_sub="TRANG CHỦ / TIN TỨC - SỰ KIỆN" />

            Tin tức, sự kiện
        <Footer />
        </>
    )
}
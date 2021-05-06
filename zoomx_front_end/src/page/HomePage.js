import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import MetaTags from 'react-meta-tags';
import TimeLine from '../component/home/TimeLine';
import '../style/home.scss'
import HeroHeader from '../component/share/HeroHeader';
export default function HomePage(){
    return(
        <div>
            <MetaTags>
                <title>Trang chủ</title>
                <meta name="description" content="Zoom X" />
            </MetaTags>
            <Header />
            <HeroHeader />
            <div style={{width:'100%',height:500}}>
            Home Page
            </div>
            <TimeLine />
            <Footer />
        </div>
    )
}
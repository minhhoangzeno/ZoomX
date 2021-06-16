import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import { useHeroInvestment } from '../lib/API';
import '../style/investment.scss';
import Investment from './../component/investment/Investment';
import BackToTop from 'react-back-to-top-button';

export default function InvestmentPage() {
    const { data } = useHeroInvestment()
    console.log(data)
    return (
        <>
            <MetaTags>
                <title>Lĩnh vực đầu tư</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
            {/* <SubItem /> */}
            <Investment />
            <BackToTop
                showOnScrollUp
                showAt={300}
                speed={1000}
                easing="easeInOutQuint"
                showOnScrollUp={true}
            >
                <div className="backToTop">
                    <svg viewBox="0 0 24 24" color="#FFF">
                        <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </BackToTop>
            <Footer />
        </>
    )
}

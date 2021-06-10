import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import { useHeroInvestment } from '../lib/API';
import '../style/investment.scss';
import Investment from './../component/investment/Investment';


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

            <Investment />

            <Footer />
        </>
    )
}

import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import Investment from './../component/investment/Investment';
import '../style/investment.scss'
import { useInvestment } from '../lib/api/InvestmentAPI';

export default function InvestmentPage() {
    const { data } = useInvestment();
    console.log(data)
    return (
        <>
            <MetaTags>
                <title>Lĩnh vực đầu tư</title>
            </MetaTags>
            <Header />
            <HeroPage title="LĨNH VỰC ĐẦU TƯ" title_sub="TRANG CHỦ / LĨNH VỰC ĐẦU TƯ" />

            <Investment data={data} />

            <Footer />
        </>
    )
}

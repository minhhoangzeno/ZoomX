import React from 'react';
import IntroduceComponent from '../component/introduce/IntroduceComponent';
import PartnerComponent from '../component/introduce/PartnerComponent';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import '../style/introduce.scss'
export default function ZoomXPage(){
    return(
        <>
        <Header />
        <IntroduceComponent />
        <PartnerComponent />
        <Footer />
        </>
    )
}
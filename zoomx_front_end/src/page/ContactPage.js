import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Contact from '../component/contact/Contact'
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import '../style/contact.scss'
import { useHeroContact } from '../lib/API';
import BackToTop from "../image/BacktoTop";
export default function ContactPage(){
    const { data } = useHeroContact()
    return(
        <>
        <MetaTags>
                <title>Liên hệ</title>
            </MetaTags>
        <Header />
        <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
        <Contact />
        <BackToTop />
        <Footer />
        </>
    )
}
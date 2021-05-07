import React from 'react';
import { MetaTags } from 'react-meta-tags';
import LeftContact from '../component/contact/LeftContact';
import RightContact from '../component/contact/RightContact';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import '../style/contact.scss'
export default function ContactPage(){
    return(
        <>
        <MetaTags>
                <title>Liên hệ</title>
            </MetaTags>
        <Header />
        <HeroPage title="LIÊN HỆ" title_sub="TRANG CHỦ / LIÊN HỆ" />

            <LeftContact>
            </LeftContact>
            <RightContact />
        <Footer />
        </>
    )
}
import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import Contact from '../component/contact/Contact'
import { useContact } from '../lib/api/ContactAPI';
import '../style/contact.scss'

export default function ContactPage(){
    const {data} = useContact();
    console.log(data)
    return(
        <>
            <MetaTags>
                <title>Liên hệ</title>
            </MetaTags>
        <Header />
        <HeroPage title="LIÊN HỆ" title_sub="TRANG CHỦ / LIÊN HỆ" />
        <Contact data={data} />
            
        <Footer />
        </>
    )
}
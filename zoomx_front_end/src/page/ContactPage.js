import React, { useEffect } from 'react';
import { MetaTags } from 'react-meta-tags';
import Contact from '../component/contact/Contact'
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import '../style/contact.scss'
import { useHeroContact } from '../lib/API';
import BackToTop from 'react-back-to-top-button';
export default function ContactPage(){
    const { data } = useHeroContact();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
        <MetaTags>
                <title>Liên hệ</title>
            </MetaTags>
        <Header />
        <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
        <Contact />
        <BackToTop
                showOnScrollUp
                showAt={300}
                speed={1000}
                 easing={"easeInOutQuint"}
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
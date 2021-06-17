import React, { useEffect, useState } from 'react';
import MenuLibrary from '../component/library/MenuLibrary';
import Header from '../component/share/Header';
import Footer from '../component/share/Footer';
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import MainLibrary from '../component/library/MainLibrary';
import { useHeroLibrary } from '../lib/API';
import BackToTop from 'react-back-to-top-button';
export default function LibraryPage() {
    const [isPage, setIsPage] = useState('lookup');
    const handlePage = (page) => {
        setIsPage(page)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const { data } = useHeroLibrary()
    return (
        <>
            <MetaTags>
                <title>Thư viện</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />

            <MenuLibrary isPage={isPage} handlePage={handlePage} />
            <MainLibrary isPage={isPage} />
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
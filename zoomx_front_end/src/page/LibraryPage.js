import React, { useState } from 'react';
import MenuLibrary from '../component/library/MenuLibrary';
import Header from '../component/share/Header';
import Footer from '../component/share/Footer';
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import MainLibrary from '../component/library/MainLibrary';
import { useHeroLibrary } from '../lib/API';
import BackToTop from "../image/BacktoTop";
export default function LibraryPage() {
    const [isPage, setIsPage] = useState('lookup');
    const handlePage = (page) => {
        setIsPage(page)
    }
    const { data } = useHeroLibrary()
    return (
        <>
            <MetaTags>
                <title>Thư viện</title>
            </MetaTags>
            <Header />
            <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />

            <MenuLibrary isPage={isPage} handlePage={handlePage} />
            <MainLibrary  isPage={isPage}  />
            {/* <Paginator /> */}
            <BackToTop />
            <Footer />
        </>
    )
}
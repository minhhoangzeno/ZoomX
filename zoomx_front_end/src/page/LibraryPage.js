import React, { useState } from 'react';
import '../style/library.scss';
import MenuLibrary from '../component/library/MenuLibrary';
import Header from '../component/share/Header';
import Footer from '../component/share/Footer';
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';
import MainLibrary from '../component/library/MainLibrary';
export default function LibraryPage() {
    const [isPage, setIsPage] = useState('lookup');
    const handlePage = (page) => {
        setIsPage(page)
    }
    return (
        <>
            <MetaTags>
                <title>Thư viện</title>
            </MetaTags>
            <Header />
            <HeroPage title="THƯ VIỆN" title_sub="TRANG CHỦ / THƯ VIỆN" />

            <MenuLibrary isPage={isPage} handlePage={handlePage} />
            <MainLibrary  isPage={isPage}  />
            {/* <Paginator /> */}
            <Footer />
        </>
    )
}
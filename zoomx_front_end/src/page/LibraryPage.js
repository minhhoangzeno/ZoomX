import React from 'react';
import '../style/library.scss';
import MenuLibrary from '../component/library/MenuLibrary';
import ListLibrary from '../component/library/ListLibrary';
// import Paginator from '../component/library/Paginator';
import Header from '../component/share/Header';
import Footer from '../component/share/Footer';
import { MetaTags } from 'react-meta-tags';
import HeroPage from '../component/share/HeroPage';


export default function LibraryPage() {
    return (
        <>
            <MetaTags>
                <title>Thư viện</title>
            </MetaTags>
            <Header />
            <HeroPage title="THƯ VIỆN" title_sub="TRANG CHỦ / THƯ VIỆN" />

            <MenuLibrary />
            <ListLibrary />
            {/* <Paginator /> */}
            <Footer />
        </>
    )
}
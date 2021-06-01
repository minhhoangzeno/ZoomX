import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import BlogDetail from '../component/blog-detail/BlogDetail';
import '../style/blog-detail.scss';
import Category from '../component/news-page/Category';
import ItemNews from '../component/news-page/ItemNews';
import HeroPage from '../component/share/HeroPage';


export default function BlogDetailPage() {
    return (
        <>
            <Header />
            <HeroPage
                title="TIN TỨC - SỰ KIỆN"
                title_sub="TRANG CHỦ / TIN TỨC - SỰ KIỆN"
            />
            <div className="container-fluid blog-detail__page">
                <div className="row blog-detail__row">
                    <div className="col-xl-8 col-6 col-12 main__news__page main-blog">
                        <BlogDetail />
                    </div>
                    <div className="col-xl-4 main__news--cover">
                        <Category />
                    </div>
                    <div className="col-xl-8 col-6 col-12 main__news__page related-blog">
                        <ItemNews />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
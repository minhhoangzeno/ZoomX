import React, { useEffect, useState } from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import BlogDetail from '../component/blog-detail/BlogDetail';
import '../style/blog-detail.scss';
import Category from '../component/news-page/Category';
import ItemNews from '../component/news-page/ItemNews';
import HeroPage from '../component/share/HeroPage';
import { useLocation } from 'react-router';
import { doGet } from '../lib/DataSource';

export default function BlogDetailPage() {
    const location = useLocation();
    const data = location.state;
    const [blog, setBlog] = useState();
    useEffect(() => {
        async function fetchData() {
            let path = `/blog?page=1&categoryId=${data?.categoryId}`;
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setBlog(resp.data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [data?.categoryId])
    return (
        <>
            <Header />
            <HeroPage
                title="TIN TỨC - SỰ KIỆN"
                title_sub={data?.title}
                imageBackground={data?.imageCover?.url}
            />
            <div className="container-fluid blog-detail__page">
                <div className="row blog-detail__row">
                    <div className="col-xl-8 col-6 col-12 main__news__page main-blog">
                        <BlogDetail data={data} />
                    </div>
                    <div className="col-xl-4 main__news--cover">
                        <Category />
                    </div>
                    <div className="col-xl-8 col-6 col-12 main__news__page related-blog">
                        <div className="container main__item__detail">
                            <div className="row list__inner">
                                {blog?.length > 2 ? <>
                                    <ItemNews data={blog[0]} />
                                    <ItemNews data={blog[1]} />
                                </> : blog?.map((item, idex) => {
                                    return (
                                        <ItemNews data={item} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
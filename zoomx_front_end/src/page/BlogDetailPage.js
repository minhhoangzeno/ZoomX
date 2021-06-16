import React, { useEffect, useState } from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import BlogDetail from '../component/blog-detail/BlogDetail';
import '../style/blog-detail.scss';
import Category from '../component/blog-detail/Category';
import ItemNews from '../component/news-page/ItemNews';
import HeroPage from '../component/share/HeroPage';
import { useLocation } from 'react-router';
import { doGet } from '../lib/DataSource';
import { MetaTags } from 'react-meta-tags';
import BlogOption from '../component/blog-detail/BlogOption';
import BackToTop from "../image/BacktoTop";
export default function BlogDetailPage() {
    const location = useLocation();
    const data = location.state;
    const [blog, setBlog] = useState();
    const [textSearch, setTextSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [categoryId, setCategory] = useState(data?.categoryId);
    const [loading, setLoading] = useState(false)

    const handleChangeCategory = (id) => {
        setCategory(id)
    }
    useEffect(() => {
        getSearch()
    }, [])
    useEffect(() => {
        getSearch()
    }, [categoryId, isSearch])

    const getSearch = async () => {
        if (isSearch) {
            setLoading(true);
            let path = `/blog-search?page=1&categoryId=${categoryId}&q=${textSearch}`;
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setBlog(resp.data)
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        } else {
            setLoading(true)
            let path = `/blog?page=1&categoryId=${categoryId}`;
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setBlog(resp.data)
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        }
    }
    const handleSearch = (search) => {
        setIsSearch(search)
    }
    const handleTextSearch = (text) => {
        setTextSearch(text)
    }
    console.log(blog)
    return (
        <>
            <MetaTags>
                <title>{data?.title}</title>
            </MetaTags>
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
                        <Category handleChangeCategory={handleChangeCategory}
                            textSearch={textSearch} handleTextSearch={handleTextSearch} handleSearch={handleSearch}
                        />
                    </div>
                    <BlogOption blog={blog} isSearch={isSearch} textSearch={textSearch} loading={loading} categoryId={categoryId}
                        isSearch={isSearch}
                        handleSearch={handleSearch}
                        handleTextSearch={handleTextSearch}
                    />
                </div>
            </div>
            <BackToTop />
            <Footer />
        </>
    )
}
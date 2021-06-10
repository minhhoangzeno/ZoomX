import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import Category from "../component/news-page/Category";
import ItemNews from "../component/news-page/ItemNews";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HeroPage from "../component/share/HeroPage";
import { doGet } from "../lib/DataSource";
import "../style/news-page.scss";
import Pagination from "react-js-pagination";
import Loading from "../component/image/Loading";

export default function NewsPage() {
  const [data, setData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [categoryId, setCategory] = useState(1);
  const [textSearch, setTextSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const handleTextSearch = (text) => {
    setTextSearch(text)
  }
  const [loading, setLoading] = useState(false)
  const handleChangeCategory = (id) => {
    setCategory(id)
    setActivePage(1)
  }
  const handleLoading = (isLoading) => {
    setLoading(isLoading)
  }
  useEffect(() => {
    getSearch()
  }, [])
  useEffect(() => {
    getSearch()
  }, [activePage, categoryId])
  const getSearch = async () => {
    if (!isSearch) {
      setLoading(true);
      let path = `/blog-search?page=${activePage}&categoryId=${categoryId}&q=${textSearch}`;
      try {
        let resp = await doGet(path);
        if (resp.status === 200) {
          setData(resp.data)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    } else {
      setLoading(true)
      let path = `/blog?page=${activePage}&categoryId=${categoryId}`;
      try {
        let resp = await doGet(path);
        if (resp.status === 200) {
          setData(resp.data)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    }
  }
  const handleActivePage = (item) => {
    setActivePage(item)
  }
  const handleSearch = () => {
    setIsSearch(true)
    getSearch()
  }
  return (
    <>
      <MetaTags>
        <title>Tin Tức</title>
      </MetaTags>
      <Header />
      <HeroPage
        title="TIN TỨC - SỰ KIỆN"
        title_sub="TRANG CHỦ / TIN TỨC - SỰ KIỆN"
      />
      <main className="main__container">
        <div className="container-fluid main__home">
          <div className="row item__home">
            <div className="col-xl-8 col-6 col-12 main__news__page" style={{ paddingLeft: 0 }}>
              <div className="container main__item__detail">
                <div className="row list__inner">
                  {!loading ?
                    data?.data?.map((item, index) => {
                      return (
                        <ItemNews data={item} key={index} />
                      )
                    }) :
                    <Loading />
                  }
                </div>
              </div>
            </div>
            <div className="col-xl-4 main__news--cover">
              <Category handleChangeCategory={handleChangeCategory} />
            </div>
          </div>
        </div>
      </main>
      <div className="wrapper-paginate">

        <Pagination
          activePage={activePage}
          itemsCountPerPage={8}
          totalItemsCount={parseInt(data?.totalPage)}
          pageRangeDisplayed={3}
          onChange={(item) => handleActivePage(item)}
        />
      </div>
      <Footer />
    </>
  );
}

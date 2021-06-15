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
import { useHeroNews } from "../lib/API";
import BackToTop from "../image/BacktoTop";
export default function NewsPage() {
  const [data, setData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [categoryId, setCategory] = useState(1);
  const [textSearch, setTextSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { hero } = useHeroNews();
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
  }, [activePage, categoryId, isSearch])
  const getSearch = async () => {
    if (isSearch) {
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
  }
  return (
    <>
      <MetaTags>
        <title>Tin Tức</title>
      </MetaTags>
      <Header />
      <HeroPage
         title={hero?.[0]?.title} title_sub={hero?.[0]?.label} imageBackground={hero?.[0]?.imageCover?.url}
      />
      <main className="main__container">

        <div className="container-fluid main__home">
          {isSearch && <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>
              {data?.totalPage}  Kết quả hiện thị cho tìm kiếm &nbsp; <strong>{textSearch}</strong> &nbsp;
                            <div onClick={() => setIsSearch(false)}>
                <svg style={{ width: 35, height: 35, cursor: 'pointer' }} color="#65676b" viewBox="0 0 24 24"
                  onClick={async () => {
                    await handleTextSearch("");
                    setIsSearch(false);

                  }}
                >
                  <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                </svg>
              </div>


            </div>

          </>}
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
              <Category handleChangeCategory={handleChangeCategory}
                textSearch={textSearch} handleTextSearch={handleTextSearch} handleSearch={handleSearch}
              />
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
      <BackToTop />
      <Footer />
    </>
  );
}

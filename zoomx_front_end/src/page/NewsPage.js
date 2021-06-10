import React from "react";
import { MetaTags } from "react-meta-tags";
import Category from "../component/news-page/Category";
import ItemNews from "../component/news-page/ItemNews";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HeroPage from "../component/share/HeroPage";
import "../style/news-page.scss";
import { useHeroNews } from '../lib/API';

export default function NewsPage() {
  const { data } = useHeroNews()
  return (
    <>
      <MetaTags>
        <title>Tin Tức</title>
      </MetaTags>
      <Header />
      <HeroPage title={data?.[0]?.title} title_sub={data?.[0]?.label} imageBackground={data?.[0]?.imageCover?.url} />
      <main className="main__container">
        <div className="container-fluid main__home">
          <div className="row item__home">
            <div className="col-xl-8 col-6 col-12 main__news__page" style={{paddingLeft:0}}>
              <ItemNews />
            </div>
            <div className="col-xl-4 main__news--cover">
              <Category />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

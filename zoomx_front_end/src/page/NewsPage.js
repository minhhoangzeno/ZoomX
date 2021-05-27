import React from "react";
import { MetaTags } from "react-meta-tags";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HeroPage from "../component/share/HeroPage";
import "../style/news-page.scss";
import ItemNews from "../component/news-page/ItemNews";
import Category from "../component/news-page/Category";
export default function NewsPage() {
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
            <div className="col-xl-8 col-6 col-12 main__news__page">
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

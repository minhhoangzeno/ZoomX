import React from "react";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import MetaTags from "react-meta-tags";
import HomePageComponent from "../component/home/HomePageComponent";
import ItemHome from "../component/home/ItemHome";
import TimeLine from "../component/home/TimeLine";
import FieldComponent from "../component//home/FieldComponent";
import Founder from "../component/home/Founder";
import "../style/home.scss";
import HeroHeader from "../component/share/HeroHeader";
import EnjoyVideo from "../component/home/EnjoyVideo";
import News from "../component/home/News";
import BackToTop from "../image/BacktoTop";
export default function HomePage() {
  return (
    <div>
      <MetaTags>
        <title>Trang chủ</title>
        <meta name="description" content="Zoom X" />
      </MetaTags>
      <Header />
      <HeroHeader />
      <HomePageComponent />
      <ItemHome />
      <TimeLine />
      <FieldComponent />
      <Founder />
      <EnjoyVideo />
      <News />
      <BackToTop />
      <Footer />

    </div>

  );
}

import React, { useEffect } from "react";
import BackToTop from 'react-back-to-top-button';
import MetaTags from "react-meta-tags";
import FieldComponent from "../component//home/FieldComponent";
import EnjoyVideo from "../component/home/EnjoyVideo";
import Founder from "../component/home/Founder";
import HomePageComponent from "../component/home/HomePageComponent";
import ItemHome from "../component/home/ItemHome";
import News from "../component/home/News";
import TimeLine from "../component/home/TimeLine";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HeroHeader from "../component/share/HeroHeader";
import "../style/home.scss";
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <BackToTop
        showOnScrollUp
        showAt={300}
        speed={1000}
        easing="easeInOutQuint"
        showOnScrollUp={true}
      >
        <div className="backToTop">
          <svg viewBox="0 0 24 24" color="#FFF">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </div>
      </BackToTop>
      <Footer />

    </div>

  );
}


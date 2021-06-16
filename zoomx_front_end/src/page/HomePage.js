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
import BackToTop from 'react-back-to-top-button';
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

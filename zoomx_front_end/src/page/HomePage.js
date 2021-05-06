import React from "react";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import MetaTags from "react-meta-tags";
import HomePageComponent from "../component/home/HomePageComponent";
import ItemHome from "../component/home/ItemHome";
import TimeLine from "../component/home/TimeLine";
import FieldComponent from "../component//home/FieldComponent";
import "../style/home.scss";
import HeroHeader from "../component/share/HeroHeader";
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
      <Footer />
    </div>
  );
}

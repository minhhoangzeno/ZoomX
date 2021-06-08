import React from "react";
import { MetaTags } from "react-meta-tags";
import Founder from "../component/home/Founder";
import IntroduceComponent from "../component/introduce/IntroduceComponent";
import PartnerComponent from "../component/introduce/PartnerComponent";
import YoungBusiness from "../component/introduce/YoungBusiness";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HeroPage from "../component/share/HeroPage";
import { useHeroZoomx } from "../lib/API";
import "../style/introduce.scss";
export default function ZoomXPage() {
  const { data } = useHeroZoomx();
  return (
    <>
      <MetaTags>
        <title>Giới thiệu</title>
      </MetaTags>
      <Header />
      <HeroPage
        title={data?.[0]?.title}
        title_sub={data?.[0]?.label}
        imageBackground={data?.[0]?.imageCover?.url}
      />
      <Founder />
      <IntroduceComponent />
      <YoungBusiness />
      <PartnerComponent />
      <Footer />
    </>
  );
}

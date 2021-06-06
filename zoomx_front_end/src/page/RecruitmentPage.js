import React from "react";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import Recruitment from "../component/recruitment/Recruitment";
import { MetaTags } from "react-meta-tags";
import HeroPage from "../component/share/HeroPage";

export default function RecruitmentPage() {
  return (
    <>
      <MetaTags>
        <title>Tuyển dụng</title>
      </MetaTags>
      <Header />
      <HeroPage title="TUYỂN DỤNG" title_sub="TRANG CHỦ / TUYỂN DỤNG" />

      <Recruitment />
      <Footer />
    </>
  );
}

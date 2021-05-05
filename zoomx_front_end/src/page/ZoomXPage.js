import React from "react";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import IntroduceComponent from "../component/Introduce/IntroduceComponent";
import PartnerComponent from "../component/Introduce/PartnerComponent";
import "../style/Introduce.scss";

export default function ZoomXPage() {
  return (
    <>
      <Header />
      <IntroduceComponent />
      <PartnerComponent />
      <Footer />
    </>
  );
}

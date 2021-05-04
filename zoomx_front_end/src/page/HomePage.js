import React from "react";
import IntroduceComponent from "../component/Introduce/IntroduceComponent";
import PartnerComponent from "../component/Introduce/PartnerComponent";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import "../style/Introduce.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <IntroduceComponent />
      <PartnerComponent />
      <Footer />
    </div>
  );
}

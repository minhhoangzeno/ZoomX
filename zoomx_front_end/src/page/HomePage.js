import React from "react";
import Introduce from "../component/home/Introduce";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import "../style/Introduce.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Introduce />
      <Footer />
    </div>
  );
}

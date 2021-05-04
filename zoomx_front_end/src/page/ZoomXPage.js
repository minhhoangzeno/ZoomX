import React from "react";
import Footer from "../component/share/Footer";
import Header from "../component/share/Header";
import HotelComponent from "../component/HomePage/HotelComponent";
import ItemHotelComponent from "../component/HomePage/ItemHotelComponent";
import RouteComponent from "../component/HomePage/RouteComponent";
import FieldComponent from "../component/HomePage/FieldComponent";
import FounderComponent from "../component/HomePage/FounderComponent";
import RelaxComponent from "../component/HomePage/RelaxComponent";
import NewsComponent from "../component/HomePage/NewsComponent";
import "../style/HomePage.scss";
export default function ZoomXPage() {
  return (
    <>
      <Header />
      <HotelComponent />
      <ItemHotelComponent />
      <RouteComponent />
      <FieldComponent />
      <FounderComponent />
      <RelaxComponent />
      <NewsComponent />
      <Footer />
    </>
  );
}

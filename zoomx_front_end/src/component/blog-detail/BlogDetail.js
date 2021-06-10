import React, { useEffect, useState } from "react";
import "../../style/blog-detail.scss";
import Img from "../../image/investment/img.png";
import { doGet } from "../../lib/DataSource";

export default function BlogDetail({ data }) {
 
  return (
    <>
      <div className="blog-detail__wrapper" dangerouslySetInnerHTML={{ __html: data?.content }}>
      </div>
    </>
  );
}

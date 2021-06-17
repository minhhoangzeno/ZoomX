import React from "react";
import "../../style/blog-detail.scss";

export default function BlogDetail({ data }) {
  return (
    <>
      <div
        className="blog-detail__wrapper"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
    </>
  );
}

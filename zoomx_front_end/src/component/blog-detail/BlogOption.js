import React, { useEffect, useState } from "react";
import Item from "./Item";
import Loading from "../image/Loading";
import { doGet } from "../../lib/DataSource";
import Slider from "react-slick";
export default function BlogOption({
  blog,
  loading,
  textSearch,
  categoryId,
  isSearch,
  handleSearch,
  handleTextSearch,
}) {
  const settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const [name, setName] = useState();
  useEffect(() => {
    async function fetchData() {
      if (categoryId === 1) {
        setName("Tất cả");
      } else {
        let path = `/categoryBlog/${categoryId}`;
        try {
          let resp = await doGet(path);
          if (resp.status === 200) {
            setName(resp.data.name);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [categoryId]);
  return (
    <>
      <div className="col-xl-8 col-6 col-12 main__news__page related-blog">
        <div className="container main__item__detail">
          {!loading ? (
            <>
              <h1>
                {isSearch ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 18,
                      }}
                    >
                      {blog?.totalPage} Kết quả hiện thị cho tìm kiếm &nbsp;{" "}
                      <strong>{textSearch}</strong> &nbsp;
                      <div onClick={() => handleSearch(false)}>
                        <svg
                          style={{ width: 35, height: 35, cursor: "pointer" }}
                          color="#65676b"
                          viewBox="0 0 24 24"
                          onClick={async () => {
                            await handleTextSearch("");
                            handleSearch(false);
                          }}
                        >
                          <path
                            fill="currentColor"
                            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <> Bài viết theo {name} </>
                )}
              </h1>
              <Slider {...settings}>
                {blog?.data?.map((item, index) => {
                  return (
                    <div className="row list__inner" key={index}>
                      <Item data={item} />
                    </div>
                  );
                })}
              </Slider>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

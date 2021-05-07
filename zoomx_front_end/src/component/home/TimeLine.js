import React from 'react';
import timline from '../../image/home/timeline.png';
import Slider from "react-slick";
export default function TimeLine() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 3,
        //             infinite: true,
        //         },
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 3,
        //             infinite: true,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //         },
        //     },
        // ],
    };
    return (
        <>
            <div className="timeline__wrapper">
                <div className="container-fluid timeline">
                    <div className="row timeline__content">
                        <div className="col-4">
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    1
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    2
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    3
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-mobile">
                <div className="container-fluid timeline-mobile__content">
                    <Slider className="row" {...settings}>
                        <div className="col-4" style={{ maxWidth: '100%' }}>
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    1
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    2
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="timeline__content__item">
                                <div className="timeline__content__item--text">
                                    <div className="wrapper__text">
                                        <p>Tham vọng</p>
                                        <p>
                                            Mang ý tưởng và thiết kế
                                            khách sạn quay ZoomX đến với nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của con người Việt Nam.
                            </p>
                                    </div>

                                </div>
                                <div className="timeline__content__item--number">
                                    3
                            </div>
                                <div className="timeline__content__item--border"></div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>

            {/* <div className="timeline--background">
                <div className="container-fluid">
                    <img src={timline} />
                </div>
            </div> */}
        </>
    )
}
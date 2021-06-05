import React from 'react';
import icon2 from "../../image/zoomX/icon2.png";
import icon3 from "../../image/zoomX/icon3.png";
import icon4 from "../../image/zoomX/icon4.png";
export default function YoungBusiness() {
    return (
        <>
            <div className="young-wrapper">
                <div className="young-wrapper__label">
                    Khởi nghiệp bằng khát vọng tuổi trẻ
                </div>
                <div className="young-wrapper__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </div>
                <div className="young-wrapper__image">
                    <div className="young-wrapper__image--item">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="young-wrapper__image--item">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="young-wrapper__image--item">
                        <img src={icon3} alt="" />
                    </div>
                    <div className="young-wrapper__image--item">
                        <img src={icon4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
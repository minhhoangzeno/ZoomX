import React from "react";
import BackToTop from 'react-back-to-top-button';
 
export default function BacktoTop() {   
  return (
    <div>
      <BackToTop
      showOnScrollUp
      showAt={300}
      speed={1000}
      easing="easeInOutQuint"
      showOnScrollUp={true}
    >
      <div className="backToTop">
        <svg viewBox="0 0 24 24" color="#FFF">
          <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
        </svg>
      </div>
    </BackToTop>
    </div>
  );
}
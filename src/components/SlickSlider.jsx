import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SlickSlider = () => {
  const center = {
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    dots: true,
    arrows: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="vh-100 mt-5 pt-5">
      <Slider {...center} className="py-5">
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 1</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 2</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 3</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 4</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 5</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 6</p>
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 7</p> 
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="slickBox d-flex justify-content-center align-items-center">
            <p className="text-black fw-bolder fs-3">Slide 8</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

import React from 'react'
import Slider from "react-slick";

import slide_one from '../../assets/images/mo_1.jpg'
import slide_two from '../../assets/images/mo_2.jpg'
import slide_three from '../../assets/images/mo_3.jpg'


function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: '65rem'
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: '65rem'
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: '65rem'
            }}
          />
        </div>
      </Slider>
    </div>
  )
}

export default Carrousel;

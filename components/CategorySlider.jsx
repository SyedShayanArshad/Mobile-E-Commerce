"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import lessThan from "@/public/images/lessThan.png"
import greaterThan from "@/public/images/greaterThan.png"
import PhonesIcon from "@/public/images/PhonesIcon.png"
import SmartWatchesIcon from "@/public/images/SmartWatchesIcon.png"
import GamingIcon from "@/public/images/GamingIcon.png"
import ComputersIcon from "@/public/images/ComputersIcon.png"
import CamerasIcon from "@/public/images/CamerasIcon.png"
import HeadphonesIcon from "@/public/images/HeadphonesIcon.png"

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Image src={lessThan} alt="Previous" />,
    nextArrow: <Image src={greaterThan} alt="Next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="category-item">
        <Image src={PhonesIcon} alt="Phones" />
        <h6>Phones</h6>
      </div>
      <div className="category-item">
        <Image src={SmartWatchesIcon} alt="Smart Watches" />
        <h6>Smart Watches</h6>
      </div>
      <div className="category-item">
        <Image src={CamerasIcon} alt="Cameras" />
        <h6>Cameras</h6>
      </div>
      <div className="category-item">
        <Image src={HeadphonesIcon} alt="Headphones" />
        <h6>Headphones</h6>
      </div>
      <div className="category-item">
        <Image src={ComputersIcon} alt="Computers" />
        <h6>Computers</h6>
      </div>
      <div className="category-item">
        <Image src={GamingIcon} alt="Gaming" />
        <h6>Gaming</h6>
      </div>
    </Slider>
  );
};

export default CategorySlider;

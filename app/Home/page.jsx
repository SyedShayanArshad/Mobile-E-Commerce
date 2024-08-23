"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import {useSelector } from "react-redux";
import DefaultLayout from "@/components/DefaultLayout";
import LeftArrow from "@/public/images/leftArrow.png"
import rightArrow from "@/public/images/rightArrow.png"
import hero_1 from "@/public/images/hero_1.png"
import PlayStation from "@/public/images/PlayStation.png"
import Headphones from "@/public/images/Headphones.png"
import AppleVision from "@/public/images/AppleVision.png"
import Macbook from "@/public/images/Macbook.png"
import Macbook_1 from "@/public/images/Macbook_1.png"
import Gadgets from "@/public/images/Gadgets.png"
import ipads from "@/public/images/ipads.png"
import Samsung from "@/public/images/Samsung.png"
import Banner3_1 from "@/public/images/Banner3_1.png"
import Banner3_2 from "@/public/images/Banner3_2.png"
import Banner3_3 from "@/public/images/Banner3_3.png"
import Banner3_4 from "@/public/images/Banner3_4.png"

function Home() {
  const AllProducts = useSelector((state) => state.AllProducts.AllProducts);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <Image
        className="custom-prev-arrow"
        src={LeftArrow}
        alt="Previous Arrow"
      />
    ),
    nextArrow: (
      <Image
        className="custom-next-arrow"
        src={rightArrow}
        alt="Next Arrow"
      />
    ),
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger mobile devices
        settings: {
          slidesToShow: 3, // Adjust to show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For regular mobile devices
        settings: {
          slidesToShow: 2, // Adjust to show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1, // Adjust to show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  const BannerSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const category = [
    {
      imgSource: "/images/PhonesIcon.png",
      heading: "Phones",
    },
    {
      imgSource: "/images/SmartWatchesIcon.png",
      heading: "Smart Watches",
    },
    {
      imgSource: "/images/CamerasIcon.png",
      heading: "Cameras",
    },
    {
      imgSource: "/images/HeadphonesIcon.png",
      heading: "Headphones",
    },
    {
      imgSource: "/images/ComputersIcon.png",
      heading: "Computers",
    },
    {
      imgSource: "/images/GamingIcon.png",
      heading: "Gaming",
    },
  ];

  
  return (
    <DefaultLayout>
      <div className="Hero-1 bg-gradient-to-r from-[#211C24] to-[#211C24] min-h-[632px] flex md:flex-row flex-col justify-around items-center text-center md:text-left pt-[88px] md:mt-0">
        <div className="heroText flex flex-col gap-6">
          <p className="font-figtree leading-8 text-[#909090]">Pro.Beyond.</p>
          <h4 className="font-sfpro  font-extralight leading-[72px] text-[#ffffff] text-7xl md:text-8xl">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h4>
          <p className="font-sfpro font-medium leading-6 text-[#909090] text-2xl md:text-lg">
            Created to change everything for the better. For everyone
          </p>
          <Link href={"/Products"}>
            <button className="rounded-md border py-4 px-14 text-[#ffffff] w-[184px] h-14 font-sfpro text-[16px] m-auto md:m-0">
              Shop Now
            </button>
          </Link>
        </div>
        <Image
          src={hero_1}
          alt="hero1"
          className="w-[343px] h-[289px] md:w-[406px] md:h-[632px]"
        />
      </div>
      <div className="Hero-2_Box1 flex  flex-col md:flex-row ">
        <div className="Hero-2_Box2 flex flex-col">
          <div className="HeroImg_1 flex gap-5 flex-col md:flex-row justify-center items-center py-10 px-4 md:pr-7 md:text-left text-center">
            <Image
              src={PlayStation}
              alt="Playstation"
              className="w-[200px] md:mt-[-55px] h-[200px] md:h-[300px] md:ml-[-90px]"
            />
            <div className="text flex flex-col gap-4 md:w-[338px]">
              <h3 className="font-sfpro font-medium md:text-5xl text-4xl">
                <span className="font-light">Playstation</span> 5
              </h3>
              <p className="font-sfpro font-medium text-base md:text-sm text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="Box_3 flex  flex-col-reverse md:flex-row ">
            <div className="HeroImg_3 flex  flex-col md:flex-row justify-center items-center w-[360px] flex-grow py-10 px-4 md:px-0 md:text-left text-center ">
              <Image
                src={Headphones}
                alt="Headphones"
                className="w-[192px] h-[200px] md:ml-[-87px] md:w-36"
              />
              <div className="text  flex flex-col gap-2 px-5">
                <h1 className="font-sfpro  md:text-[29px] leading-10 font-light text-center md:text-left text-[34px]">
                  Apple AirPods <span className="font-medium">Max</span>
                </h1>
                <p className="font-sfpro leading-6 font-medium text-base md:text-sm">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="HeroImg_4 flex bg-[#353535]  flex-col md:flex-row justify-center items-center gap-4 pr-4 overflow-hidden py-10 px-4 md:text-left text-center">
              <Image
                src={AppleVision}
                alt="AppleVision"
                width={326}
                height={192}
                className="md:ml-[-180px]"
              />
              <div className="text  flex flex-col gap-2">
                <h1 className="font-sfpro text-4xl md:text-3xl leading-10 font-light text-white">
                  Apple Vision <span className="font-medium">Pro</span>
                </h1>
                <p className="font-sfpro leading-6 font-medium text-base md:text-sm text-[#909090]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="HeroImg_2 bg-[#EDEDED] md:gap-32 flex  flex-col-reverse md:flex-row justify-center items-center py-11 md:pl-10 overflow-hidden ">
          <div className="text  flex flex-col gap-4 text-center ">
            <h1 className="font-sfpro text-4xl md:text-[64px] md:font-extralight leading-10 font-medium md:leading-[56px] ">
              Macbook <span className="md:font-medium font-normal">Air</span>
            </h1>
            <p className="font-medium font-sfpro md:stext-sm text-[16px] leading-6 w-[343px] md:w-fit">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border border-black py-4 px-14 w-[343px] md:w-[184px] h-14 font-sfpro text-[16px] m-auto md:m-0">
                Shop Now
              </button>
            </Link>
          </div>
          <Image
            src={Macbook}
            alt="MacBook"
            className="w-[330px] h-[200px] md:mr-[-120px] md:h-[302px] md:w-[292px]"
          />
        </div>
      </div>
      <div className="Category bg-[#fafafa] py-16 md:py-20 px-20 md:px-40 flex flex-col gap-8">
        <div className="upperSection flex justify-between">
          <h3 className="font-medium text-2xl font-sfpro leading-8 ">
            Browse By Category
          </h3>
        </div>
        <Slider {...settings}>
          {category.map((cat, index) => (
            <div
              key={index}
              className="bg-[#ededed] rounded-2xl py-6 px-[52px] min-w-40 h-32"
            >
              <Image
                src={cat.imgSource}
                width={48}
                height={48}
                className="m-auto"
              />
              <h6 className="font-medium text-base font-sfpro leading-6 mt-2 text-center">
                {cat.heading}
              </h6>
            </div>
          ))}
        </Slider>
      </div>
      <div className="newArrival px-4 py-14 md:px-40 flex flex-col gap-8">
        <div className="options flex gap-8 font-medium text-lg leading-8 text-[#8b8b8b]">
          <h1 className="text-black underline">New Arrival</h1>
          <h1>Bestseller</h1>
          <h1>Featured Products</h1>
        </div>
        <div className="ArrivalsList grid md:grid-cols-4 gap-4 grid-cols-2">
          {AllProducts.filter((product) => product.brand === "Apple").map(
            (product) => (
              <ProductCard key={product.id} item={product} />
            )
          )}
        </div>
      </div>
      {window.innerWidth >= 768 ? (
        <section className="Banner md:flex font-sfpro">
          <div className="Banner_1 px-8 py-14 flex flex-col gap-4 h-[640px]">
            <Image
              src={Gadgets}
              className="h-[366px] mb-[-10px]"
            />
            <h2 className="font-light leading-[48px] text-[33px]">
              Popular Products
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_2 bg-[#f9f9f9] px-8 py-14 flex flex-col gap-4 h-[640px]">
            <Image src={ipads} alt="" className="h-[366px]" />
            <h2 className="font-light leading-[48px] text-[33px]">Ipad Pro</h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_3 bg-[#eaeaea] px-8 py-14 flex flex-col gap-4 h-[640px]">
            <Image src={Samsung} alt="" className="h-[366px]" />
            <h2 className="font-light leading-[48px] text-[33px]">
              Samsung Galaxy
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_4 bg-[#2c2c2c] px-8 py-14 flex flex-col gap-4 h-[640px]">
            <Image src={Macbook_1} alt="" className="h-[366px]" />
            <h2 className="font-light leading-[48px] text-[33px] text-[#ffffff]">
              Macbook Pro
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-white text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </section>
      ) : (
        <Slider {...BannerSettings}>
          <div className="Banner_1 px-8 py-14 flex flex-col gap-4 h-[640px] text-center">
            <Image
              src={Gadgets}
              alt=""
              height={366}
              className="mb-[-10px]"
            />
            <h2 className="font-light leading-[48px] text-[33px]">
              Popular Products
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_2 bg-[#f9f9f9] px-8 py-14 flex flex-col gap-4 h-[640px] text-center">
            <Image src={ipads} alt="" />
            <h2 className="font-light leading-[48px] text-[49px]">Ipad Pro</h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_3 bg-[#eaeaea] px-8 py-14 flex flex-col gap-4 h-[640px] text-center">
            <Image src={Samsung} alt="" />
            <h2 className="font-light leading-[48px] text-[49px]">
              Samsung Galaxy
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-black">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="Banner_4 bg-[#2c2c2c] px-8 py-14 flex flex-col gap-4 h-[640px] text-center">
            <Image src={Macbook_1} alt="" />
            <h2 className="font-light leading-[48px] text-[49px] text-[#ffffff]">
              Macbook Pro
            </h2>
            <p className="font-medium text-sm leading-6 text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link href={"/Products"}>
              <button className="rounded-md border py-4 px-14 border-white text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </Slider>
      )}
      <div className="discount flex flex-col gap-4 py-14 md:py-20 px-4 md:px-40">
        <h1 className="font-medium text-2xl leading-8">Discounts up to -50%</h1>
        <div className="discountList grid md:grid-cols-4 gap-4 grid-cols-2">
          {AllProducts.slice(0,4).map(product=><ProductCard item= {product}/>)}
        </div>
      </div>
      <section className="Banner_3 h-[448px] bg-gradient-to-r from-[#2e2e2e] to-black relative overflow-hidden">
        <Image
          src={Banner3_1}
          alt=""
          className="absolute md:bottom-0 bottom-[-50px] md:right-0 right-[-210px]"
        />
        <Image
          src={Banner3_2}
          alt=""
          className="absolute right-0 md:top-0 top-[-200px]"
        />
        <Image
          src={Banner3_3}
          alt=""
          className="absolute md:top-[169px] top-[-180px]"
        />
        <Image
          src={Banner3_4}
          alt=""
          className="absolute md:left-[39px] md:top-[3px] top-[-20px] left-[-200px]"
        />
        <div className="font-sfpro flex flex-col text-center items-center justify-center gap-4 text-white pt-[159px]">
          <h1 className="font-extralight leading-[72px] md:text-7xl text-5xl">
            Big Summer <span className="font-light">Sale</span>
          </h1>
          <p className="font-normal text-base leading-8 text-[#787878] md:px-0 px-4">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Link href={"/Products"}>
            <button className="border border-white rounded-md py-4 px-14">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Home;

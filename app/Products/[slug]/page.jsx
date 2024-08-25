"use client";
import React, { useState } from "react";
import Arrow from "@/public/images/Arrow.png";
import ProductCard from "@/components/ProductCard";
import { useSelector } from "react-redux";
import { addToCart } from "@/lib/features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";
import ScreenSize from "@/public/images/ScreenSize.png";
import CPU from "@/public/images/CPU.png";
import Cores from "@/public/images/Cores.png";
import MainCamera from "@/public/images/MainCamera.png";
import FrontCamera from "@/public/images/FrontCamera.png";
import Battery from "@/public/images/Battery.png";
import Delivery from "@/public/images/Delivery.png";
import Stock from "@/public/images/Stock.png";
import Guaranteed from "@/public/images/Guaranteed.png";
import Stars4_5 from "@/public/images/4.5Stars.png";

function ProductDetail({ params }) {
  const AllProducts = useSelector((state) => state.AllProducts.AllProducts);
  const dispatch = useDispatch();
  const DetailItem = AllProducts.find(
    (product) =>
      product.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") === params.slug
  );
  const [selectedMemory, setSelectedMemory] = useState("128GB");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [mainImage, setMainImage] = useState(DetailItem.thumbnail);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const memoryOptions = ["128GB", "256GB", "512GB", "1TB"];
  const colorOptions = ["#000000", "#781DBC", "#E10000", "#E1B000", "#E8E8E8"];
  const secondaryImages = DetailItem.images.slice(0, 3);
  const reviews = [
    {
      name: "Ronald Richards",
      ratingImg: "/images/4Stars.png",
      comment:
        "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
      userImg: "/images/User1.png",
    },
    {
      name: "Grace Carey",
      ratingImg: "/images/5Stars.png",
      comment:
        "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
      userImg: "/images/User2.png",
    },
    {
      name: "Darcy King",
      ratingImg: "/images/4.5Stars.png",
      comment:
        "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition",
      userImg: "/images/User3.png",
    },
  ];
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDetails = () => {
    setIsDetailsExpanded(!isDetailsExpanded);
  };
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  const AddCartHandler = () => {
    dispatch(
      addToCart({
        img: DetailItem.thumbnail,
        title: DetailItem.title,
        price: DetailItem.price,
      })
    );
    toast.success("Item added successfully!", {
      autoClose: 1000,
      position: "top-center",
      hideProgressBar: true,
      style: {
        borderRadius: "10px",
      },
    });
  };
  return (
    <DefaultLayout>
      <div className="font-sfpro">
        <div className="breadcrumbs hidden md:flex py-10 px-20 gap-4 font-sfpro font-medium text-base items-center">
          <p className="leading-4 text-[#a4a4a4]">Home</p>
          <Image
            src={Arrow}
            alt="Arrow"
            width={6}
            height={12} // height in pixels (to maintain aspect ratio 6:3)
            className="w-[6px] h-3"
          />

          <p className="leading-4 text-[#a4a4a4]">Catalog</p>
          <Image
            src={Arrow}
            alt="Arrow"
            width={6}
            height={12} // height in pixels (to maintain aspect ratio 6:3)
            className="w-[6px] h-3"
          />

          <p className="leading-4 text-[#a4a4a4]">{DetailItem.category}</p>
          <Image
            src={Arrow}
            alt="Arrow"
            width={6}
            height={12} // height in pixels (to maintain aspect ratio 6:3)
            className="w-[6px] h-3"
          />

          <p className="leading-4 text-[#a4a4a4]">{DetailItem.brand}</p>
          <Image
            src={Arrow}
            alt="Arrow"
            width={6}
            height={12} // height in pixels (to maintain aspect ratio 6:3)
            className="w-[6px] h-3"
          />

          <p className="text-black">{DetailItem.title}</p>
        </div>
        <div className="mainInfo px-4 md:py-28 md:px-32 flex md:flex-row flex-col gap-8 items-center justify-center">
          <div className="images flex gap-[30px] md:gap-12 md:flex-row flex-col-reverse items-center">
            <div className="secondaryImages flex md:flex-col gap-6">
              {secondaryImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={46}
                  height={93}
                  className="cursor-pointer max-h-[93px] w-[46px]"
                  onClick={() => setMainImage(image)}
                  alt=""
                />
              ))}
            </div>
            <div className="md:w-[413px]">
              <Image
                src={mainImage}
                width={413}
                height={516}
                className="w-[413px] h-[516px] object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="info flex flex-col gap-8 px-4 md:px-0">
            <div className="content flex gap-4 flex-col">
              <div className="title flex flex-col gap-6">
                <h1 className="font-bold text-[40px] leading-10">
                  {DetailItem.title}
                </h1>
                <div className="price flex gap-4 items-center">
                  <p className="discountPrice font-medium text-[32px] leading-[48px]">
                    ${DetailItem.price}
                  </p>
                  <p className="actualPrice font-normal text-2xl leading-8 text-[#a0a0a0]">
                    <strike>
                      $
                      {(
                        DetailItem.price /
                        (1 - DetailItem.discountPercentage / 100)
                      ).toFixed(2)}
                    </strike>
                  </p>
                </div>
              </div>
              <div className="info flex flex-col gap-6">
                <div className="colors flex gap-6 items-center">
                  <p className="text-[#0c0c0c] font-normal leading-6 text-[15px]">
                    Select color:
                  </p>
                  <div className="colorVariants flex gap-2">
                    {colorOptions.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer border-[3px] ${
                          selectedColor === color
                            ? "border-black"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="tabMemory flex gap-2 md:gap-4">
                  {memoryOptions.map((memory) => (
                    <div
                      key={memory}
                      className={`py-4 px-6 rounded-lg border-2 ${
                        selectedMemory === memory
                          ? "border-black text-black"
                          : "border-[#d5d5d5] text-[#6f6f6f]"
                      } cursor-pointer`}
                      onClick={() => setSelectedMemory(memory)}
                    >
                      {memory}
                    </div>
                  ))}
                </div>
                <div className="details grid grid-cols-2  md:flex md:flex-wrap gap-2 md:gap-4">
                  <div className="detail1 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={ScreenSize}
                      alt="Screen Size"
                      width={5}
                      height={5}
                      className="w-5 h-5"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        Screen size
                      </p>
                      <span className="font-medium text-[#4e4e4e]">
                        6.7&quot;
                      </span>
                    </div>
                  </div>
                  <div className="detail3 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={CPU}
                      alt="CPU"
                      width={5}
                      height={5} // height in pixels
                      className="w-5 h-5"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        CPU
                      </p>
                      <span className="font-medium text-[#4e4e4e]">
                        Apple A16 Bionic
                      </span>
                    </div>
                  </div>
                  <div className="detail4 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={Cores}
                      alt="Cores"
                      width={7}
                      height={7} // height in pixels
                      className="w-7 h-7"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        Number of Cores
                      </p>
                      <span className="font-medium text-[#4e4e4e]">6</span>
                    </div>
                  </div>
                  <div className="detail5 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={MainCamera}
                      alt="Main Camera"
                      width={5}
                      height={5} // height in pixels
                      className="w-5 h-5"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        Main Camera
                      </p>
                      <span className="font-medium text-[#4e4e4e]">
                        48-12-12 MP
                      </span>
                    </div>
                  </div>
                  <div className="detail6 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={FrontCamera}
                      alt="Front Camera"
                      width={5}
                      height={5} // height in pixels
                      className="w-5 h-5"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        Front-camera
                      </p>
                      <span className="font-medium text-[#4e4e4e]">12 MP</span>
                    </div>
                  </div>
                  <div className="detail2 p-4 flex gap-2 bg-[#f4f4f4] rounded-[7px] items-center">
                    <Image
                      src={Battery}
                      alt="Battery"
                      width={5}
                      height={5} // height in pixels
                      className="w-5 h-5"
                    />

                    <div className="flex flex-col">
                      <p className="text-sm leading-4 font-normal text-[#a7a7a7]">
                        Battery capacity
                      </p>
                      <span className="font-medium text-[#4e4e4e]">
                        4323mAh
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6c6c6c]">
                  {DetailItem.description.slice(0, 100)}
                  {/* Displaying a truncated version initially */}
                  {isExpanded ? (
                    <>
                      {DetailItem.description}
                      <span
                        onClick={toggleReadMore}
                        className="cursor-pointer text-[#2c2c2c] underline"
                      >
                        {" "}
                        Read less
                      </span>
                    </>
                  ) : (
                    <span
                      onClick={toggleReadMore}
                      className="cursor-pointer text-[#2c2c2c] underline"
                    >
                      {" "}
                      Read more
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="buttons flex gap-4 flex-col md:flex-row">
              <button className="rounded-md py-4 px-14 border border-black">
                Add to WishList
              </button>
              <button
                className="rounded-md py-4 px-14 border bg-black text-white"
                onClick={AddCartHandler}
              >
                Add to Cart
              </button>
              <ToastContainer />
            </div>
            <div className="feature flex gap-8 justify-center items-center">
              <div className="feature_1 flex gap-4 flex-col md:flex-row items-center justify-center">
                <Image src={Delivery} alt="Delivery" />

                <div className="flex flex-col font-medium leading-6 text-sm md:items-start items-center">
                  <p className="text-[#717171]">Free Delivery</p>
                  <span className="text-black">1-2 day</span>
                </div>
              </div>
              <div className="feature_2 flex gap-4 flex-col md:flex-row items-center justify-center">
                <Image src={Stock} alt="Stock" />

                <div className="flex flex-col font-medium leading-6 text-sm md:items-start items-center">
                  <p className="text-[#717171]">In Stock</p>
                  <span className="text-black">Today</span>
                </div>
              </div>
              <div className="feature_3 flex gap-4 flex-col md:flex-row items-center justify-center">
                <Image src={Guaranteed} alt="Guaranteed" />

                <div className="flex flex-col font-medium leading-6 text-sm md:items-start items-center">
                  <p className="text-[#717171]">Guaranteed</p>
                  <span className="text-black">1 year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="detail bg-[#fafafa] py-10 md:py-20 md:px-40 px-4">
          <div className="content flex flex-col gap-8 bg-white py-12 px-10 rounded-lg">
            <h2 className="font-medium text-2xl leading-8">Details</h2>
            <p className="description text-[#9d9d9d] font-medium text-2xl leading-8">
              {DetailItem.description}
            </p>
            <div className="detail_1 flex flex-col gap-10">
              <div className="info-1 flex flex-col gap-4">
                <h1 className="font-medium text-xl leading-6">Screen</h1>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">Screen Diagonal</span>
                  <span className="text-[15px]">6.7&quot;</span>
                </p>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">The screen resolution</span>
                  <span className="text-[15px]">2796x1290</span>
                </p>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">The screen refresh rate</span>
                  <span className="text-[15px]">120Hz</span>
                </p>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">The pixel density</span>
                  <span className="text-[15px]">460 ppi</span>
                </p>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">Screen Type</span>
                  <span className="text-[15px]">OLED</span>
                </p>
                <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                  <span className="text-base">Additionally</span>
                  <span className="text-[15px]">
                    Dynamic Island <br /> Always-On display <br />
                    HDR display <br />
                    True Tone <br />
                    Wide color (P3)
                  </span>
                </p>
              </div>
              {isDetailsExpanded && (
                <div className="info-2 flex flex-col gap-4">
                  <h1 className="font-medium text-xl leading-6">CPU</h1>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">CPU</span>
                    <span className="text-[15px]">A16 Bionic</span>
                  </p>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Number of cores</span>
                    <span className="text-[15px]">6</span>
                  </p>
                </div>
              )}
              {isDetailsExpanded && (
                <div className="info-3 flex flex-col gap-4">
                  <h1 className="font-medium text-xl leading-6">Camera</h1>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Back Camera</span>
                    <span className="text-[15px]">48-12-12 MP</span>
                  </p>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Front Camera</span>
                    <span className="text-[15px]">12 MP</span>
                  </p>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Sensor</span>
                    <span className="text-[15px]">Sony</span>
                  </p>
                </div>
              )}
              {isDetailsExpanded && (
                <div className="info-4 flex flex-col gap-4">
                  <h1 className="font-medium text-xl leading-6">Battery</h1>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Battery Capacity</span>
                    <span className="text-[15px]">4323mAH</span>
                  </p>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Battery Type</span>
                    <span className="text-[15px]">Lithium</span>
                  </p>
                  <p className="flex justify-between border-b-[0.5px] font-normal leading-6">
                    <span className="text-base">Charger</span>
                    <span className="text-[15px]">25 watt</span>
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={toggleDetails}
              className="border border-[#545454] py-3 px-14 rounded-lg w-[208px] m-auto "
            >
              {isDetailsExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </section>
        <section className="reviews py-10 md:py-[88px] px-4 md:px-40 flex flex-col gap-8">
          <div className="top flex gap-12 flex-col">
            <h1 className="font-medium text-2xl leading-8">Reviews</h1>
            <div className="overallRating flex flex-col md:flex-row gap-[60px] justify-center items-center">
              <div className="rating flex flex-col gap-4 rounded-3xl bg-[#fafafa] p-8 items-center justify-center">
                <p className="font-medium leading-[56px] text-[56px]">4.8</p>
                <p className="font-medium leading-4 text-[15px]">
                  of 125 reviews
                </p>
                <Image src={Stars4_5} alt="Stars" />
              </div>
              <div className="level flex flex-col gap-6 justify-between">
                <div className="level_1 font-medium leading-4 items-center flex gap-6">
                  <p className="text-lg w-[100px]">Excellent</p>
                  <div className="level flex items-center">
                    <div className="w-[150px] md:w-[564px] h-[5px] rounded-2xl bg-[#d9d9d9]">
                      <div className="w-[80%] bg-[#FFB547] h-full rounded-2xl "></div>
                    </div>
                  </div>
                  <p className="amount text-base">80</p>
                </div>
                <div className="level_2 font-medium leading-4 items-center flex gap-6">
                  <p className="text-lg w-[100px]">Good</p>
                  <div className="level flex items-center">
                    <div className="w-[150px] md:w-[564px] h-[5px] rounded-2xl bg-[#d9d9d9]">
                      <div className="w-[60%] bg-[#FFB547] h-full rounded-2xl "></div>
                    </div>
                  </div>
                  <p className="amount text-base">60</p>
                </div>
                <div className="level_3 font-medium leading-4 items-center flex gap-6">
                  <p className="text-lg w-[100px]">Average</p>
                  <div className="level flex items-center">
                    <div className="w-[150px] md:w-[564px] h-[5px] rounded-2xl bg-[#d9d9d9]">
                      <div className="w-[30%] bg-[#FFB547] h-full rounded-2xl "></div>
                    </div>
                  </div>
                  <p className="amount text-base">30</p>
                </div>
                <div className="level_4 font-medium leading-4 items-center flex gap-4">
                  <p className="text-lg w-[120px]">Below Average</p>
                  <div className="level flex items-center">
                    <div className="w-[150px] md:w-[564px] h-[5px] rounded-2xl bg-[#d9d9d9]">
                      <div className="w-[30%] bg-[#FFB547] h-full rounded-2xl "></div>
                    </div>
                  </div>
                  <p className="amount text-base">30</p>
                </div>
                <div className="level_5 font-medium leading-4 items-center flex gap-6">
                  <p className="text-lg w-[100px]">Poor</p>
                  <div className="level flex items-center">
                    <div className="w-[150px] md:w-[564px] h-[5px] rounded-2xl bg-[#d9d9d9]">
                      <div className="w-[15%] bg-[#FFB547] h-full rounded-2xl "></div>
                    </div>
                  </div>
                  <p className="amount text-base">15</p>
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Leave Comment"
              className="py-6 px-4 rounded-[7px] border-[0.5px]"
            />
          </div>
          <div className="reviewList flex flex-col gap-6">
            {reviews
              .slice(0, showAllReviews ? reviews.length : 2)
              .map((review, index) => (
                <div
                  key={index}
                  className="py-6 pr-7 pl-4 bg-[#fafafa] rounded-[10px] flex gap-[19px]"
                >
                  <Image
                    src={review.userImg}
                    alt="Profile"
                    width={56}
                    height={56} // height in pixels
                    className="rounded-[10px] w-14 h-14"
                  />
                  <div className="flex flex-col gap-2 leading-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <p className="name font-bold text-[17px]">
                          {review.name}
                        </p>
                        <p className="date font-medium text-sm leading-4">
                          24 January,2023
                        </p>
                      </div>
                      <Image
                        src={review.ratingImg}
                        alt="Rating"
                        width={116}
                        height={0}
                        className="w-[116px]"
                      />
                    </div>
                    <p className="comments text-[#7e7e7e] font-medium text-[15px]">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={toggleReviews}
            className="border border-[#545454] py-3 px-14 rounded-lg w-[208px] m-auto "
          >
            {showAllReviews ? "Show Less" : "View More"}
          </button>
        </section>
        <section className="relatedProducts py-10 md:py-20 px-4 md:px-40 flex flex-col gap-4">
          <h1 className="font-medium text-2xl leading-8">Related Products</h1>
          <div className="productList grid grid-cols-2 md:grid-cols-4 gap-4">
            {AllProducts.filter(
              (product) => product.category === DetailItem.category
            )
              .slice(0, 4)
              .map((relevent) => (
                <ProductCard item={relevent} key={relevent.id} />
              ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default ProductDetail;

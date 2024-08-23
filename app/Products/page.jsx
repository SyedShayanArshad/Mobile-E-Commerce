"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { useSelector } from "react-redux";
import DefaultLayout from "@/components/DefaultLayout";
import Arrow from '@/public/images/Arrow.png';
import ExpandLess from '@/public/images/expandLess.png';
import ExpandMore from '@/public/images/expandMore.png';
import Filter from '@/public/images/Filter.png';
import leftArrow from '@/public/images/leftArrow.png';
import rightArrow from '@/public/images/rightArrow.png';

function Page() {
  const AllProducts = useSelector(state => state.AllProducts.AllProducts);
  const [showBrands, setShowBrands] = useState(false);
  const [SelectedBrands, setSelectedBrands] = useState([]);
  const [showBattery, setShowBattery] = useState(false);
  const [showScreenType, setShowScreenType] = useState(false);
  const [showScreenDiagonal, setShowScreenDiagonal] = useState(false);
  const [showProtectionClass, setShowProtectionClass] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);
  const ProductsPerPage = isMobile ? 8 : 9;
  const TotalPages = Math.ceil(AllProducts.length / ProductsPerPage);
  const firstIndex = (CurrentPage - 1) * ProductsPerPage;
  const lastIndex = firstIndex + ProductsPerPage;
  const FilterProducts = AllProducts.filter((product) =>
    SelectedBrands.length > 0 ? SelectedBrands.includes(product.brand) : true
  );
  const currentProducts = FilterProducts.slice(firstIndex, lastIndex);
  const prevPageHandler = () => {
    if (CurrentPage === 1) {
      return;
    }
    setCurrentPage(CurrentPage - 1);
  };
  const nextPageHandler = () => {
    if (CurrentPage === TotalPages) {
      return;
    }
    setCurrentPage(CurrentPage + 1);
  };
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile); // Cleanup listener
  }, []);
  
  const filterHandler = () => {
    setShowFilter((filter) => !filter);
  };
  const toggleFilter = (setter) => {
    setter((prevState) => !prevState);
  };
  const handleBrandChange = (brand, isChecked) => {
    setSelectedBrands((prev) => {
      if (isChecked) {
        return [...prev, brand];
      }
      return prev.filter((b) => b !== brand);
    });
  };
  
  return (
    <DefaultLayout>
      <div className="breadcrumbs hidden md:flex py-10 px-20 gap-4 font-sfpro font-medium text-base items-center">
        <p className="leading-4 text-[#a4a4a4]">Home</p>
        <Image src={Arrow} alt="Arrow" width={6} height={12} className="w-[6px] h-3" />
        <p className="leading-4 text-[#a4a4a4]">Catalog</p>
        <Image src={Arrow} alt="Arrow" width={6} height={12} className="w-[6px] h-3" />
        <p className="text-black">SmartPhones</p>
      </div>
      <div className="content md:px-20 md:pt-6 p-4 md:pb-14">
        <div className="flex md:gap-8 gap-4 flex-col md:flex-row items-center md:items-start">
          <div
            className={`filterContent ${
              !isMobile || showFilter ? "min-w-52" : "hidden"
            } ${
              isMobile && showFilter
                ? "absolute top-[120px] left-0 w-full p-12 bg-white z-10"
                : ""
            }`}
          >
            <div className="Apporion flex flex-col gap-4">
              {/* Brands Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowBrands)}
              >
                <h2 className="font-medium text-lg leading-6">Brands</h2>
                <Image
                  src={showBrands ? ExpandLess : ExpandMore}
                  alt={showBrands ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showBrands && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {[
                      "Apple",
                      "Samsung",
                      "Xiaomi",
                      "Oppo",
                      "Infinix",
                      "Tecno",
                      "Realme",
                      "Nokia",
                      "Honor",
                    ].map((brand, index) => (
                      <li key={index} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          className="w-[16.33px] h-[15.67px] accent-black"
                          onChange={(e) =>
                            handleBrandChange(brand, e.target.checked)
                          }
                        />
                        <p>{brand}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Battery Capacity Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowBattery)}
              >
                <h2 className="font-medium text-lg leading-6">
                  Battery Capacity
                </h2>
                <Image
                  src={showBattery ? ExpandLess : ExpandMore}
                  alt={showBattery ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showBattery && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {["6000mah", "5000mah", "4000mah"].map(
                      (capacity, index) => (
                        <li key={index} className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            className="w-[16.33px] h-[15.67px] accent-black"
                          />
                          <p>{capacity}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Screen Type Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowScreenType)}
              >
                <h2 className="font-medium text-lg leading-6">Screen Type</h2>
                <Image
                  src={showScreenType ? ExpandLess : ExpandMore}
                  alt={showScreenType ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showScreenType && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {["Oled", "Amoled", "Lcd display", "Tft lcd"].map(
                      (type, index) => (
                        <li key={index} className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            className="w-[16.33px] h-[15.67px] accent-black"
                          />
                          <p>{type}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Screen Diagonal Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowScreenDiagonal)}
              >
                <h2 className="font-medium text-lg leading-6">
                  Screen Diagonal
                </h2>
                <Image
                  src={showScreenDiagonal ? ExpandLess : ExpandMore}
                  alt={showScreenDiagonal ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showScreenDiagonal && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {['7"', '6"', '5"', '4"'].map((diagonal, index) => (
                      <li key={index} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          className="w-[16.33px] h-[15.67px] accent-black"
                        />
                        <p>{diagonal}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Protection Class Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowProtectionClass)}
              >
                <h2 className="font-medium text-lg leading-6">
                  Protection Class
                </h2>
                <Image
                  src={showProtectionClass ? ExpandLess : ExpandMore}
                  alt={showProtectionClass ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showProtectionClass && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {["Ceramic", "Plastic", "Liquid", "Tempered"].map(
                      (protection, index) => (
                        <li key={index} className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            className="w-[16.33px] h-[15.67px] accent-black"
                          />
                          <p>{protection}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Built-in Memory Filter */}
              <div
                className="ApporionHeading flex justify-between cursor-pointer border-b-[0.5px] py-3"
                onClick={() => toggleFilter(setShowMemory)}
              >
                <h2 className="font-medium text-lg leading-6">
                  Built-in Memory
                </h2>
                <Image
                  src={showMemory ? ExpandLess : ExpandMore}
                  alt={showMemory ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </div>
              {showMemory && (
                <div className="ApporionContent">
                  <ul className="flex flex-col font-medium text-[15px] leading-6">
                    {[
                      "16GB",
                      "32GB",
                      "64GB",
                      "128GB",
                      "256GB",
                      "512GB",
                      "1TB",
                    ].map((memory, index) => (
                      <li key={index} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          className="w-[16.33px] h-[15.67px] accent-black"
                        />
                        <p>{memory}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="ProductsContent flex flex-col md:gap-10 gap-6 md:w-[831px]">
            <div className="flex justify-between flex-col-reverse md:flex-row">
              <div className="selectedItem font-medium leading-4 flex gap-[6px] items-center">
                {SelectedBrands.length > 0 ? (
                  <>
                    <p className="text-[#6c6c6c] text-base pl-10 md:pl-0">
                      Selected Products:
                    </p>
                    <p className="text-xl">{currentProducts.length}</p>
                  </>
                ) : (
                  <>
                    <p className="text-[#6c6c6c] text-base pl-10 md:pl-0">
                      Total Products:
                    </p>
                    <p className="text-xl">{AllProducts.length}</p>
                  </>
                )}
              </div>
              <div className="flex gap-4 justify-center flex-row-reverse">
                <div className="filterbox">
                  <select
                    name="filter"
                    id="filterShow"
                    className="bg-[#ffff] border-[0.5px] border-[#d4d4d4] p-4 md:py-2 md:px-4 w-[164px] md:w-64 rounded-lg"
                  >
                    <option value="ByRating">By Rating</option>
                    <option value="ByName">By Name</option>
                    <option value="ByPriceLowToHigh">Price: Low to High</option>
                    <option value="ByPriceHighToLow">Price: High to Low</option>
                  </select>
                </div>
                {isMobile ? (
                  <div
                    className="filterButton flex justify-between border-[0.5px] border-[#d4d4d4] rounded-lg items-center p-4 mb-4 w-[164px]"
                    onClick={filterHandler}
                  >
                    <p className="font-normal text-[15px] leading-4">Filters</p>
                    <Image
                      src={Filter}
                      alt="Filter icon"
                      width={16}
                      height={18}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="ProductList grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 justify-center md:justify-normal">
              {currentProducts.map((p, index) => (
                <ProductCard
                  key={index}
                  item={p}
                />
              ))}
            </div>
            <div className="Pagination flex gap-4 items-center justify-center">
              <Image
                src={leftArrow}
                alt="leftArrow"
                width={6}
                height={12}
                className="w-[6px] h-3 cursor-pointer"
                onClick={prevPageHandler}
              />
              <div className="pages flex gap-2">
                {Array.from({ length: TotalPages }, (_, index) => (
                  <p
                    key={index}
                    className={`py-1 px-3 rounded-[11px] cursor-pointer ${
                      CurrentPage === index + 1
                        ? "bg-black text-white"
                        : "bg-[#f6f6f6]"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </p>
                ))}
              </div>

              <Image
                src={rightArrow}
                alt="rightArrow"
                width={6}
                height={12}
                className="w-[6px] h-3 cursor-pointer"
                onClick={nextPageHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Page;

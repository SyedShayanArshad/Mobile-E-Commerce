"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import FavouriteItem from "./FavouriteItem";
import SearchItem from "./SearchItem";
import Logo from "@/public/images/logoVector.png";
import Burger from "@/public/images/Burger.png";
import Cart1 from "@/public/images/Cart1.png";
import Favorites from "@/public/images/Favorites.png";
import Vector from "@/public/images/Vector.png";
import SearchIcon from "@/public/images/Search.png";

function Navbar() {
  const AllProducts = useSelector((state) => state.AllProducts.AllProducts);
  const [BurgerClick, setBurgerClick] = useState(false);
  const [ShowFavourite, setShowFavourite] = useState(false);
  const [Search, setSearch] = useState("");
  const cartAmount = useSelector((state) => state.cart.cartedItems);
  const favouriteAmount = useSelector(
    (state) => state.Favourites.favouritesCount
  );
  const favouriteItems = useSelector(
    (state) => state.Favourites.favouriteItems
  );
  const filteredProducts = AllProducts.filter((product) =>
    product.title.toLowerCase().includes(Search.toLowerCase())
  );

  const { data: session } = useSession();
  const [IsShowProfile, setIsShowProfile] = useState(false);
  const pathname = usePathname();
  const BurgerHandler = () => {
    setBurgerClick((b) => !b);
  };
  const profileHandler = () => {
    setIsShowProfile((profile) => !profile);
  };
  const FavouriteHandler = () => {
    setShowFavourite((show) => !show);
  };
  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  return (
    <nav className="md:min-h-[88px] flex justify-between  md:py-4 px-7 md:px-28 border-b-[#B5B5B5] items-center sticky top-0 bg-white z-50">
      <Link href={"/Home"}>
        <div className="logo cursor-pointer">
          <Image src={Logo} alt="" />
        </div>
      </Link>
      <div className="burger md:hidden block" onClick={BurgerHandler}>
        <Image src={Burger} alt="" />
      </div>
      <div
        className={`${
          BurgerClick ? "absolute top-10 block bg-white p-4" : "hidden"
        }  md:flex gap-[42px] items-center justify-center`}
      >
        <div className="searchBar relative md:block">
          <Image
            src={SearchIcon}
            alt="Search icon"
            className="absolute top-4 left-3"
          />
          <input
            type="text"
            placeholder="Search"
            value={Search}
            onBlur={() => setSearch("")}
            onChange={searchHandler}
            className="rounded-lg p-4 bg-[#F5F5F5] pl-10 max-w-[325px] md:min-w-[362px]"
          />
          {Search && (
            <div className="searchItems absolute p-4 max-h-[300px] overflow-y-auto bg-white">
              {filteredProducts.length === 0 ? (
                <div className="notFound">Product Not Found</div>
              ) : (
                filteredProducts.map((item) => (
                  <SearchItem
                    key={item.id}
                    title={item.title}
                    img={item.thumbnail}
                    price={item.price}
                  />
                ))
              )}
            </div>
          )}
        </div>
        <ul className="flex gap-3 md:gap-12 md:flex-row flex-col">
          <Link
            className={`link ${pathname === "/Home" ? "font-semibold" : ""}`}
            href="/Home"
          >
            Home
          </Link>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <ul className="flex gap-6 items-center">
          <li
            className="relative"
            tabIndex={0}
            onBlur={() => setShowFavourite(false)}
          >
            <div className="cartAmount absolute left-5 bottom-5 text-sm font-normal bg-red-500 text-white rounded-full px-2">
              {favouriteAmount}
            </div>
            <Image
              src={Favorites}
              alt=""
              className="cursor-pointer"
              onClick={FavouriteHandler}
            />
            {ShowFavourite && (
              <div className="favouritesList absolute md:top-10 border md:right-0 p-4 max-h-80 bg-white overflow-y-auto w-max">
                <h1 className="text-center font-semibold">
                  Favourite Products
                </h1>
                {favouriteItems.map((item, index) => (
                  <FavouriteItem
                    key={index}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                  />
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <Link href={"/ShoppingCart"}>
              <div className="cartAmount absolute left-5 bottom-5 text-sm font-normal bg-black text-white rounded-full px-2">
                {cartAmount}
              </div>
              <Image src={Cart1} alt="" />
            </Link>
          </li>
          <li>
            <Image
              src={Vector}
              alt=""
              onClick={profileHandler}
              className="cursor-pointer"
            />
            {IsShowProfile && (
              <div className="bg-white absolute md:right-10 top-60 md:top-20 p-4 rounded-md"  tabIndex={0} onBlur={() => setIsShowProfile(false)}>
                {session ? (
                  <>
                    <p>
                      <span className="font-bold">Welcome, </span>{" "}
                      {session.user?.name}
                    </p>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="cursor-pointer hover:font-bold"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link href={"/Login"}>
                    <h1>Sign In Now</h1>
                  </Link>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";
import React from "react";
import Image from "next/image";
import LikeImage from "../public/images/Like.png";
import FilledLikeImage from "../public/images/Fill_Like.png";
import { addToCart } from "@/lib/features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { addToFavourite } from "@/lib/features/Favourite/FavouriteSlice";
function ProductCard({ item }) {
  const router = useRouter();
  const isFavourite = (useSelector((state)=>state.Favourites.favouriteItems)).some(product=>product.title===item.title);
  const dispatch = useDispatch();
  const LikeHandler = () => {
    dispatch(addToFavourite({ title: item.title, img:item.thumbnail, price:item.price}))

  };
  const AddCartHandler = () => {
    dispatch(
      addToCart({
        img: item.thumbnail,
        title: item.title,
        price: item.price,
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
  const detailHandler = () => {
    router.push(
      `/Products/${item.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")}`
    );
  };
  return (
    <div className="card py-6 px-2 md:px-4 rounded-lg bg-[#F6F6F6] flex flex-col gap-1 md:gap-4 h-[352px]  max-w-[268px] md:h-[432px] justify-center items-center">
      <Image
        src={isFavourite ? FilledLikeImage : LikeImage}
        alt="Like"
        width={32}
        height={32}
        className="self-end cursor-pointer"
        onClick={LikeHandler}
      />
      <Image
        src={item.thumbnail}
        alt="ProductImage"
        width={104}
        height={104}
        className="w-[104px] h-[104px] md:w-40 md:h-40 object-cover cursor-pointer"
        onClick={detailHandler}
      />
      <div className="content flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-4" onClick={detailHandler}>
          <p
            className="font-sfpro text-base font-medium leading-6 text-center md:min-w-[234px] w-[140px] cursor-pointer"
          >
            {item.title}
          </p>
          <p className="font-sfpro text-xl font-semibold leading-6 tracking-[0.03em] text-center">
            {item.price}
          </p>
        </div>
        <button
          className="bg-black min-h-[48px] rounded-lg text-white w-[140PX] md:w-[183px]"
          onClick={AddCartHandler}
        >
          Buy Now
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ProductCard;

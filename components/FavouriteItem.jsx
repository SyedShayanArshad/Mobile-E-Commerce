"use client";
import React from "react";
import Image from "next/image";
import { addToFavourite } from "@/lib/features/Favourite/FavouriteSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Close from "@/public/images/Close.png"
function FavouriteItem(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(addToFavourite({ title: props.title }));
  };
  const detailHandler = () => {
    router.push(
      `/Products/${props.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")}`
    );
  };
  return (
    <div className="FavouriteItem font-sfpro py-4 flex gap-[15px] items-center justify-center">
      <Image src={props.img} alt="itemImage" width={90} height={90}/>
      <div className="flex flex-col md:flex-row items-center">
        <h3
          className="title font-medium text-base leading-6 md:w-[193px] cursor-pointer"
          onClick={detailHandler}
        >
          {props.title}
        </h3>
        <div className="flex justify-center items-center gap-6">
          <p className="price font-medium leading-8 text-xl">{props.price}</p>
          <Image
            src={Close}
            alt="CloseIcon"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={removeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default FavouriteItem;

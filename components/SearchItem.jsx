"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

function SearchItem(props) {
  const router = useRouter();
  const detailHandler = () => {
    router.push(
      `/Products/${props.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")}`
    );
  };
  return (
    <div className="FavouriteItem font-sfpro py-4 flex gap-[15px] items-center justify-center cursor-pointer" onClick={detailHandler}>
      <Image src={props.img} alt="itemImage" width={90} height={90} />
      <div className="flex flex-col">
        <h3 className="title font-medium text-base leading-6 md:w-[193px]">
          {props.title}
        </h3>
        <p className="price font-medium leading-8 text-xl">{props.price}</p>
      </div>
    </div>
  );
}

export default SearchItem;

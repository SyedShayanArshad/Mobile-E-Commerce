"use client";
import React from "react";
import { decreaseFromCart,addToCart,removeFromCart} from "@/lib/features/cart/CartSlice";
import { useDispatch } from "react-redux";
import Decrement from "@/public/images/Decrement.png"
import Increment from "@/public/images/Increment.png"
import Close from "@/public/images/Close.png"
import Image from "next/image";
function CartItem(props) {
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch(addToCart({ title: props.title }));
  };
  const decrementHandler = () => {
    if (props.quantity == 1) {
      return;
    }
    dispatch(decreaseFromCart({ title: props.title }));
  };
 const removeHandler = () =>{
  dispatch(removeFromCart({ title: props.title }))
 }
  return (
    <div className="cartItem font-sfpro py-4 flex gap-[15px] items-center justify-center">
      <Image
        src={props.img}
        alt="itemImage"
        width={90}
        height={90}
      />
      <div className="flex flex-col md:flex-row">
        <div className="text flex flex-col gap-2 md:w-[193px]">
          <h3 className="title font-medium text-base leading-6">
            {props.title}
          </h3>
          <h3 className="id font-normal text-sm leading-6">#{props.id}</h3>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="quantity flex gap-2 items-center justify-center">
            <Image
              src={Decrement}
              alt="Decrement"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={decrementHandler}
            />
            <div className="border-[0.5px] border-[#d9d9d9] py-2 px-4 rounded-[4px] font-medium leading-4 text-base">
              {props.quantity}
            </div>
            <Image
              src={Increment}
              alt="Increment"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={incrementHandler}
            />
          </div>
          <p className="price font-medium leading-8 text-xl">${parseFloat(props.price*props.quantity).toFixed(2)}</p>
          <Image src={Close} alt="CloseIcon" width={24} height={24} className="cursor-pointer" onClick={removeHandler}/>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

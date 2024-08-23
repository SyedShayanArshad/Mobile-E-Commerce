"use client";
import React, { useEffect } from "react";
import CartItem from "@/components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "@/components/DefaultLayout";
import {
  setSubTotal,
  setEstimatedShipping,
  setTotal,
  setEstimatedTax,
} from "@/lib/features/payment/PaymentSlice";

function ShoppingCart() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItemsList = useSelector((state) => state.cart.cartItems);
  const SubTotal = useSelector((state) => state.cart.totalPrice);
  const EstimatedTax = useSelector((state) => state.payment.estimatedTax);
  const EstimatedShipping = useSelector(
    (state) => state.payment.estimatedShipping
  );
  const Total = SubTotal + EstimatedTax + EstimatedShipping;
  useEffect(() => {
    dispatch(setSubTotal(SubTotal));
    dispatch(setEstimatedShipping());
    dispatch(setEstimatedTax());
    dispatch(setTotal());
  }, [SubTotal,dispatch]);
  const checkOutHandler = () => {
    if (Total) {
      router.push("/Step_1");
    } else {
      toast.error("Please Select the product First!", {
        autoClose: 1000,
        position: "top-center",
        hideProgressBar: true,
        style: {
          borderRadius: "10px",
        },
      });
    ;
    }
  };
  return (
    <DefaultLayout>
      <section className="py-10 md:py-28 px-4 md:px-20 border min-h-[880px] font-sfpro flex gap-12 flex-col md:flex-row">
        <ToastContainer/>
        <div className="CartItems flex flex-col gap-10 md:min-w-[536px]">
          <h1 className="text-2xl leading-6 font-semibold">Shopping Cart</h1>
          <div className="ItemsList flex flex-col gap-10">
            {cartItemsList.map((item) => (
              <React.Fragment key={item.id}>
                <CartItem
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  quantity={item.quantity}
                />
                <hr className="border-t-[0.5px] border-[#a3a3a3] w-[341px] md:w-[536px]" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="orderSummary rounded-[10px] border-[#ebebeb] border py-14 px-16 flex flex-col justify-center md:justify-normal items-center gap-10">
          <h3 className="font-bold text-xl leading-4">Order Summary</h3>
          <div>
            <p className="font-medium text-sm leading-4 pb-2">
              Discount code / Promo code
            </p>
            <input
              type="text"
              placeholder="Code"
              className="py-4 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
            />
            <p className="font-medium text-sm leading-4 pt-6 pb-2">
              Your bonus card number
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Card Number"
                className="py-4 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
              />
              <button className="p-2 border w-[76.45px] rounded-md text-xs absolute right-3 md:right-4 top-3">
                Apply
              </button>
            </div>
            <span className="flex justify-between w-[309px] md:w-[408px]">
              <p className="font-medium text-base leading-6 pt-6 pb-4">
                Subtotal
              </p>
              <span className="font-medium pt-6">${SubTotal.toFixed(2)}</span>
            </span>
            <span className="flex justify-between w-[309px] md:w-[408px]">
              <p className="font-normal text-base leading-8">Estimated Tax</p>
              <span className="font-medium">${EstimatedTax.toFixed(2)}</span>
            </span>
            <span className="flex justify-between w-[309px] md:w-[408px]">
              <p className="font-normal text-base leading-8 pt-2 pb-4">
                Estimated Shipping & Handling
              </p>
              <span className="font-medium">
                ${EstimatedShipping.toFixed(2)}
              </span>
            </span>
            <span className="flex justify-between w-[309px] md:w-[408px]">
              <p className="font-medium text-base leading-6 pb-12">Total</p>
              <span className="font-medium">${Total.toFixed(2)}</span>
            </span>
            <button
              className="py-4 px-14 rounded-md text-white bg-black w-[309px] md:w-[408px]"
              onClick={checkOutHandler}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ShoppingCart;

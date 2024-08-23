"use client";
import React, { useState } from "react";
import Image from "next/image";
import BuyingItem from "@/components/BuyingItem";
import CreditCard from "/public/images/creditCard.png";
import PayPal from "/public/images/PayPal.png";
import PayPalCredit from "/public/images/PayPalCredit.png";
import Location from "/public/images/Location_1.png"
import Shipping from "/public/images/Shipping.png"
import Payment from "/public/images/Payment.png"
import { useSelector } from "react-redux";
import {useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { clearCart } from "@/lib/features/cart/CartSlice";
import { clearPayment } from "@/lib/features/payment/PaymentSlice";
import DefaultLayout from "@/components/DefaultLayout";

function Step_3() {
  const router = useRouter();
  const dispatch = useDispatch();
  const buyingItems = useSelector((state) => state.cart.cartItems);
  const SubTotal = useSelector((state) => state.payment.subTotal);
  const EstimatedTax = useSelector((state) => state.payment.estimatedTax);
  const EstimatedShipping = useSelector(
    (state) => state.payment.estimatedShipping
  );
  const Total = useSelector((state) => state.payment.total);
  const ShipmentMethod = useSelector(
    (state) => state.payment.selectedShipmentMethod
  );
  const Address = useSelector((state) => state.payment.selectedAddress);
  const [paymentOption, setPaymentOption] = useState("CreditCard");

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const getPaymentImage = () => {
    switch (paymentOption) {
      case "PayPal":
        return PayPal;
      case "PayPalCredit":
        return PayPalCredit;
      default:
        return CreditCard;
    }
  };

  const PayHandler = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    dispatch(clearPayment());
    Swal.fire({
      title: "Congratulations!",
      text: "You have purchased the products!",
      icon: "success",
    });
    router.push("/Home")
  };

  return (
    <DefaultLayout>
      <div className="font-sfpro">
        <div className="steps h-[184px] md:py-[72px] py-8 px-4 md:px-40 flex justify-around md:justify-between">
          <Link href={"/Step_1"}>
            <div className="step_1 hidden md:flex gap-2 items-center justify-center">
              <Image
                src={Location}
                alt="location"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="font-medium text-[#b2b2b2]">
                <p className="text-sm leading-4">Step 1</p>
                <p className="text-[19px] leading-6">Address</p>
              </div>
            </div>
          </Link>
          <Link href={"/Step_2"}>
            <div className="step_2 flex gap-2 items-center justify-center">
              <Image
                src={Shipping}
                alt="shipping"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="font-medium text-[#b2b2b2]">
                <p className="text-sm leading-4">Step 2</p>
                <p className="text-[19px] leading-6">Shipping</p>
              </div>
            </div>
          </Link>
          <Link href={"/Step_3"}>
            <div className="step_3 flex gap-2 items-center justify-center">
              <Image
                src={Payment}
                alt="payment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="font-medium text-black">
                <p className="text-sm leading-4">Step 3</p>
                <p className="text-[19px] leading-6">Payment</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="content pt-6 pb-[72px] md:px-40 px-4 flex flex-col md:flex-row gap-24">
          <div className="summary flex flex-col gap-6 md:w-[512px]">
            <h2 className="font-medium text-xl leading-4">Summary</h2>
            <div className="buyingItemList flex flex-col gap-4">
              {buyingItems.map((item) => (
                <BuyingItem
                  key={item.id}
                  img={item.img}
                  price={item.price * item.quantity}
                  title={item.title}
                />
              ))}
            </div>
            <div className="details flex flex-col gap-6">
              <div className="address flex flex-col gap-4">
                <h6 className="font-medium leading-4 text-sm text-[#545454]">
                  Address
                </h6>
                <p className="address font-normal text-base leading-6 ">
                  {Address}
                </p>
                <h6 className="font-medium leading-4 text-sm text-[#545454]">
                  Shipment Method
                </h6>
                <p className="shipmentMethod font-normal text-base leading-6 capitalize">
                  {ShipmentMethod}
                </p>
              </div>
              <div className="SubTotal flex flex-col gap-4">
                <span className=" subTotal font-medium text-base flex justify-between items-center gap-4">
                  <h6 className="leading-6">Subtotal</h6>
                  <p className="leading-8">${SubTotal}</p>
                </span>
                <span className=" estimatedTax text-base flex justify-between items-center gap-4">
                  <h6 className="leading-8 font-normal text-[#545454]">
                    Estimated Tax
                  </h6>
                  <p className="leading-8 font-medium">${EstimatedTax}</p>
                </span>
                <span className=" estimatedShipping & Handing text-base flex justify-between items-center gap-4">
                  <h6 className="leading-8 font-normal text-[#545454]">
                    Estimated Shipping & Handing
                  </h6>
                  <p className="leading-8 font-medium">${EstimatedShipping}</p>
                </span>
                <span className=" total & Handing text-base flex justify-between items-center gap-4">
                  <h6 className="leading-6 font-medium">Total</h6>
                  <p className="leading-6 font-semibold">${Total}</p>
                </span>
              </div>
            </div>
          </div>
          <form
            className="payment flex flex-col gap-[49px]"
            onSubmit={PayHandler}
          >
            <div className="detail flex flex-col gap-10">
              <h6 className="font-bold text-xl leading-4">Payment</h6>
              <div className="paymentOption flex gap-14 font-medium text-sm leading-4 justify-center md:justify-normal">
                <p
                  onClick={() => handlePaymentOption("CreditCard")}
                  className="cursor-pointer"
                >
                  Credit Card
                </p>
                <p
                  onClick={() => handlePaymentOption("PayPal")}
                  className="cursor-pointer"
                >
                  Paypal
                </p>
                <p
                  onClick={() => handlePaymentOption("PayPalCredit")}
                  className="cursor-pointer"
                >
                  Paypal Credit
                </p>
              </div>
              <Image
                src={getPaymentImage()}
                alt="payment option"
                width={337}
                height={188}
                className="max-w-[337px] max-h-[188px] m-auto"
              />
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="border-[0.5px] rounded-[7px] border-[#cecece] text-[#979797] py-3 px-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border-[0.5px] rounded-[7px] border-[#cecece] text-[#979797] py-3 px-4"
                  required
                  pattern="\d{13,19}"
                  maxLength="19"
                  inputMode="numeric"
                  autoComplete="cc-number"
                />
                <div className="flex gap-4">
                  <input
                    type="month"
                    placeholder="Exp.Date"
                    className="border-[0.5px] rounded-[7px] border-[#cecece] text-[#979797] py-3 px-4 w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border-[0.5px] rounded-[7px] border-[#cecece] text-[#979797] py-3 px-4 w-full"
                    required
                    pattern="\d{3,4}"
                    maxLength="4"
                  />
                </div>
              </div>
            </div>
            <div className="checkbox flex gap-2 items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 accent-black"
              />
              <p className="font-medium text-[15px] leading-6 ">
                Same as billing address
              </p>
            </div>
            <div className="navActions flex gap-[23px] items-center justify-center">
              <button
                type="button"
                className="rounded-md border  w-40 md:w-[207px] h-[64px]"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                className="rounded-md border bg-black text-white w-40 md:w-[207px] h-[64px]"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Step_3;

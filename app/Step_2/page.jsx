"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch,useSelector} from "react-redux";
import { setSelectedShipmentMethod } from "@/lib/features/payment/PaymentSlice";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";

import LocationImage from "@/public/images/Location_1.png";
import ShippingImage from "@/public/images/Shipping_1.png";
import PaymentImage from "@/public/images/Payment_1.png";

function Step_2() {
  const dispatch = useDispatch();
  const router = useRouter();
  const defaultMethod = useSelector(state=>state.payment.selectedShipmentMethod)
  const [selectedMethod, setSelectedMethod] = useState(defaultMethod);
  const today = new Date().toISOString().split("T")[0];
  const AdvancedDate = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const Day15 = new Date(AdvancedDate);
  Day15.setDate(AdvancedDate.getDate() + 15);
  const RegularShipmentDate = Day15.toLocaleDateString("en-GB", options);
  const Day7 = new Date(AdvancedDate);
  Day7.setDate(AdvancedDate.getDate() + 7);
  const FastDelivery = Day7.toLocaleDateString("en-GB", options);
  const handleSelection = (method) => {
    setSelectedMethod(method);
  };
  return (
    <DefaultLayout>
      <div className="font-sfpro">
        <div className="steps h-[184px] md:py-[72px] py-8 px-4 md:px-40 flex justify-around md:justify-between">
          <Link href={"/Step_1"}>
            <div className="step_1 hidden md:flex gap-2 items-center justify-center">
              <Image
                src={LocationImage}
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
                src={ShippingImage}
                alt="shipping"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="font-medium text-black">
                <p className="text-sm leading-4">Step 2</p>
                <p className="text-[19px] leading-6">Shipping</p>
              </div>
            </div>
          </Link>
          <Link href={"/Step_3"}>
            <div className="step_3 flex gap-2 items-center justify-center">
              <Image
                src={PaymentImage}
                alt="payment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="font-medium text-[#b2b2b2]">
                <p className="text-sm leading-4">Step 3</p>
                <p className="text-[19px] leading-6">Payment</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="content py-12 md:px-40 px-4">
          <div className="flex flex-col gap-8">
            <h1 className="font-semibold text-xl leading-6 text-[#17183b]">
              Shipment Method
            </h1>
            <div className="flex flex-col gap-4">
              <div
                className="Method_1 rounded-xl border border-[#d1d1d8] flex items-center justify-between p-6 cursor-pointer"
                onClick={() => handleSelection("free")}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <span className="flex gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedMethod === "free"}
                      className="w-6 h-6 accent-black cursor-pointer"
                    />
                    <span
                      className={`font-medium text-base leading-6 ${
                        selectedMethod === "free"
                          ? "text-[#17183b]"
                          : "text-[#a2a3b1]"
                      }`}
                    >
                      Free
                    </span>
                  </span>
                  <p
                    className={`font-normal text-base leading-6 ${
                      selectedMethod === "free"
                        ? "text-[#17183b]"
                        : "text-[#a2a3b1]"
                    }`}
                  >
                    Regular shipment
                  </p>
                </div>
                <p
                  className={`font-medium text-base leading-6 ${
                    selectedMethod === "free"
                      ? "text-[#17183b]"
                      : "text-[#a2a3b1]"
                  }`}
                >
                  {RegularShipmentDate}
                </p>
              </div>
              <div
                className="Method_2 rounded-xl border border-[#d1d1d8] flex items-center justify-between p-6 cursor-pointer"
                onClick={() => handleSelection("Fast Delivery")}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <span className="flex gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedMethod === "Fast Delivery"}
                      className="w-6 h-6 accent-black cursor-pointer"
                    />
                    <span
                      className={`font-medium text-base leading-6 ${
                        selectedMethod === "Fast Delivery"
                          ? "text-[#17183b]"
                          : "text-[#a2a3b1]"
                      }`}
                    >
                      $8.50
                    </span>
                  </span>
                  <p
                    className={`font-normal text-base leading-6 ${
                      selectedMethod === "Fast Delivery"
                        ? "text-[#17183b]"
                        : "text-[#a2a3b1]"
                    }`}
                  >
                    Get your delivery as soon as possible
                  </p>
                </div>
                <p
                  className={`font-medium text-base leading-6 ${
                    selectedMethod === "Fast Delivery"
                      ? "text-[#17183b]"
                      : "text-[#a2a3b1]"
                  }`}
                >
                  {FastDelivery}
                </p>
              </div>
              <div
                className="Method_3 rounded-xl border border-[#d1d1d8] items-center flex justify-between p-6 cursor-pointer"
                onClick={() => handleSelection("schedule")}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <span className="flex gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      checked={selectedMethod === "schedule"}
                      className="w-6 h-6 accent-black cursor-pointer"
                    />
                    <span
                      className={`font-medium text-base leading-6 ${
                        selectedMethod === "schedule"
                          ? "text-[#17183b]"
                          : "text-[#a2a3b1]"
                      }`}
                    >
                      Schedule
                    </span>
                  </span>
                  <p
                    className={`font-normal text-base leading-6 ${
                      selectedMethod === "schedule"
                        ? "text-[#17183b]"
                        : "text-[#a2a3b1]"
                    }`}
                  >
                    Pick a date when you want to get your delivery
                  </p>
                </div>
                {selectedMethod === "schedule" ? (
                  <input
                    type="date"
                    min={today}
                    className="font-medium text-base leading-6 text-[#17183b] border border-[#d1d1d8] rounded-md p-2"
                  />
                ) : (
                  <p
                    className={`font-medium text-base leading-6 ${
                      selectedMethod === "schedule"
                        ? "text-[#17183b]"
                        : "text-[#a2a3b1]"
                    }`}
                  >
                    Select Date
                  </p>
                )}
              </div>
            </div>
            <div className="navButton flex gap-[23px] md:pt-[150px] md:justify-end justify-center">
              <button
                className="rounded-md border  w-40 md:w-[207px] h-[64px]"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                className="rounded-md border bg-black text-white w-40 md:w-[207px] h-[64px]"
                onClick={() => {
                  dispatch(setSelectedShipmentMethod(selectedMethod));
                  router.push("/Step_3");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Step_2;

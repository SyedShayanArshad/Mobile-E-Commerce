"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AddressItem from "@/components/AddressItem";
import AddressForm from "@/components/AddressForm";
import { useSelector } from "react-redux";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";
import LocationImg from "/public/images/Location.png";
import ShippingImg from "/public/images/Shipping.png";
import PaymentImg from "/public/images/Payment_1.png";
import AddNewImg from "/public/images/AddNew.png";

function Step_1() {
  const AddressList = useSelector((state) => state.address.AddressList);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const router = useRouter();
  const AddAddressHandler = () => {
    setIsAddAddress(true);
  };
  const closeHandler = () => {
    setIsAddAddress((a) => !a);
  };
  return (
    <DefaultLayout>
      <div className="font-sfpro">
        <div className="steps h-[184px] md:py-[72px] py-8 px-4 md:px-40 flex justify-around md:justify-between">
          <Link href={"/Step_1"}>
            <div className="step_1 flex gap-2 items-center justify-center">
              <Image
                src={LocationImg}
                alt="location"
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <div className="font-medium text-black">
                <p className="text-sm leading-4">Step 1</p>
                <p className="text-[19px] leading-6">Address</p>
              </div>
            </div>
          </Link>
          <Link href={"/Step_2"}>
            <div className="step_2 flex gap-2 items-center justify-center">
              <Image
                src={ShippingImg}
                alt="shipping"
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <div className="font-medium text-[#b2b2b2]">
                <p className="text-sm leading-4">Step 2</p>
                <p className="text-[19px] leading-6">Shipping</p>
              </div>
            </div>
          </Link>
          <Link href={"/Step_3"}>
            <div className="step_3 hidden md:flex gap-2 items-center justify-center">
              <Image
                src={PaymentImg}
                alt="payment"
                className="w-6 h-6"
                width={24}
                height={24}
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
              Select Address
            </h1>
            <div className="AddressList flex flex-col gap-4">
              {AddressList.map((address, index) => (
                <AddressItem
                  key={index}
                  label={address.label}
                  type={address.type}
                  phoneNo={address.phoneNo}
                  address={address.address}
                  id={address.id}
                />
              ))}
            </div>
            <div
              className="AddNew flex flex-col gap-2 cursor-pointer"
              onClick={AddAddressHandler}
            >
              <Image src={AddNewImg} alt="Add New" />
              <p className="font-normal leading-4 text-sm text-center">
                Add New Address
              </p>
            </div>
            {isAddAddress && (
              <div className="AddressFormModal">
                <AddressForm status={closeHandler} />
              </div>
            )}
            <div className="navButton flex gap-[23px] md:pt-[150px] md:justify-end justify-center">
              <button
                className="rounded-md border  w-40 md:w-[207px] h-[64px]"
                onClick={() => router.back()}
              >
                Back
              </button>
              {AddressList.length > 0 ? (
                <button
                  className="rounded-md border bg-black text-white w-40 md:w-[207px] h-[64px]"
                  onClick={() => router.push("/Step_2")}
                >
                  Next
                </button>
              ) : (
                <button
                  className="rounded-md border bg-gray-500 text-white w-40 md:w-[207px] h-[64px] cursor-not-allowed"
                  disabled
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Step_1;

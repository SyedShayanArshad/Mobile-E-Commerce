import React, { useState } from "react";
import Image from "next/image";
import Pencil from "@/public/images/Pencil.png";
import Close from "@/public/images/Close.png";
import { removeAddress } from "@/lib/features/address/AddressSlice";
import { setSelectedAddress } from "@/lib/features/payment/PaymentSlice";
import { useDispatch, useSelector } from "react-redux";
import EditAddressForm from "./EditAddressForm";

function AddressItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const SelectedAddress = useSelector((state) => state.payment.selectedAddress);
  const dispatch = useDispatch();

  const removeAddressHandler = (e) => {
    e.stopPropagation()
    dispatch(removeAddress({ address: props.address }));
  };

  const editAddressHandler = (e) => {
    e.stopPropagation()
    setIsEdit(true);
  };

  const handleRadioChange = (e) => {
    dispatch(setSelectedAddress(props.address));
  };

  return (
    <div className="p-6 flex items-center justify-between rounded-[7px] bg-[#f6f6f6] font-sfpro cursor-pointer" onClick={handleRadioChange}>
      <div className="content flex flex-col gap-4">
        <div className="headings flex gap-4 items-center">
          <input
            type="radio"
            name="address"
            checked={SelectedAddress === props.address}
            className="w-6 h-6 accent-black"
            onChange={handleRadioChange}
          />
          <p className="title font-normal text-lg leading-6">{props.label}</p>
          <div className="label bg-black text-white py-1 px-2 rounded uppercase">
            {props.type}
          </div>
        </div>
        <div className="info pl-10 flex flex-col gap-2 text-[#17183b] font-normal text-base leading-6 w-auto">
          <p className="address">{props.address}</p>
          <p className="phone">{props.phoneNo}</p>
        </div>
      </div>
      <div className="actions flex gap-6 items-center">
        <Image
          src={Pencil}
          alt="Pencil icon"
          width={16}
          height={16}
          className="cursor-pointer"
          onClick={editAddressHandler}
        />
        <Image
          src={Close}
          alt="Close icon"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={removeAddressHandler}
        />
      </div>
      {isEdit && (
        <EditAddressForm
          existingAddress={{
            address: props.address,
            label: props.label,
            phoneNo: props.phoneNo,
            type: props.type,
            id: props.id,
          }}
          onClose={() => setIsEdit(false)}
        />
      )}
    </div>
  );
}

export default AddressItem;

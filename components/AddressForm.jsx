import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { AddAddress } from "@/lib/features/address/AddressSlice";
import { useDispatch } from "react-redux";
function AddressForm(props) {
  const dispatch = useDispatch()
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddAddress({label:label,address:address,phoneNo:phoneNumber,type:type}))
    props.status()
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-lg rounded-md flex flex-col gap-3"
      >
        <button className="self-end" onClick={() => props.status()}>
          <FaTimes/>
        </button>
        <h1 className="font-bold text-lg leading-6 text-center">
          Add New Address
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Label</h2>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Address</h2>
          <input
            type="text"
            id="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Phone Number</h2>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Type</h2>
          <input
            type="text"
            id="label"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Home or Office"
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>
        <div className="button flex gap-2">
          <button className=" hover:bg-red-500 hover:text-white py-3  rounded-md w-full border border-red-500 text-red-500" onClick={()=>props.status()}>
            Cancel
          </button>
          <button
            type="submit"
            className="hover:bg-green-500 hover:text-white py-3 rounded-md w-full border border-green-500 text-green-500"
          >
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;

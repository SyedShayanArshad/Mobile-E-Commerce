import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { editAddress } from "@/lib/features/address/AddressSlice";
import { useDispatch } from "react-redux";

function EditAddressForm({ existingAddress, onClose }) {
  const dispatch = useDispatch();
  const [newAddress, setAddress] = useState(existingAddress.address);
  const [phoneNumber, setPhoneNumber] = useState(existingAddress.phoneNo);
  const [label, setLabel] = useState(existingAddress.label);
  const [type, setType] = useState(existingAddress.type);
  const id = existingAddress.id;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editAddress({
      address: newAddress, // existing address to be updated
      label: label,
      phoneNo: phoneNumber,
      type: type,
      id:id
    }));
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-lg rounded-md flex flex-col gap-3"
      >
        <button className="self-end" onClick={() => onClose()}>
          <FaTimes />
        </button>
        <h1 className="font-bold text-lg leading-6 text-center">
          Edit Address
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
            value={newAddress}
            onChange={(e) => setAddress(e.target.value)}
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Phone Number</h2>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-base leading-6">Type</h2>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Home or Office"
            className="py-3 pl-4 border-[0.5px] rounded-[7px] border-[#9F9F9F] w-[309px] md:w-[408px]"
          />
        </div>
        <div className="button flex gap-2">
          <button
            type="button"
            className="hover:bg-red-500 hover:text-white py-3 rounded-md w-full border border-red-500 text-red-500"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="hover:bg-green-500 hover:text-white py-3 rounded-md w-full border border-green-500 text-green-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAddressForm;

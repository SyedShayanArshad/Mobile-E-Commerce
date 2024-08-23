import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddressList: [],
};

const AddressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    AddAddress: (state, action) => {
      state.AddressList.push({
        label: action.payload.label,
        address: action.payload.address,
        phoneNo: action.payload.phoneNo,
        type: action.payload.type,
        id: Date.now().toString()
      });
      state.totalAdress++
    },
    removeAddress: (state, action) => {
      const existingAddress = state.AddressList.find(
        (item) => item.address === action.payload.address
      );
      if (existingAddress) {
        state.AddressList = state.AddressList.filter(
          (item) => item.address !== existingAddress.address
        );
      }
    },
    editAddress: (state, action) => {
      const { address, label, phoneNo, type, id } = action.payload;
      const existingAddressIndex = state.AddressList.findIndex(
        (item) => item.id === id
      );

      if (existingAddressIndex !== -1) {
        console.log("true")
        state.AddressList[existingAddressIndex] = {
          address,
          label,
          phoneNo,
          type,
        };
      }
    },
  },
});

export const { AddAddress, removeAddress, editAddress } = AddressSlice.actions;
export default AddressSlice.reducer;

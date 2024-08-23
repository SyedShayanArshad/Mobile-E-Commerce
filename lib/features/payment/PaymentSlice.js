import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: "",
  selectedShipmentMethod: "free",
  subTotal: 0,
  estimatedTax: 0,
  estimatedShipping: 0,
  total: 0,
};

const PaymentSlice = createSlice({
  name: "Payment",
  initialState,
  reducers: {
    setSelectedAddress(state, action) {
      state.selectedAddress = action.payload;
    },
    setSelectedShipmentMethod(state, action) {
      state.selectedShipmentMethod = action.payload;
    },
    setSubTotal(state, action) {
      state.subTotal = action.payload;
      state.total =
        state.subTotal + state.estimatedTax + state.estimatedShipping;
    },
    setEstimatedTax(state) {
      state.estimatedTax = parseFloat((0.02 * state.subTotal).toFixed(2));
      state.total =
        state.subTotal + state.estimatedTax + state.estimatedShipping;
    },
    setEstimatedShipping(state) {
      state.estimatedShipping = parseFloat((0.05 * state.subTotal).toFixed(2));
      state.total =
        state.subTotal + state.estimatedTax + state.estimatedShipping;
    },
    setTotal(state) {
      state.total =
        state.subTotal + state.estimatedTax + state.estimatedShipping;
    },
    clearPayment: (state) => {
      state.selectedAddress = "";
      state.selectedShipmentMethod = "free";
      state.subTotal = 0;
      state.estimatedTax = 0;
      state.estimatedShipping = 0;
      state.total = 0;
    },
  },
});

export const {
  setSelectedAddress,
  setSelectedShipmentMethod,
  setSubTotal,
  setEstimatedTax,
  setEstimatedShipping,
  setTotal,
  clearPayment,
} = PaymentSlice.actions;

export default PaymentSlice.reducer;

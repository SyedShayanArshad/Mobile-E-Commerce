import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartedItems: 0,
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          id: Date.now().toString(),
          quantity: 1,
        });
      }
      state.cartedItems++;
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    decreaseFromCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.title !== action.payload.title
          );
        }
        state.cartedItems--;
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.title !== action.payload.title
        );
      }
      state.cartedItems -= existingItem.quantity;
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cartedItems = 0;
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

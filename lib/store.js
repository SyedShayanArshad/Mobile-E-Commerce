import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import AddressSlice from "./features/address/AddressSlice";
import PaymentSlice from "./features/payment/PaymentSlice";
import AllProductSlice from "./features/AllProducts/AllProductSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import FavouriteSlice from "./features/Favourite/FavouriteSlice";

const persistConfig = {
  key:"root",
  storage,
}
const rootReducer = combineReducers({
  cart: CartSlice,
  address: AddressSlice,
  payment: PaymentSlice,
  AllProducts: AllProductSlice,
  Favourites:FavouriteSlice,
})
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
  });
};

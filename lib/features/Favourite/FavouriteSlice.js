import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesCount: 0,
  favouriteItems: [],
};

const favouriteSlice = createSlice({
  name: "Favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const existingItem = state.favouriteItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        state.favouriteItems = state.favouriteItems.filter(
          (item) => item.title !== action.payload.title
        );
        state.favouritesCount--;
      } else {
        state.favouriteItems.push({
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
        });
        state.favouritesCount++;
      }
    },
  },
});

export const { addToFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

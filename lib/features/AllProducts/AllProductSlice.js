import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    AllProducts : []
  };
  const AllProductSlice = createSlice({
    name: "AllProducts",
    initialState,
    reducers: {
        AddProducts:(state,action)=>{
            state.AllProducts = action.payload
        }
    }
  });
  
  export const { AddProducts
  } = AllProductSlice.actions;
  
  export default AllProductSlice.reducer;
  
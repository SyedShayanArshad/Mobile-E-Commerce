"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AddProducts } from "@/lib/features/AllProducts/AllProductSlice";

const GetProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/search?q=phone"
        );
        const data = response.data;
        dispatch(AddProducts(data.products));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  return null; // This component does not render anything
};
export default GetProducts;

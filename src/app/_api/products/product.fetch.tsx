import { productType } from "@/app/_components/ProductsCard/interface";
import axios from "axios";
import React from "react";
import { toast } from "sonner";

export default async function productFetch() {
  let productsData: productType[] = [];
  try {
    await axios
      .get("https://nti-ecommerce.vercel.app/api/v1/products")
      .then((res) => {
        productsData = res.data.Products;
      });
  } catch (err: any) {
    if (!err.response) {
      // Network error - no internet connection
      toast.error("Network error! Please check your internet connection.");
    } else if (err.response?.status >= 500) {
      // Server error (500+)
      toast.error("Server error! Please try again later.");
    } else {
      // Other errors (400, 401, 403, 404, etc.)
      toast.error(
        "Error: " + (err.response?.data?.message || "Something went wrong"),
      );
    }
    toast.error("Failed Fetch Products.");
  }

  return productsData;
}

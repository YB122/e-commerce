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
  } catch (err) {
    toast.error("Failed Fetch Products");

    // throw error;
  }

  return productsData;
}

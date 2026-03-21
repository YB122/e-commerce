import axios from "axios";
import React from "react";
import { toast } from "sonner";
import { brandType } from "./interface";

export default async function brandsFetch() {
  let brandsData: brandType[] = [];
  try {
    await axios
      .get("https://nti-ecommerce.vercel.app/api/v1/brands")
      .then((res) => {
        brandsData = res.data.brands;
      });
  } catch (err) {
    toast.error("Failed Fetch Brands");

    // throw error;
  }
  return brandsData;
}

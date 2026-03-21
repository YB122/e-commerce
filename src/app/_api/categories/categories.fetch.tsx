import axios from "axios";
import React from "react";
import { toast } from "sonner";

export default async function CategoriesFetch() {
  let categoriesData: categoryType[] = [];
  try {
    await axios
      .get("https://nti-ecommerce.vercel.app/api/v1/categories")
      .then((res) => {
        categoriesData = res.data.categories;
      });
  } catch (err) {
    toast.error("Failed Fetch Categories");

    // throw error;
  }
  return categoriesData;
}

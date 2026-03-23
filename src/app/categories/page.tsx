import React from "react";
import CategoriesFetch from "../_api/categories/categories.fetch";
import CategoriesCard from "../_components/categories/categoriesCard";
import PaginationCategories from "../_components/paginationCategories/page";

export default async function Categories() {
  let categoriesData: categoryType[] = [];

  categoriesData = await CategoriesFetch();

  return (
    <div className="container mx-auto mt-4 flex flex-col gap-4">
      <div className="grid gap-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {categoriesData.map((cat) => (
          <CategoriesCard key={cat._id} name={cat.name} image={cat.image} />
        ))}
      </div>
      <div className="flex justify-center">
        <PaginationCategories />
      </div>
    </div>
  );
}

import React from "react";
import CategoriesFetch from "../_api/categories/categories.fetch";
import CategoriesCard from "../_components/categories/categoriesCard";

export default async function Categories() {
  let categoriesData: categoryType[] = [];

  categoriesData = await CategoriesFetch();

  return (
    <>
      <div className="container mx-auto gap-7 grid lg:grid-cols-4 md:grid-cols-2">
        {categoriesData.map((cat) => (
          <CategoriesCard key={cat._id} name={cat.name} image={cat.image} />
        ))}
      </div>
    </>
  );
}

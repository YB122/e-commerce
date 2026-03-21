import React from "react";
import { productType } from "../_components/ProductsCard/interface";
import ProductsCard from "../_components/ProductsCard/ProductsCard";
import productFetch from "../_api/products/product.fetch";
import CategoriesFetch from "../_api/categories/categories.fetch";
import { brandType } from "../_api/brands/interface";
import brandsFetch from "../_api/brands/brands.fetch";

export default async function Products() {
  let productsData: productType[] = [];
  productsData = await productFetch();
  let categoriesData: categoryType[] = [];
  categoriesData = await CategoriesFetch();
  let brandsData: brandType[] = [];
  brandsData = await brandsFetch();

  return (
    <>
      <div className="container mx-auto gap-7 grid lg:grid-cols-3 md:grid-cols-2">
        {productsData.map((product) => {
          let category = categoriesData.find(
            (cat) => cat._id == product.category,
          );
          let brand = brandsData.find((brand) => brand._id == product.brand);

          return (
            <ProductsCard
              key={product._id}
              product={product}
              category={category?.name}
              brand={brand?.name}
            />
          );
        })}
      </div>
    </>
  );
}

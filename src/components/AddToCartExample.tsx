"use client";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cartSlice";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

interface AddToCartExampleProps {
  product: Product;
}

export default function AddToCartExample({ product }: AddToCartExampleProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button onClick={handleAddToCart} className="flex items-center gap-2">
      <ShoppingCart className="size-4" />
      Add to Cart
    </Button>
  );
}

// Example usage:
// <AddToCartExample 
//   product={{
//     id: "1", 
//     name: "Sample Product", 
//     price: 29.99,
//     image: "/product-image.jpg"
//   }} 
// />

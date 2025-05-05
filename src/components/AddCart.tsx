"use client";
import { Product } from "@/types/global";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCartStore } from "@/store";

export default function AddCart({ product }: { product: Product }) {
  const [value, setValue] = useState<string>("");
  const { cartList, addToCart, isItemInCart, updateQuantity } = useCartStore()
  const handleValueChange = (value: string) => {
    console.log("value--", value);
    setValue(value);
  };
const handleCartAdd = () => {
  const index = isItemInCart(product.name, value)
  if (index < 0) {
    addToCart({
      product,
      quantity: 1,
      selectedVariant: value
    })
  } else {
    updateQuantity(index, cartList[index].quantity + 1)
  }
  setValue('')
}

  return (
    <div className="w-80">
      <h3>Select</h3>
      <ToggleGroup
        type="single"
        className="justify-start py-6 border-b mb-6"
        variant="outline"
        value={value}
        onValueChange={handleValueChange}
      >
        {product.variant &&
          product.variant.map((child, ci) => (
            <ToggleGroupItem
              className="px-4 bg-slate-50 mr-3"
              key={ci}
              value={child}
            >
              {child}
            </ToggleGroupItem>
          ))}
      </ToggleGroup>
      <h3>Price</h3>
      <p className="text-2xl font-bold text-red-400 mb-6">${product.price}</p>
      <Button disabled={value ? false : true} variant="outline" onClick={handleCartAdd} >
        Add to Cart
      </Button>
    </div>
  );
}

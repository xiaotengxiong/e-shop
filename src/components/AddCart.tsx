"use client";
import { Product } from "@/types/global";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddCart({ product }: { product: Product }) {
  const [value, setValue] = useState<string>("");
  const handleValueChange = (value: string) => {
    console.log("value--", value);
    setValue(value);
  };
  return (
    <div className="w-80">
      <h3>Select</h3>
      <ToggleGroup
        type="single"
        className="justify-start py-6 border-b mb-6"
        variant="outline"
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
      <Button disabled={value ? false : true} variant="outline">
        Add to Cart
      </Button>
    </div>
  );
}

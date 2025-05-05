"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Title, MenuList } from "@/lib/constants";
import { Fragment } from "react";
import { useCartStore } from "@/store";
export default function Header() {
  const { cartList } = useCartStore();
  return (
    <>
      <div className="h-16 border-b px-10 bg-white">
        <div className="container flex items-center justify-between h-full">
          <h1 className="text-2xl">
            <Link href="/">{Title}</Link>
          </h1>
          <div className="flex justify-end space-x-4 text-sm h-1/3">
            {MenuList.map((item, i) => (
              <Fragment key={i}>
                {i !== 0 && <Separator orientation="vertical"></Separator>}
                <div className="ml-4">
                  <Link href={item.href}>{item.text}</Link>
                </div>
              </Fragment>
            ))}
            {cartList.length ? `(${cartList.length})` : ""}
          </div>
        </div>
      </div>
    </>
  );
}

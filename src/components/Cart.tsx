"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "@/store";

export default function Cart() {
  const { cartList, removeFromCart, updateQuantity } = useCartStore();
  const quantiryOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const handleDelete = (index: number) => {
    removeFromCart(index);
  };

  const handleValueChange = (value: string, index: number) => {
    updateQuantity(index, Number(value));
  };

  return (
    <div className="container">
      {cartList.length ? (
        <div className="py-24 px-2 flex">
          <div className="flex-1 mr-14">
            <h2 className="text-2xl font-bold">Cart</h2>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Item</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartList.map((cartItem, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center">
                        <Image
                          src={cartItem.product.image}
                          alt={cartItem.product.name}
                          width={64}
                          height={64}
                          priority
                          style={{
                            width: "64px",
                            height: "64px",
                            objectFit: "cover",
                          }}
                        ></Image>
                        <div className="ml-4 space-y-3 w-[200px]">
                          <p className="text-sm font-medium">
                            {cartItem.product.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {cartItem.selectedVariant}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>{cartItem.product.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Trash2
                          className="mr-1"
                          color="gray"
                          cursor="pointer"
                          onClick={() => handleDelete(i)}
                        ></Trash2>
                        <Select
                          value={String(cartItem.quantity)}
                          onValueChange={(value: string) => handleValueChange(value, i)}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            {quantiryOptions.map((qutantiry, i) => (
                              <SelectItem key={i} value={String(qutantiry)}>
                                {qutantiry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ${cartItem.product.price * cartItem.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-56">
            <h2 className="font-sans font-medium flex flex-row text-2xl mb-6">
              Total
            </h2>
            <p className="text-2xl font-bold text-red-400 mb-6">${cartList.reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.quantity, 0).toFixed(2)}</p>
            <Link href="/account">
              <Button className="w-full">Login</Button>
            </Link>
            <p className="text-sm text-slate-500 text-center mt-1">
              you need to login to checkout
            </p>
          </div>
        </div>
      ) : (
        <div className="py-48 px-2">
          <h2 className="text-2xl font-bold">Cart</h2>
          <p className="text-sm w-[400px] mb-6 mt-4">您的购物车是空的</p>
          <div className="flex text-sm items-center underline text-orange-400">
            <Link href="/">去添加</Link>
          </div>
        </div>
      )}
    </div>
  );
}

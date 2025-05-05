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

export default function Cart() {
  const cartList = [1, 2];
  const quantiryOptions = Array.from({ length: 10 }, (_, i) => i + 1);
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
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <Image
                        src="https://picsum.photos/64/64"
                        alt=""
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
                        <p className="text-sm font-medium">搅拌机</p>
                        <p className="text-xs text-gray-400">褐色</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>$88</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Trash2
                        className="mr-1"
                        color="gray"
                        cursor="pointer"
                      ></Trash2>
                      <Select>
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
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="w-56">
            <h2 className="font-sans font-medium flex flex-row text-2xl mb-6">
              Total
            </h2>
            <p className="text-2xl font-bold text-red-400 mb-6">$100.00</p>
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

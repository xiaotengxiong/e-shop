"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { useState } from "react";
import { NoteAccountType } from "@/types/global";
export default function NotAccount() {
  const [notAccountType, setNotAccountType] =
    useState<NoteAccountType>("login");
  return <>{notAccountType === "login" ? <Login setNotAccountType={setNotAccountType} /> : <Register  setNotAccountType={setNotAccountType}/>}</>;
}

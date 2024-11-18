"use client";
import { LoginContext } from "@/contexts/LoginContext";
import { useContext } from "react";

export function useLogin() {
  const context = useContext(LoginContext);
  return context;
}

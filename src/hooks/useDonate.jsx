import { DonateContext } from "@/contexts/DonateContext";
import { useContext } from "react";

export function useDonate() {
   const context = useContext(DonateContext);
   return context;
}
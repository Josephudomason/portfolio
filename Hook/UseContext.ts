"use client";

import { useContext } from "react";
import { AppContext } from "@/context/Context";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider.");
  }

  return context;
}

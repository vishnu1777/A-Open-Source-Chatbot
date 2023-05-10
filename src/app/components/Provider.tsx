"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageProvider } from "../context/messages";

function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MessageProvider>{children}</MessageProvider>
    </QueryClientProvider>
  );
}

export default Provider;

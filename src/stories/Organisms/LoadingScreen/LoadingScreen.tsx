"use client";
import React from "react";
import { useLoading } from "@/context/LoadingContext";
import { CircularProgress } from "@mui/material";

export const LoadingScreen: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null; // Não renderiza nada se não estiver carregando

  return (
    <div className="fixed inset-0 flex w-full h-full items-center justify-center bg-black bg-opacity-50 z-[200]">
      <CircularProgress size="3rem" />
    </div>
  );
};

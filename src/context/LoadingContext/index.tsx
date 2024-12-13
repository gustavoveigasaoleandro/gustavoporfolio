"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define os tipos do contexto
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

// Cria o contexto com os tipos
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Provedor do contexto
interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook para acessar o contexto
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading deve ser usado dentro de um LoadingProvider");
  }
  return context;
};

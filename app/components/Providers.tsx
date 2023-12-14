"use client";

import useProperties from "@/hooks/useProperties";
import { Property } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const defaultProperties = useProperties();

  const [properties, setProperties] = useState(defaultProperties);
  const [depositPercentage, setdepositPercentage] = useState<number>(1);
  const [recoupOption, setRecoupOption] = useState<string>("Deposit");

  return (
    <PropertiesContext.Provider
      value={{
        defaultProperties,
        depositPercentage,
        setdepositPercentage,
        properties,
        setProperties,
        recoupOption,
        setRecoupOption,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

type PropertiesContextType = {
  defaultProperties: Property[];
  depositPercentage: number;
  setdepositPercentage: React.Dispatch<React.SetStateAction<number>>;
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  recoupOption: string;
  setRecoupOption: React.Dispatch<React.SetStateAction<string>>;
};

const PropertiesContext = createContext<PropertiesContextType | undefined>(
  undefined
);

export function useFilteredProperties() {
  const context = useContext(PropertiesContext);

  if (!context) {
    throw new Error("useMessage must be used within a PropertiesProvider");
  }

  return context;
}

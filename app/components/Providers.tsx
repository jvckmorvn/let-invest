"use client";

import useProperties from "@/hooks/useProperties";
import { Property } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const defaultProperties = useProperties();
  const [properties, setProperties] = useState(defaultProperties);

  return (
    <PropertiesContext.Provider
      value={{ defaultProperties, properties, setProperties }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

type PropertiesContextType = {
  defaultProperties: Property[];
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
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

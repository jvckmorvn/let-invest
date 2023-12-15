"use client";

import useProperties from "@/hooks/useProperties";
import { NavbarInputs, Property } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const defaultProperties = useProperties();
  const [properties, setProperties] = useState<Property[]>(defaultProperties);

  const [navbarInputs, setNavbarInputs] = useState<NavbarInputs>({
    recoupOption: "Deposit",
    priceRanges: [],
    cities: [],
    depositPercentage: 1,
  });

  function filterProperties({ priceRanges, cities }: NavbarInputs) {
    if (cities.length === 0 && priceRanges.length === 0) {
      setProperties(defaultProperties);
    } else if (cities.length > 0 && priceRanges.length > 0) {
      setProperties(
        defaultProperties.filter(
          (property) =>
            cities.includes(property.city) &&
            priceRanges.some(
              (range) =>
                property.price >= range.min && property.price <= range.max
            )
        )
      );
    } else if (cities.length > 0) {
      setProperties(
        defaultProperties.filter((property) => cities.includes(property.city))
      );
    } else {
      setProperties(
        defaultProperties.filter((property) =>
          priceRanges.some(
            (range) =>
              property.price >= range.min && property.price <= range.max
          )
        )
      );
    }
  }

  return (
    <NavbarContext.Provider
      value={{
        properties,
        filterProperties,
        navbarInputs,
        setNavbarInputs,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

type NavbarContextType = {
  properties: Property[];
  navbarInputs: NavbarInputs;
  setNavbarInputs: React.Dispatch<React.SetStateAction<NavbarInputs>>;
  filterProperties: ({ priceRanges, cities }: NavbarInputs) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function useNavbarInputs() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useMessage must be used within a PropertiesProvider");
  }

  return context;
}

"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Property, NavbarInputs } from "@/app/utils/types";
import useProperties from "@/app/hooks/useProperties";

type FilteredPropertiesContextType = {
  properties: Property[];
  filterProperties: ({ priceRanges, cities }: NavbarInputs) => void;
};

const FilteredPropertiesContext = createContext<FilteredPropertiesContextType>({
  properties: [],
  filterProperties: () => [],
});

export function FilteredPropertiesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const defaultProperties = useProperties();
  const [properties, setProperties] = useState<Property[]>(defaultProperties);

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
    <FilteredPropertiesContext.Provider
      value={{
        properties,
        filterProperties,
      }}
    >
      {children}
    </FilteredPropertiesContext.Provider>
  );
}

export function useFilteredProperties() {
  const context = useContext(FilteredPropertiesContext);
  return context;
}

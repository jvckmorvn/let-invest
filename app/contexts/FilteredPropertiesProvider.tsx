import { createContext, ReactNode, useState } from "react";
import { Property, NavbarInputs } from "@/app/utils/types";
import useProperties from "@/app/hooks/useProperties";

type FilteredPropertiesContextType = {
  properties: Property[];
  filterProperties: ({ priceRanges, cities }: NavbarInputs) => void;
};

export const FilteredPropertiesContext =
  createContext<FilteredPropertiesContextType>({
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
    let filteredProperties = defaultProperties;

    if (cities.length > 0) {
      filteredProperties = filteredProperties.filter((property) =>
        cities.includes(property.city)
      );
    }

    if (priceRanges.length > 0) {
      filteredProperties = filteredProperties.filter((property) =>
        priceRanges.some(
          (range) => property.price >= range.min && property.price <= range.max
        )
      );
    }

    setProperties(filteredProperties);
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

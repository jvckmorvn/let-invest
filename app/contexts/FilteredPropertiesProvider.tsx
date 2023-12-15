import { createContext, ReactNode, useState } from "react";
import { Property, NavbarInputs } from "@/app/utils/types";
import useProperties from "@/app/hooks/useProperties";

type FilteredPropertiesContextType = {
  properties: Property[];
  filterProperties: ({ priceRange, cities }: NavbarInputs) => void;
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

  function filterProperties({ priceRange, cities }: NavbarInputs) {
    let filteredProperties = defaultProperties.filter(
      (property) =>
        property.price >= priceRange.minPrice.value &&
        property.price <= priceRange.maxPrice.value
    );

    if (cities.length > 0) {
      filteredProperties = filteredProperties.filter((property) =>
        cities.includes(property.city)
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

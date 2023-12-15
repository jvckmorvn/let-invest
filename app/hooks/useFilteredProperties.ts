import { useContext } from "react";
import { FilteredPropertiesContext } from "../contexts/FilteredPropertiesProvider";

export function useFilteredProperties() {
  const context = useContext(FilteredPropertiesContext);
  return context;
}

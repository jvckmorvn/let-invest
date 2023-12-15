"use client";

import PropertiesList from "./components/PropertiesList";
import { useFilteredProperties } from "./components/contexts/FilteredPropertiesProvider";

export default function Home() {
  const { properties } = useFilteredProperties();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PropertiesList properties={properties} />
    </main>
  );
}

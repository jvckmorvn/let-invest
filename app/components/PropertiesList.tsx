"use client";

import PropertyCard from "./PropertyCard";
import { useFilteredProperties } from "./Providers";

export default function PropertiesList() {
  const { properties } = useFilteredProperties();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      {properties.map(({ images, city, price }) => (
        <PropertyCard key={price} images={images} city={city} price={price} />
      ))}
    </div>
  );
}

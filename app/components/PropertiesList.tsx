import { Property } from "@/types";
import PropertyCard from "./PropertyCard";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      {properties.map(({ images, city, price }) => (
        <PropertyCard key={price} images={images} city={city} price={price} />
      ))}
    </div>
  );
}

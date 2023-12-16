import { Property } from "@/app/utils/types";
import PropertyCard from "./PropertyCard";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
      {properties.map(({ id }) => (
        <PropertyCard key={id} propertyId={id} />
      ))}
    </div>
  );
}

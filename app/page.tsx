import PropertyCard from "./components/PropertyCard";
import UseProperties from "../hooks/useProperties";

export default function Home() {
  const properties = UseProperties();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {properties.map(({ id, images, city, price }) => (
          <PropertyCard key={id} images={images} city={city} price={price} />
        ))}
      </div>
    </main>
  );
}

import Form from "./Form";
import PropertyCard from "./PropertyCard";

export default function Home() {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property} />
        ))}
      </div>
      <Form />
    </main>
  );
}

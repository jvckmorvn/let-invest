import useProperty from "../hooks/useProperty";
import ImageCarousel from "./ImageCarousel";

export default function PropertyCard({ propertyId }: { propertyId: number }) {
  const { images, price, city, address, timespan } = useProperty(propertyId);
  const formattedPrice = price ? price.toLocaleString() : "N/A";

  return (
    <div className="card w-96 bg-base-100 shadow-md transition-transform transform hover:scale-105 hover:cursor-pointer">
      <figure>
        <ImageCarousel
          images={images || ["https://placehold.co/600x400/png"]}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {timespan} months
          {timespan < 18 && <div className="badge badge-accent">QUICK</div>}
        </h2>
        <p>{address}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{city}</div>
          <div className="badge badge-outline">£{formattedPrice}</div>
        </div>
      </div>
    </div>
  );
}

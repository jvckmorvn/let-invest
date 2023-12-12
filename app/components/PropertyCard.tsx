import ImageCarousel from "./ImageCarousel";

export default function PropertyCard({
  images,
  city,
  price,
}: {
  images: string[];
  city: string;
  price: number;
}) {
  const formattedPrice = price.toLocaleString();
  const averageRent = 2000;
  const deposit = 0.1;
  const timespan = Math.ceil((price * deposit) / averageRent);

  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure>
        <ImageCarousel images={images} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {timespan} months
          {timespan < 18 && <div className="badge badge-secondary">QUICK</div>}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{city}</div>
          <div className="badge badge-outline">£{formattedPrice}</div>
        </div>
      </div>
    </div>
  );
}

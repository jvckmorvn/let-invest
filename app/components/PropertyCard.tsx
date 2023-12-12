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

  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure>
        <ImageCarousel images={images} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          108 months
          <div className="badge badge-secondary">NEW</div>
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

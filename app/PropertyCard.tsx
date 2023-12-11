import ImageCarousel from "./ImageCarousel";

export default function PropertyCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure>
        <ImageCarousel />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          108 months
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">London</div>
          <div className="badge badge-outline">£587,000</div>
        </div>
      </div>
    </div>
  );
}

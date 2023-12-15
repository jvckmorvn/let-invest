import { useNavbarInputs } from "../hooks/useNavbarInputs";
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
  const averageRent = 2000;
  const { navbarInputs } = useNavbarInputs();
  const depositValue = price * (navbarInputs.depositPercentage / 100);

  let timespan;
  if (navbarInputs.recoupOption === "Deposit") {
    timespan = Math.ceil(depositValue / averageRent);
  } else if (navbarInputs.recoupOption === "Principal") {
    timespan = Math.ceil((price - depositValue) / averageRent);
  } else {
    timespan = Math.ceil(price / averageRent);
  }

  const formattedPrice = price.toLocaleString();

  return (
    <div className="card w-96 bg-base-100 shadow-md transition-transform transform hover:scale-105 hover:cursor-pointer">
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

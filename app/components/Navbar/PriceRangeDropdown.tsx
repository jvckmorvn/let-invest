import { PriceRange } from "@/app/utils/types";
import PriceBoundaryDropdown from "./PriceBoundaryDropdown";

interface Props {
  selectedPriceRange: PriceRange;
  onSelectPriceRange: (priceRange: PriceRange) => void;
}

export default function PriceRangeDropdown({
  selectedPriceRange,
  onSelectPriceRange,
}: Props) {
  const boundaryLabels = ["Min", "Max"];
  const boundaryObjects = [
    { label: "£100,000", value: 100_000 },
    { label: "£200,000", value: 200_000 },
    { label: "£300,000", value: 300_000 },
    { label: "£400,000", value: 400_000 },
    { label: "£500,000", value: 500_000 },
  ];
  const minPrices = [{ label: "No min", value: 0 }, ...boundaryObjects];
  const maxPrices = [
    { label: "No max", value: Number.POSITIVE_INFINITY },
    ...boundaryObjects,
  ];

  return (
    <li>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <details>
            <summary>
              Price range
              {(selectedPriceRange.minPrice.value > 0 ||
                selectedPriceRange.maxPrice.value <
                  Number.POSITIVE_INFINITY) && (
                <span className="badge badge-xs badge-neutral"></span>
              )}
            </summary>
            <ul className="menu menu-horizontal w-44 flex justify-around">
              {boundaryLabels.map((boundary) => (
                <PriceBoundaryDropdown
                  key={boundary}
                  limit={boundary}
                  priceOptions={boundary === "Min" ? minPrices : maxPrices}
                  selectedPriceRange={selectedPriceRange}
                  onSelectPriceRange={onSelectPriceRange}
                />
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </li>
  );
}

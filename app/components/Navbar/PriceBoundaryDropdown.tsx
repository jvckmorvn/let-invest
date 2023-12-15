import { PriceBoundary, PriceRange } from "@/app/utils/types";

interface Props {
  limit: string;
  priceOptions: PriceBoundary[];
  selectedPriceRange: PriceRange;
  onSelectPriceRange: (priceRange: PriceRange) => void;
}

export default function PriceBoundaryDropdown({
  limit,
  priceOptions,
  selectedPriceRange,
  onSelectPriceRange,
}: Props) {
  return (
    <li key={limit}>
      <details>
        <summary>{limit}</summary>
        <ul>
          {priceOptions.map((priceOption) => (
            <li key={priceOption.label}>
              <label className="form-control justify-between cursor-pointer">
                <span className="label-text">{priceOption.label}</span>
                <input
                  type="radio"
                  name={`${limit}-radio`}
                  className="radio radio-sm"
                  checked={
                    priceOption.value ===
                    (limit === "Min"
                      ? selectedPriceRange.minPrice.value
                      : selectedPriceRange.maxPrice.value)
                  }
                  onChange={() =>
                    onSelectPriceRange({
                      minPrice:
                        limit === "Min"
                          ? priceOption
                          : selectedPriceRange.minPrice,
                      maxPrice:
                        limit === "Max"
                          ? priceOption
                          : selectedPriceRange.maxPrice,
                    })
                  }
                />
              </label>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

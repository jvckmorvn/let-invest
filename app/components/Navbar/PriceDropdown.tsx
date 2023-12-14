import { PriceRange } from "@/types";

interface Props {
  onSelectPriceRange: (priceRange: PriceRange) => void;
}

export default function PriceDropdown({ onSelectPriceRange }: Props) {
  const priceRanges = [
    { label: "Less than £100,000", min: 0, max: 99_999 },
    { label: "£100,000 - 199,999", min: 100_000, max: 199_999 },
    { label: "£200,000 - 299,999", min: 200_000, max: 299_999 },
    { label: "£300,000 - 399,999", min: 300_000, max: 399_999 },
    { label: "£400,000 - 499,999", min: 400_000, max: 499_999 },
    { label: "£500,000+", min: 500_000, max: 599_999 },
  ];

  return (
    <li>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn">
          Price
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
        >
          {priceRanges.map((priceRange) => (
            <li key={priceRange.min}>
              <label className="form-control justify-between cursor-pointer">
                <span className="label-text">{priceRange.label}</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  onChange={() => onSelectPriceRange(priceRange)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function NavbarInputs() {
  const priceRanges = [
    "Less than £100,000",
    "£100,000 - 199,999",
    "£200,000 - 299,999",
    "£300,000 - 399,999",
    "£400,000 - 499,999",
    "£500,000+",
  ];

  const cities = ["Belfast", "London", "Manchester"];

  return (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>City</summary>
            <ul className="p-2">
              {cities.map((city, index) => (
                <li key={index}>
                  <label className="form-control justify-between cursor-pointer">
                    <span className="label-text">{city}</span>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                  </label>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Price</summary>
            <ul className="p-2">
              {priceRanges.map((priceRange, index) => (
                <li key={index}>
                  <label className="form-control justify-between cursor-pointer">
                    <span className="label-text">{priceRange}</span>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                  </label>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <label htmlFor="deposit" className="label">
            <summary>Deposit</summary>
          </label>
          <input
            type="range"
            id="deposit"
            min="0"
            max="3"
            className="range range-sm"
            step="1"
          />
        </li>
      </ul>
    </>
  );
}

interface Props {
  selectedCities: string[];
  onSelectCity: (city: string) => void;
}

export default function CityDropdown({ selectedCities, onSelectCity }: Props) {
  const cities = ["Belfast", "London", "Manchester"];
  const dropdownLabel =
    selectedCities.length > 1
      ? `${selectedCities[0]}, ...`
      : selectedCities.length === 1
      ? selectedCities[0]
      : "Any city";

  return (
    <li>
      <div>
        <label>City</label>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn">
            {dropdownLabel}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
          >
            {cities.map((city) => (
              <li key={city}>
                <label className="form-control justify-between cursor-pointer">
                  <span className="label-text">{city}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    onChange={() => onSelectCity(city)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

interface Props {
  onSelectCity: (city: string) => void;
}

export default function CityDropdown({ onSelectCity }: Props) {
  const cities = ["Belfast", "London", "Manchester"];

  return (
    <li>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn">
          City
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
    </li>
  );
}

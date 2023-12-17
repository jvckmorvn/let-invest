import useCities from "@/app/hooks/useCities";

interface Props {
  selectedCities: string[];
  onSelectCity: (city: string) => void;
}

export default function CityDropdown({ selectedCities, onSelectCity }: Props) {
  const cities = useCities();

  return (
    <li>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <details>
            <summary>
              City
              {selectedCities.length > 0 && (
                <span className="badge badge-xs badge-neutral"></span>
              )}
            </summary>
            <ul>
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
          </details>
        </li>
      </ul>
    </li>
  );
}

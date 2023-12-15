interface Props {
  selectedRecoupOption: string;
  onSelectRecoupOption: (recoupOption: string) => void;
}

export default function RecoupDropdown2({
  selectedRecoupOption,
  onSelectRecoupOption,
}: Props) {
  const recoupOptions = ["Deposit", "Principal", "Both"];

  return (
    <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
      <li>
        <details>
          <summary>{selectedRecoupOption}</summary>
          <ul>
            {recoupOptions.map((option) => (
              <li key={option}>
                <label className="form-control justify-between cursor-pointer">
                  <span className="label-text">{option}</span>
                  <input
                    type="radio"
                    name="radio"
                    className="radio radio-sm"
                    checked={option === selectedRecoupOption}
                    onChange={() => onSelectRecoupOption(option)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}

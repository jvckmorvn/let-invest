interface Props {
  selectedRecoupOption: string;
  onSelectRecoupOption: (recoupOption: string) => void;
}

export default function RecoupDropdown({
  selectedRecoupOption,
  onSelectRecoupOption,
}: Props) {
  const recoupOptions = ["Deposit", "Principal", "Both"];

  return (
    <li>
      <div>
        <label>Recoup</label>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn">
            {selectedRecoupOption}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
          >
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
        </div>
      </div>
    </li>
  );
}

interface Props {
  onSelectRecoupOption: (recoupOption: string) => void;
  defaultRecoupOption: string;
}

export default function RecoupDropdown({
  onSelectRecoupOption,
  defaultRecoupOption,
}: Props) {
  const recoupOptions = ["Deposit", "Principal", "Both"];

  return (
    <li>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn">
          How long to recoup
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
                  checked={option === defaultRecoupOption}
                  onChange={() => onSelectRecoupOption(option)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

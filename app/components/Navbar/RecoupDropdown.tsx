import { RecoupOption } from "@/app/utils/types";

interface Props {
  selectedRecoupOption: RecoupOption;
  onSelectRecoupOption: (recoupOption: RecoupOption) => void;
}

export default function RecoupDropdown2({
  selectedRecoupOption,
  onSelectRecoupOption,
}: Props) {
  const recoupOptions = ["Deposit", "Principal", "Both"];

  return (
    <li>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <details>
            <summary>
              Recoup
              <span className="badge badge-xs badge-neutral"></span>
            </summary>
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
                      onChange={() =>
                        onSelectRecoupOption(option as RecoupOption)
                      }
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

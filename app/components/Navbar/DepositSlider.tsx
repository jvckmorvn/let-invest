import { ChangeEvent } from "react";
import { useNavbarInputs } from "../../contexts/NavbarInputsProvider";

interface Props {
  disabled: boolean;
  defaultDepositPercentage: number;
  onChangeDeposit: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function DepositSlider({
  disabled,
  defaultDepositPercentage,
  onChangeDeposit,
}: Props) {
  const { navbarInputs } = useNavbarInputs();

  return (
    <li
      style={
        disabled
          ? { opacity: 0.6, cursor: "not-allowed", marginLeft: 20 }
          : { marginLeft: 20 }
      }
    >
      <label htmlFor="deposit" className="label">
        <summary>Deposit: {navbarInputs.depositPercentage}%</summary>
      </label>
      <input
        type="range"
        id="deposit"
        min="1"
        max="30"
        className="range range-sm"
        value={defaultDepositPercentage}
        onChange={(e) => onChangeDeposit(e)}
        disabled={disabled}
      />
    </li>
  );
}

import { useNavbarInputs } from "@/app/hooks/useNavbarInputs";
import { ChangeEvent } from "react";

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
          ? {
              opacity: 0.6,
              cursor: "not-allowed",
              marginLeft: 10,
              paddingTop: 6,
            }
          : { marginLeft: 10, paddingTop: 6 }
      }
    >
      <div>
        <label>Deposit</label>
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
        <span>{disabled ? "N/A" : `${navbarInputs.depositPercentage}%`}</span>
      </div>
    </li>
  );
}

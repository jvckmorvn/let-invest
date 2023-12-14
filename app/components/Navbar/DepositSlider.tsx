import { ChangeEvent } from "react";
import { useFilteredProperties } from "../Providers";

interface Props {
  recoupOption: string;
}

export default function DepositSlider({ recoupOption }: Props) {
  const { depositPercentage, setDepositPercentage } = useFilteredProperties();

  function handleDepositChange(e: ChangeEvent<HTMLInputElement>) {
    const depositPercentage = parseInt(e.target.value);
    setDepositPercentage(depositPercentage);
  }

  return (
    <li
      style={
        recoupOption === "Both"
          ? { opacity: 0.6, cursor: "not-allowed", marginLeft: 20 }
          : { marginLeft: 20 }
      }
    >
      <label htmlFor="deposit" className="label">
        <summary>Deposit: {depositPercentage}%</summary>
      </label>
      <input
        type="range"
        id="deposit"
        min="1"
        max="30"
        className="range range-sm"
        value={depositPercentage}
        onChange={(e) => handleDepositChange(e)}
        disabled={recoupOption === "Both"}
      />
    </li>
  );
}

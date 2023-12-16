import { RecoupOption } from "../utils/types";

interface Props {
  inputs: {
    price: number;
    depositPercentage: number;
    averageRent: number;
    recoupOption: RecoupOption;
  };
}

export default function useCalculator({ inputs }: Props) {
  const { price, depositPercentage, averageRent, recoupOption } = inputs;

  const depositValue = price * (depositPercentage / 100);

  const recoupOptionMap: Record<string, () => number> = {
    Deposit: () => Math.ceil(depositValue / averageRent),
    Principal: () => Math.ceil((price - depositValue) / averageRent),
    Both: () => Math.ceil(price / averageRent),
  };
  const timespan = recoupOptionMap[recoupOption]();

  const outputs = { depositValue: depositValue, timespan: timespan };
  return outputs;
}

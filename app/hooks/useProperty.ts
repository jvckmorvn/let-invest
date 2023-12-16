import { RecoupOption } from "../utils/types";
import useCalculator from "./useCalculator";
import { useNavbarInputs } from "./useNavbarInputs";
import useProperties from "./useProperties";

export default function useProperty(id: number) {
  const { navbarInputs } = useNavbarInputs();
  const properties = useProperties();

  const property = properties.find((property) => property.id === id);

  if (!property) {
    throw new Error(`No property found with id ${id}`);
  }

  const inputs = {
    price: property.price,
    depositPercentage: navbarInputs.depositPercentage,
    averageRent: 2000,
    recoupOption: navbarInputs.recoupOption as RecoupOption,
  };

  const { depositValue, timespan } = useCalculator({ inputs });

  return { ...property, depositValue, timespan };
}

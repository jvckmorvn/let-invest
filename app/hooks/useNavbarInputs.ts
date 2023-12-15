import { useContext } from "react";
import { NavbarInputsContext } from "../contexts/NavbarInputsProvider";

export function useNavbarInputs() {
  const context = useContext(NavbarInputsContext);
  return context;
}

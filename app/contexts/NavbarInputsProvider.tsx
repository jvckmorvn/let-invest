import { createContext, ReactNode, useState } from "react";
import { NavbarInputs } from "@/app/utils/types";

type NavbarInputsContextType = {
  navbarInputs: NavbarInputs;
  setNavbarInputs: React.Dispatch<React.SetStateAction<NavbarInputs>>;
};

export const NavbarInputsContext = createContext<NavbarInputsContextType>({
  navbarInputs: {
    recoupOption: "Deposit",
    priceRange: {
      minPrice: { label: "No min", value: 0 },
      maxPrice: { label: "No max", value: Number.POSITIVE_INFINITY },
    },
    cities: [],
    depositPercentage: 1,
  },
  setNavbarInputs: () => {},
});

export function NavbarInputsProvider({ children }: { children: ReactNode }) {
  const [navbarInputs, setNavbarInputs] = useState<NavbarInputs>({
    recoupOption: "Deposit",
    priceRange: {
      minPrice: { label: "No min", value: 0 },
      maxPrice: { label: "No max", value: Number.POSITIVE_INFINITY },
    },
    cities: [],
    depositPercentage: 10,
  });

  return (
    <NavbarInputsContext.Provider
      value={{
        navbarInputs,
        setNavbarInputs,
      }}
    >
      {children}
    </NavbarInputsContext.Provider>
  );
}

import { createContext, ReactNode, useState } from "react";
import { NavbarInputs } from "@/app/utils/types";

type NavbarInputsContextType = {
  navbarInputs: NavbarInputs;
  setNavbarInputs: React.Dispatch<React.SetStateAction<NavbarInputs>>;
};

const defaultNavbarInputs = {
  recoupOption: "Deposit",
  priceRange: {
    minPrice: { label: "No min", value: 0 },
    maxPrice: { label: "No max", value: Number.POSITIVE_INFINITY },
  },
  cities: [],
  depositPercentage: 10,
};

export const NavbarInputsContext = createContext<NavbarInputsContextType>({
  navbarInputs: defaultNavbarInputs,
  setNavbarInputs: () => {},
});

export function NavbarInputsProvider({ children }: { children: ReactNode }) {
  const [navbarInputs, setNavbarInputs] =
    useState<NavbarInputs>(defaultNavbarInputs);

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

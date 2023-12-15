"use client";

import { ReactNode } from "react";
import { NavbarInputsProvider } from "./NavbarInputsProvider";
import { FilteredPropertiesProvider } from "./FilteredPropertiesProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NavbarInputsProvider>
      <FilteredPropertiesProvider>{children}</FilteredPropertiesProvider>
    </NavbarInputsProvider>
  );
}

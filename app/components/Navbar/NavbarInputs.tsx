"use client";

import { ChangeEvent, useState } from "react";
import RecoupDropdown from "./RecoupDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import CityDropdown from "./CityDropdown";
import DepositSlider from "./DepositSlider";
import { PriceRange, RecoupOption } from "@/app/utils/types";
import { useNavbarInputs } from "@/app/hooks/useNavbarInputs";
import { useFilteredProperties } from "@/app/hooks/useFilteredProperties";

export default function NavbarInputs() {
  const { navbarInputs, setNavbarInputs } = useNavbarInputs();
  const { recoupOption, priceRange, cities, depositPercentage } = navbarInputs;
  const { filterProperties } = useFilteredProperties();
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  function handleSelectRecoupOption(selectedRecoupOption: RecoupOption) {
    setNavbarInputs((prevNavbarInputs) => ({
      ...prevNavbarInputs,
      recoupOption: selectedRecoupOption,
    }));
  }

  function handleSelectPriceRange(selectedPriceRange: PriceRange) {
    setNavbarInputs((prevNavbarInputs) => {
      const updatedNavBarInputs = {
        ...prevNavbarInputs,
        priceRange: selectedPriceRange,
      };

      filterProperties(updatedNavBarInputs);

      return updatedNavBarInputs;
    });
  }

  function handleSelectCity(selectedCity: string) {
    setSelectedCities((prevSelectedCities) => {
      const checkedCities = prevSelectedCities.includes(selectedCity)
        ? prevSelectedCities.filter((v) => v !== selectedCity)
        : [...prevSelectedCities, selectedCity];

      setNavbarInputs((prevNavbarInputs) => ({
        ...prevNavbarInputs,
        cities: checkedCities,
      }));

      filterProperties({
        ...navbarInputs,
        cities: checkedCities,
      });

      return checkedCities;
    });
  }

  function handleChangeDeposit(e: ChangeEvent<HTMLInputElement>) {
    setNavbarInputs((prevNavbarInputs) => ({
      ...prevNavbarInputs,
      depositPercentage: parseInt(e.target.value),
    }));
  }

  return (
    <ul className="menu menu-horizontal">
      <RecoupDropdown
        selectedRecoupOption={recoupOption as RecoupOption}
        onSelectRecoupOption={handleSelectRecoupOption}
      />
      <PriceRangeDropdown
        selectedPriceRange={priceRange}
        onSelectPriceRange={handleSelectPriceRange}
      />
      <CityDropdown selectedCities={cities} onSelectCity={handleSelectCity} />
      <DepositSlider
        disabled={recoupOption === "Both"}
        defaultDepositPercentage={depositPercentage}
        onChangeDeposit={handleChangeDeposit}
      />
    </ul>
  );
}

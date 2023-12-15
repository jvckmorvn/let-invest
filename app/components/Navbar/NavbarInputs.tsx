"use client";

import { ChangeEvent, useState } from "react";
import RecoupDropdown from "./RecoupDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import CityDropdown from "./CityDropdown";
import DepositSlider from "./DepositSlider";
import { PriceRange } from "@/app/utils/types";
import { useNavbarInputs } from "@/app/hooks/useNavbarInputs";
import { useFilteredProperties } from "@/app/hooks/useFilteredProperties";

export default function NavbarInputs() {
  const { navbarInputs, setNavbarInputs } = useNavbarInputs();
  const { recoupOption, priceRanges, cities, depositPercentage } = navbarInputs;
  const { filterProperties } = useFilteredProperties();
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  function handleSelectRecoupOption(selectedRecoupOption: string) {
    setNavbarInputs((prevNavbarInputs) => ({
      ...prevNavbarInputs,
      recoupOption: selectedRecoupOption,
    }));
  }

  function handleSelectPriceRange(selectedPriceRange: PriceRange) {
    setSelectedPriceRanges((prevSelectedPriceRanges) => {
      const rangeIndex = prevSelectedPriceRanges.findIndex(
        (range) => range.label === selectedPriceRange.label
      );

      let checkedPriceRanges: PriceRange[];
      if (rangeIndex !== -1) {
        checkedPriceRanges = [...prevSelectedPriceRanges];
        checkedPriceRanges.splice(rangeIndex, 1);
      } else {
        checkedPriceRanges = [...prevSelectedPriceRanges, selectedPriceRange];
      }

      setNavbarInputs((prevNavbarInputs) => ({
        ...prevNavbarInputs,
        priceRanges: checkedPriceRanges,
      }));

      filterProperties({
        ...navbarInputs,
        priceRanges: checkedPriceRanges,
      });

      return checkedPriceRanges;
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
        selectedRecoupOption={recoupOption}
        onSelectRecoupOption={handleSelectRecoupOption}
      />
      <PriceRangeDropdown
        selectedPriceRanges={priceRanges}
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

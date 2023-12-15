"use client";

import { ChangeEvent, useState } from "react";
import DepositSlider from "./DepositSlider";
import PriceRangeDropdown from "./PriceRangeDropdown";
import CityDropdown from "./CityDropdown";
import RecoupDropdown from "./RecoupDropdown";
import { PriceRange } from "@/app/utils/types";
import { useNavbarInputs } from "../contexts/NavbarInputsProvider";
import { useFilteredProperties } from "../contexts/FilteredPropertiesProvider";

export default function NavbarInputs() {
  const { navbarInputs, setNavbarInputs } = useNavbarInputs();
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
    <>
      <ul className="menu menu-horizontal">
        <RecoupDropdown
          defaultRecoupOption={navbarInputs.recoupOption}
          onSelectRecoupOption={handleSelectRecoupOption}
        />
        <PriceRangeDropdown onSelectPriceRange={handleSelectPriceRange} />
        <CityDropdown onSelectCity={handleSelectCity} />
        <DepositSlider
          disabled={navbarInputs.recoupOption === "Both"}
          defaultDepositPercentage={navbarInputs.depositPercentage}
          onChangeDeposit={handleChangeDeposit}
        />
      </ul>
    </>
  );
}

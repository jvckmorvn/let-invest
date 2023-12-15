"use client";

import { useState } from "react";
import { useFilteredProperties } from "../Providers";
import DepositSlider from "./DepositSlider";
import PriceDropdown from "./PriceDropdown";
import CityDropdown from "./CityDropdown";
import RecoupDropdown from "./RecoupDropdown";
import { PriceRange } from "@/types";

export default function NavbarInputs() {
  const { setProperties, defaultProperties, recoupOption, setRecoupOption } =
    useFilteredProperties();
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  function handleSelectRecoupOption(selectedRecoupOption: string) {
    setRecoupOption(selectedRecoupOption);
  }

  function handleSelectPriceRange(selectedPriceRange: PriceRange) {
    const checkedPriceRanges = togglePriceRange(
      selectedPriceRange,
      selectedPriceRanges
    );
    setSelectedPriceRanges(checkedPriceRanges);
    filterProperties(checkedPriceRanges, selectedCities);
  }

  function togglePriceRange(
    selectedPriceRange: PriceRange,
    checkedRanges: PriceRange[]
  ) {
    const rangeIndex = checkedRanges.findIndex(
      (range) => range.label === selectedPriceRange.label
    );
    if (rangeIndex !== -1) {
      const newRanges = [...checkedRanges];
      newRanges.splice(rangeIndex, 1);
      return newRanges;
    } else {
      return selectedPriceRange
        ? [...checkedRanges, selectedPriceRange]
        : checkedRanges;
    }
  }

  function handleSelectCity(selectedCity: string) {
    const checkedCities = toggleCheckbox(selectedCity, selectedCities);
    setSelectedCities(checkedCities);
    filterProperties(selectedPriceRanges, checkedCities);
  }

  function toggleCheckbox(value: string, checkedValues: string[]) {
    return checkedValues.includes(value)
      ? checkedValues.filter((v) => v !== value)
      : [...checkedValues, value];
  }

  function filterProperties(
    selectedPriceRanges: { min: number; max: number }[],
    selectedCities: string[]
  ) {
    if (selectedCities.length === 0 && selectedPriceRanges.length === 0) {
      setProperties(defaultProperties);
    } else if (selectedCities.length > 0 && selectedPriceRanges.length > 0) {
      setProperties(
        defaultProperties.filter(
          (property) =>
            selectedCities.includes(property.city) &&
            selectedPriceRanges.some(
              (range) =>
                property.price >= range.min && property.price <= range.max
            )
        )
      );
    } else if (selectedCities.length > 0) {
      setProperties(
        defaultProperties.filter((property) =>
          selectedCities.includes(property.city)
        )
      );
    } else {
      setProperties(
        defaultProperties.filter((property) =>
          selectedPriceRanges.some(
            (range) =>
              property.price >= range.min && property.price <= range.max
          )
        )
      );
    }
  }

  return (
    <>
      <ul className="menu menu-horizontal">
        <RecoupDropdown
          onSelectRecoupOption={handleSelectRecoupOption}
          defaultRecoupOption={recoupOption}
        />
        <PriceDropdown onSelectPriceRange={handleSelectPriceRange} />
        <CityDropdown onSelectCity={handleSelectCity} />
        <DepositSlider recoupOption={recoupOption} />
      </ul>
    </>
  );
}

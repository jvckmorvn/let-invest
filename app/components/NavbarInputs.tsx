"use client";

import { ChangeEvent, useState } from "react";
import { useFilteredProperties } from "./Providers";
import { PriceRange } from "@/types";

export default function NavbarInputs() {
  const priceRanges: PriceRange[] = [
    { label: "Less than £100,000", min: 0, max: 99_999 },
    { label: "£100,000 - 199,999", min: 100_000, max: 199_999 },
    { label: "£200,000 - 299,999", min: 200_000, max: 299_999 },
    { label: "£300,000 - 399,999", min: 300_000, max: 399_999 },
    { label: "£400,000 - 499,999", min: 400_000, max: 499_999 },
    { label: "£500,000+", min: 500_000, max: 599_999 },
  ];
  const cities = ["Belfast", "London", "Manchester"];
  const recoupOptions = ["Deposit", "Principal", "Both"];

  const {
    depositPercentage,
    setdepositPercentage,
    setProperties,
    defaultProperties,
    recoupOption,
    setRecoupOption,
  } = useFilteredProperties();

  const [checkedCities, setCheckedCities] = useState<string[]>([]);
  const [checkedPriceRanges, setCheckedPriceRanges] = useState<PriceRange[]>(
    []
  );

  function handleCityChange(city: string) {
    const selectedCities = toggleCheckbox(city, checkedCities);
    setCheckedCities(selectedCities);

    updateFilteredProperties(selectedCities, checkedPriceRanges);
  }

  function handlePriceChange(label: string) {
    const selectedPriceRanges = togglePriceRange(label, checkedPriceRanges);
    setCheckedPriceRanges(selectedPriceRanges);

    updateFilteredProperties(checkedCities, selectedPriceRanges);
  }

  function toggleCheckbox(value: string, checkedValues: string[]) {
    return checkedValues.includes(value)
      ? checkedValues.filter((v) => v !== value)
      : [...checkedValues, value];
  }

  function togglePriceRange(label: string, checkedRanges: PriceRange[]) {
    const rangeIndex = checkedRanges.findIndex(
      (range) => range.label === label
    );
    if (rangeIndex !== -1) {
      const newRanges = [...checkedRanges];
      newRanges.splice(rangeIndex, 1);
      return newRanges;
    } else {
      const selectedRange = priceRanges.find((range) => range.label === label);
      return selectedRange ? [...checkedRanges, selectedRange] : checkedRanges;
    }
  }

  function updateFilteredProperties(
    selectedCities: string[],
    selectedPriceRanges: PriceRange[]
  ) {
    setProperties(() =>
      selectedCities.length === 0 && selectedPriceRanges.length === 0
        ? defaultProperties
        : defaultProperties.filter(
            (property) =>
              (selectedCities.length === 0 ||
                selectedCities.includes(property.city)) &&
              (selectedPriceRanges.length === 0 ||
                selectedPriceRanges.some(
                  (range) =>
                    property.price >= range.min && property.price <= range.max
                ))
          )
    );
  }

  function handleDepositChange(e: ChangeEvent<HTMLInputElement>) {
    const depositPercentage = parseInt(e.target.value);
    setdepositPercentage(depositPercentage);
  }

  return (
    <>
      <ul className="menu menu-horizontal">
        <li>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn">
              How long to recoup
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
            >
              {recoupOptions.map((option, index) => (
                <li key={index}>
                  <label className="form-control justify-between cursor-pointer">
                    <span className="label-text">{option}</span>
                    <input
                      type="radio"
                      name="radio"
                      className="radio radio-sm"
                      checked={option === recoupOption}
                      onChange={() => setRecoupOption(option)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn">
              City
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
            >
              {cities.map((city, index) => (
                <li key={index}>
                  <label className="form-control justify-between cursor-pointer">
                    <span className="label-text">{city}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                      onChange={() => handleCityChange(city)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn">
              Price
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
            >
              {priceRanges.map(({ label }, index) => (
                <li key={index}>
                  <label className="form-control justify-between cursor-pointer">
                    <span className="label-text">{label}</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                      onChange={() => handlePriceChange(label)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          style={
            recoupOption === "Both"
              ? { opacity: 0.6, cursor: "not-allowed", marginLeft: 20 }
              : { marginLeft: 20 }
          }
        >
          <label htmlFor="deposit" className="label">
            <summary>Deposit: {depositPercentage}%</summary>
          </label>
          <input
            type="range"
            id="deposit"
            min="1"
            max="30"
            className="range range-sm"
            value={depositPercentage}
            onChange={(e) => handleDepositChange(e)}
            disabled={recoupOption === "Both"}
          />
        </li>
      </ul>
    </>
  );
}

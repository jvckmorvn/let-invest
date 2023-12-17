import { Property } from "../utils/types";
import useCities from "./useCities";
import fakerator from "fakerator";

export default function useProperties() {
  const cities = useCities();
  const properties: Property[] = [];

  for (let i = 0; i < 30; i++) {
    const randomPrice =
      Math.floor(Math.random() * (1_200_000 - 200_000 + 1)) + 200_000;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomAddress = `${fakerator(
      "uk"
    ).address.buildingNumber()}, ${fakerator(
      "uk"
    ).address.streetName()}, ${randomCity}`;

    const property = {
      id: i,
      address: randomAddress,
      city: randomCity,
      price: randomPrice,
      images: [
        "https://placebear.com/300/200",
        "https://placebear.com/600/400",
        "https://placebear.com/900/600",
      ],
    };

    properties.push(property);
  }

  return properties;
}

export type Property = {
  id: number;
  address: string;
  city: string;
  price: number;
  images: string[];
};

export type PriceRange = {
  label: string;
  min: number;
  max: number;
};

export type NavbarInputs = {
  recoupOption: string;
  priceRanges: PriceRange[];
  cities: string[];
  depositPercentage: number;
};

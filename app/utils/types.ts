export type Property = {
  id: number;
  address: string;
  city: string;
  price: number;
  images: string[];
};

export type NavbarInputs = {
  recoupOption: string;
  priceRange: PriceRange;
  cities: string[];
  depositPercentage: number;
};

export type PriceRange = {
  minPrice: PriceBoundary;
  maxPrice: PriceBoundary;
};

export type PriceBoundary = {
  label: string;
  value: number;
};

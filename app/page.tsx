"use client";

import PropertiesList from "./components/PropertiesList";
import { useNavbarInputs } from "./components/Providers";

export default function Home() {
  const { properties } = useNavbarInputs();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PropertiesList properties={properties} />
    </main>
  );
}

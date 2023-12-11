"use client";

import { useState } from "react";

import { calculateTimespan } from "@/utils/calculator";

export default function Form() {
  const [principal, setPrincipal] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Principal:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          required
        />
      </label>

      <label>
        APR (Annual Percentage Rate):
        <input
          type="number"
          value={apr}
          onChange={(e) => setApr(parseFloat(e.target.value))}
          required
        />
      </label>

      <button type="button" onClick={() => calculateTimespan(principal, apr)}>
        Show properties
      </button>
    </form>
  );
}

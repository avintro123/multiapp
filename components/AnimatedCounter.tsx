"use client";

import React from "react";
import CountUp from "react-countup";

export default function ({ amount }: { amount: number }) {
  return (
    <span className="w-full">
      <CountUp decimals={2} decimal="," prefix="$" end={amount} />
    </span>
  );
}

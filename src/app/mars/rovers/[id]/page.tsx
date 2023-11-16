"use client";

import { useSearchParams } from "next/navigation";

export default function Rover() {
  const searchparams = useSearchParams();

  console.log(searchparams.get("id"));
  return <></>;
}

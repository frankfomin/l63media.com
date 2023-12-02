"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ActiveText({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();

  return (
    <p className={`transition-all ${href === path ? "text-paragraph" : ""}`}>
      {children}
    </p>
  );
}

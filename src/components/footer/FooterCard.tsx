"use client";

import { usePathname } from "next/navigation";

export default function FooterCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  if (path === "/kontakt") {
    return null;
  }
  return <>{children}</>;
}

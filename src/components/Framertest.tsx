"use client"
import { AnimatePresence } from "framer-motion";

import { usePathname } from 'next/navigation'

export default function Framertest({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return <AnimatePresence key={pathname} initial={false} mode="wait">{children}</AnimatePresence>;
}

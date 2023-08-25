"use client";
import { motion } from "framer-motion";

export default function AnimationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <motion.div initial={{}}>
    {children}
  </motion.div>
  )
}

"use client";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      animate={{ opacity: 1 }}
      className="flex  w-full fixed top-10 z-50 text-3xl "
    >
      <div
        id="L63"
        className={`font-playfair text-3xl left-10 absolute flex w-full justify-start `}
      >
        L63
      </div>
      <div className="absolute flex justify-end right-10 w-full">Hamburger</div>
    </motion.div>
  );
}

/**
 * Contains React components to wrap other components in framer-motion animations.
 */

import React from "react";
import { motion } from "framer-motion";

// TODO: add type checking
// @ts-ignore
export function FadeInDiv({ children, ...props }) {
  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

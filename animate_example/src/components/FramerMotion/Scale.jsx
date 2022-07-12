import React from "react";
import { motion } from "framer-motion";

export default function Scale() {
  return (
    <div>
      <motion.div 
        animate={{ scale: 2 }} transition={{ duration: 1.5 }}
        style={{ backgroundColor: 'pink', height: 100, width: 100}} 
       />
    </div>
  );
}

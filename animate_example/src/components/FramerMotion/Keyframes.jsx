import React from "react";
import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <div>
      <motion.div
        style={{ backgroundColor: 'blue', height: 300, width: 300}}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

const lines = Array(30).fill(0); // Adjust the number of lines as needed

const AnimatedButton = ({ text = "SEND US YOUR EQUATION" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className=" font-bold mx-auto overflow-hidden px-10 py-4 text-xs xs:text-base lg:text-lg text-white border-4 mb-10 uppercase bg-black rounded-lg"
      whileHover={{
        scale: 1.1,
        borderColor: "#00ffff",
        boxShadow: "0 0 10px #00ffff",
      }}

      style={{ borderColor: "#22505D", transition: "all 0.3s ease" }}
    >
      {isHovered && (
        <div className="absolute inset-0 flex w-full items-center justify-center">
          {lines.map((_, index) => {
            const isLeftSide = index < lines.length / 2;
            const position = isLeftSide
              ? `${50 - ((index + 1) / (lines.length / 2)) * 50}%`
              : `${50 + ((index - lines.length / 2) / (lines.length / 2)) * 50
              }%`;

            return (
              <motion.div
                key={index}
                className="absolute h-full w-0.5 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, .2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  delay: Math.abs(index - lines.length / 2) * 0.05,
                }}
                style={{ left: position }}
              />
            );
          })}
        </div>
      )}
      {text}
    </motion.button>
  );
};

export default AnimatedButton;

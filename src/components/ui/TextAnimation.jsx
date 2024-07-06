import React, { memo } from 'react';
import { motion } from 'framer-motion';


const letterVariants = {
  hidden: { opacity: 0, y: 50, scale: 1, rotate: -90 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};


  
const AnimatedText = memo(({ text,className,stagger }) => {
  const words = text.split(' ');


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };
  

  return (
    <motion.div
     aria-label={text}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex overflow-hidden">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block  "
              variants={letterVariants}
              // whileHover={{ scale: 1.2, color: '#1d4ed8' }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span className="inline-block mr-2">&nbsp;</motion.span>
        </div>
      ))}
    </motion.div>
  );
});

AnimatedText.displayName = "AnimatedText"
export default AnimatedText;

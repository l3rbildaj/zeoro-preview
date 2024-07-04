import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const FlickerNumber = React.memo(({ initialNumber, delay }) => {
  const [number, setNumber] = useState(initialNumber);
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const toggleNumber = () => {
      setNumber(prev => (prev === 0 ? 1 : 0));
    };

    const loop = async () => {
      while (true) {
        await controls.start({ opacity: 0.8, transition: { duration: 0.5,ease: 'easeInOut' } });
        toggleNumber();
        await controls.start({ opacity: 1, transition: { duration: 0.5,ease: 'easeInOut' } });
      }
    };

    const startAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, delay));
      loop();
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, delay]);

  return (
    <motion.div
      className="text-3xl font-bold w-3 text-white mx-1"
      animate={controls}
      ref={ref}
    >
      {number}
    </motion.div>
  );
});


FlickerNumber.displayName = "FlickerNumber"






const FlickerAnimation = () => {
    const lines = 3;
    const numbersPerLine = 47;
  
    const getInitialNumber = (lineIndex, numberIndex) => {
      if (lineIndex === 1) {
        return numberIndex % 2 === 0 ? 0 : 1;
      }
      return numberIndex % 2 === 0 ? 1 : 0;
    };
  
    return (
      <div className="flex flex-col items-center justify-center  bg-[#3C3C3C] py-2 px-2 my-20">
        {Array.from({ length: lines }).map((_, lineIndex) => (
          <div key={lineIndex} className="flex gap-3">
            {Array.from({ length: numbersPerLine }).map((_, numberIndex) => (
              <FlickerNumber
                key={numberIndex}
                initialNumber={getInitialNumber(lineIndex, numberIndex)}
                delay={numberIndex * 50} // Delay increases with each number
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default FlickerAnimation;
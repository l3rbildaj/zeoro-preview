import { motion } from "framer-motion";
import React, { createContext, useCallback, useEffect, useRef, useState } from "react";

// Create a context for the flicker control
const FlickerContext = createContext();

const FlickerProvider = ({ children }) => {
  return (
    <FlickerContext.Provider value={null}>
      {children}
    </FlickerContext.Provider>
  );
};

const FlickerNumber = React.memo(({ initialNumber, stable = false, disapear = false }) => {
  const [number, setNumber] = useState(initialNumber);
  const ref = useRef();

  const toggleNumber = useCallback(() => {
    stable ? setNumber(1) : setNumber((prev) => (prev === 0 ? 1 : 0));
    disapear ? setTimeout(() => setNumber(''), 1000) : null
  }, []);

  useEffect(() => {
    if (stable) {
      setNumber(1);
      return;
    }
    const flicker = () => {
      const timeout = Math.random() * 1000 + 50; // Random interval between 500ms and 1500ms
      setTimeout(() => {
        toggleNumber();
        requestAnimationFrame(flicker);
      }, timeout);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(flicker);
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
  }, [toggleNumber]);

  return (
    <motion.div
      style={{
        color: stable ? '#8E6AE0' : 'white',
      }}
      animate={{ opacity: disapear ? 0 : 1, }}
      className="text-3xl font-bold w-3 mx-1"
      ref={ref}
    >
      {stable ? 1 : number}
    </motion.div>
  );
});

FlickerNumber.displayName = "FlickerNumber";

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
    <FlickerProvider>
      <div className="bg-[#3C3C3C] md:py-6 my-20">
        <div className="flex flex-col items-center justify-center  md:scale-100 scale-50 ">
          {Array.from({ length: lines }).map((_, lineIndex) => (
            <div key={lineIndex} className="flex gap-3">
              {Array.from({ length: numbersPerLine }).map((_, numberIndex) => (
                <FlickerNumber
                  key={numberIndex}
                  initialNumber={getInitialNumber(lineIndex, numberIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </FlickerProvider>
  );
};

export default FlickerAnimation;







export const LoaderFlickerAnimation = ({ finished = false, disapear = false }) => {
  const lines = 5;
  const numbersPerLine = 15;

  const getInitialNumber = (lineIndex, numberIndex) => {
    if (lineIndex === 1) {
      return numberIndex % 2 === 0 ? 0 : 1;
    }
    return numberIndex % 2 === 0 ? 1 : 0;
  };

  return (
    <FlickerProvider>
      <div className="flex flex-col items-center justify-center z-10  py-6 px-2 my-20">
        {Array.from({ length: lines }).map((_, lineIndex) => finished && lineIndex === 2 ?
          (<div key={lineIndex} className="flex gap-3">
            {Array.from({ length: numbersPerLine }).map((_, numberIndex) => numberIndex >= 5 && numberIndex <= 9 ? (
              <FlickerNumber
                disapear={disapear}
                stable={true}
                key={numberIndex}
                initialNumber={getInitialNumber(lineIndex, numberIndex)}
              />
            ) :
              (
                <FlickerNumber
                  disapear={disapear}
                  key={numberIndex}
                  initialNumber={getInitialNumber(lineIndex, numberIndex)}
                />
              ))}
          </div>
          )
          : (<div key={lineIndex} className="flex gap-3">
            {Array.from({ length: numbersPerLine }).map((_, numberIndex) => (
              <FlickerNumber
                disapear={disapear}
                key={numberIndex}
                initialNumber={getInitialNumber(lineIndex, numberIndex)}
              />
            ))}
          </div>
          ))}
      </div>
    </FlickerProvider>
  );
}


export const MedalFlickerAnimation = () => {
  const lines = 8;
  const numbersPerLine = 6;

  const getInitialNumber = (lineIndex, numberIndex) => {
    if (lineIndex === 1) {
      return numberIndex % 2 === 0 ? 0 : 1;
    }
    return numberIndex % 2 === 0 ? 1 : 0;
  };

  return (
    <FlickerProvider>
      <div className="flex flex-col items-center justify-center z-10   h-full">
        {Array.from({ length: lines }).map((_, lineIndex) => (
          <div key={lineIndex} className="flex gap-3">
            {Array.from({ length: numbersPerLine }).map((_, numberIndex) => (
              <FlickerNumber
                key={numberIndex}
                initialNumber={getInitialNumber(lineIndex, numberIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </FlickerProvider >
  );
}
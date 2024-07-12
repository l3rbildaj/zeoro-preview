import img1 from "@/assets/img1.png";
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from "../ui/TextAnimation";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";


// const WebglEffect = dynamic(() => import('./WebglEffect'), { ssr: false });

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to check if everything is loaded
    const checkIfLoaded = () => {
      // You can define your own conditions here to check if everything is loaded
      // For example, you can check if images, fonts, and other resources are loaded
      const allResourcesLoaded = document.readyState === 'complete';

      // Set isLoaded to true if everything is loaded
      if (allResourcesLoaded) {
        setIsLoaded(true);
      }
    };

    // Check if everything is loaded when the component mounts
    checkIfLoaded();

    // Add event listener to check if everything is loaded after the component mounts
    window.addEventListener('load', checkIfLoaded);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', checkIfLoaded);
    };
  }, []);
  return (
    <>
      <motion.div className="absolute w-screen pointer-events-none h-screen top-0 left-0 z-20 ">
        <Canvas className="w-full pointer-events-none h-full">
          {/* {isLoaded ? <WebglEffect /> : null} */}
        </Canvas>
      </motion.div>
      <div className=" relative mt-32 px-10  h-screen">
        <motion.div
          animate={{
            translateX: -40,
          }}
          transition={{
            duration: 1,
          }}


          className=" absolute  -top-[50vh] -left-40   object-cover !z-[0]">
          <div className="w-full h-full relative">
            <motion.div initial={{
              left: '0',
            }}
              animate={{
                left: '100%',
              }}
              transition={{
                duration: 1,
                ease: [0.83, .8, 0.17, 1]
              }}
              className="bg-black w-full z-20 h-full absolute">
            </motion.div>
            <Image
              src={img1}
              alt=""
              width={1500}
              height={1500}
              quality={100}
              className=" opacity-80 scale-75 z-0"
            />
          </div>
        </motion.div>
        <h1 className=" text-white pointer-events-none font-bold text-[150px] leading-none w-full uppercase !z-[5000] relative text-start flex flex-col items-start  ">
          <span><AnimatedText
            text={"WE SOLVE THE"}
            stagger={0.05}
            className={" flex flex-row "}
          /> </span>
          <span className=" flex self-end   items-center gap-3 ">
            <motion.svg
              initial={{
                opacity: '0%',
              }}
              animate={{
                opacity: '100%',
              }}
              transition={{
                duration: 1,
                ease: [0.83, .8, 0.17, 1]
              }}
              width="57"
              height="79"
              viewBox="0 0 57 79"
              className=' '
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.7667 79L0 40.2453L29.7667 0L57 40.2453L29.7667 79Z"
                fill="white"
              />
            </motion.svg>
            <AnimatedText
              text={"MILLENNIUM"}
              stagger={0.05}
              className={" flex flex-row "}
            />
          </span>
          <span className=" pl-20 "><AnimatedText
            text={"EQUATIONS"}
            delay={1}
            stagger={0.05}
            className={" flex flex-row "}
          /></span>
        </h1>
      </div>
    </>
  )
}

export default HeroSection
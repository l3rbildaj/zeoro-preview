import img1 from "@/assets/img1.png";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { useEffect, useState } from "react";
import AnimatedText from "../ui/TextAnimation";


const WebglEffect = dynamic(() => import('./WebglEffect'), { ssr: false });

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile()
  const [isFadingOut, setIsFadingOut] = useState(false);



  const FadeOut = () => {
    setIsFadingOut(true);
  }

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
      <motion.div className="fixed w-screen pointer-events-none  md:h-screen top-0 left-0 z-10 ">
        <Canvas className="w-screen pointer-events-none h-screen border-0 ">
          {isLoaded && !isMobile ? <WebglEffect /> : null}
        </Canvas>
      </motion.div>
      <div className=" relative mt-32 sm:mt-20 px-5 md:px-10 flex flex-col justify-center items-center md:justify-start h-[50vh] gap-20 md:h-screen">
        <motion.div
          animate={{
            translateX: -40,
          }}
          transition={{
            duration: 1,
          }}
          className=" absolute  md:-top-[50vh] md:-left-40  hidden md:block  object-cover !z-[0]">
          <motion.div animate={{
            opacity: isFadingOut ? 0 : 1,
          }}
            transition={{
              duration: 1,
              ease: [0.83, 0.8, 0.17, 1],
            }} className="w-full h-full relative">
            <motion.div initial={{
              left: '0',
            }}
              animate={{
                left: '100%',
                opacity: isFadingOut ? 0 : 1,
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
          </motion.div>
        </motion.div>
        <h1 className="  text-white   font-bold text-4xl  xs:text-6xl max-w-[400px] mx-auto sm:max-w-none md:max-w-[600px] lg:max-w-none sm:text-7xl lg:text-9xl xl:text-[150px] leading-none w-full uppercase !z-[5000] relative text-start flex flex-col items-start  ">
          <span><AnimatedText
            text={"WE SOLVE THE"}
            stagger={0.05}
            className={" flex flex-row "}
          /> </span>
          <span className=" flex self-end  -mt-5 sm:mt-0  items-center gap-3 ">
            <motion.svg
              onClick={() => FadeOut()}
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
              className=' w-5 sm:w-10 lg:w-auto z-50 cursor-pointer  '
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
              className={" flex flex-row  "}
            />
          </span>
          <span className=" pl-0 lg:pl-20 "><AnimatedText
            text={"EQUATIONS"}
            delay={1}
            stagger={0.05}
            className={" flex flex-row -mt-5 sm:mt-0    "}
          /></span>
        </h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-white/20 text-xs">SCROLL DOWN</p>
          <div className=" h-6 w-[1px] bg-white/30 border-white/50">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.5, repeatDelay: .2, ease: [0.83, 0, 0.17, 1] }} className="border origin-top  h-6 border-white">

            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection




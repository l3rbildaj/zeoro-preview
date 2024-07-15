import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";


const Header = () => {
  const ref = useRef(null);

  return (
    <header className="!h-15 z-50 w-full">
      <div className=" px-4 sm:px-6 py-4 flex justify-between items-start mx-auto">
        <div className="flex gap-3 justify-center items-center text-3xl font-bold uppercase">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex h-15 relative flex-col text-white/50 gap-1 items-end">
          <div className="gap-1 items-end flex text-xs flex-col absolute">

            <AnimatedLink title={'REASONING'} scroll url='reasoning' />
            <AnimatedLink title={'EXPERIMENTS'} scroll url={'experiments'} />
            <AnimatedLink title={'COEFFICIENTS'} scroll url={'coifficient'} />
            <AnimatedLink title={'LET’S SOLVE'} url={'/contact'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedLink = ({ title, url, className, textsize, scroll = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  return scroll ?
    <motion.div
      className={'relative pointer cursor-pointer flex flex-col overflow-hidden ' + className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrollLink
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        to={url}>
        <AnimatedWord
          textsize={textsize}
          title={title}
          animations={letterAnimation}
          isHovered={isHovered}
        />
        <motion.div className='absolute text-white top-0' >
          <AnimatedWord
            textsize={textsize}
            title={title}
            animations={letterAnimationTwo}
            isHovered={isHovered}
          />
        </motion.div>
      </ScrollLink>
    </motion.div>

    : (
      <motion.div
        className={'relative pointer flex flex-col overflow-hidden ' + className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={url}>
          <AnimatedWord
            textsize={textsize}
            title={title}
            animations={letterAnimation}
            isHovered={isHovered}
          />
          <motion.div className='absolute text-white top-0' >
            <AnimatedWord
              textsize={textsize}
              title={title}
              animations={letterAnimationTwo}
              isHovered={isHovered}
            />
          </motion.div>
        </Link>
      </motion.div>
    );
};

export { AnimatedLink };

const AnimatedWord = ({
  title,
  animations,
  isHovered,
  textsize = "1rem"
}) => (
  <motion.span className='whitespace-nowrap relative'
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <motion.span className={"relative inline-block whitespace-nowrap text-[${ textsize }]"} key={i}>&nbsp;</motion.span>
      ) : (
        <motion.span className={"relative inline-block whitespace-nowrap text-[${ textsize }]"} variants={animations} key={i} >
          {char}
        </motion.span >
      )
    )}
  </motion.span >
);

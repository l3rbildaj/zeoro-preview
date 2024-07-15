// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const ShuffleGrid = () => {
//   const [expandedIndex, setExpandedIndex] = useState(0);
//   const [prevExpandedIndex, setPrevExpandedIndex] = useState(0);

//   const handleClick = (index) => {
//     setPrevExpandedIndex(expandedIndex);
//     setExpandedIndex(index);
//   };

//   const items = [
//     { id: 0, color: 'bg-red-500', grid:" col-span-3 row-span-4" },
//     { id: 1, color: 'bg-green-500', grid:" col-span-3 row-span-4" },
//     { id: 2, color: 'bg-blue-500', grid:" col-span-1 row-span-1" },
//     { id: 3, color: 'bg-yellow-500', grid:" col-span-2 row-span-3" },
//     { id: 4, color: 'bg-gray-500', grid:" col-span-1 row-span-2" },
//   ];

//   const reorderedItems = [items[expandedIndex], ...items.filter(item => item.id !== expandedIndex)];

//   const shuffle = () => {
//     setPrevExpandedIndex(expandedIndex);
//     setExpandedIndex((expandedIndex + 1) % items.length);
//   };

//   return (
//     <>
//       <button className='text-white border border-white py-2 px-4' onClick={shuffle}>Button</button>
//       <div className="grid grid-cols-6 grid-rows-7 gap-2 h-[600px]">
//         {reorderedItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             layout
//             onClick={() => handleClick(item.id)}
//             className={`flex items-center justify-center ${
//               item.id === expandedIndex ? 'col-span-3 row-span-7' : `${item.grid}`
//             } ${item.color} ${
//               item.id === expandedIndex ? '' : (prevExpandedIndex === item.id ? 'col-span-3 row-span-7' : '')
//             }`}
//           >
//             {`Item ${item.id + 1}`}
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ShuffleGrid;

const data = [
  {
    id: 0,
    color: "bg-red-500",
    grid: "col-span-7 row-span-4",
    img: img1,
    link: "/domain-expansion",
  },
  {
    id: 1,
    color: "bg-green-500",
    grid: "col-span-4 row-span-3",
    img: img2,
  },
  {
    id: 2,
    color: "bg-blue-500",
    grid: "col-span-3 row-span-2",
    img: img4,
    link: "/leads-forge",
  },
  {
    id: 3,
    color: "bg-yellow-500",
    grid: "col-span-2 row-span-1",
    img: img3,
    link: "/exe",
  },
  {
    id: 4,
    color: "bg-gray-500",
    grid: "col-span-1 row-span-1",
    img: img5,
    link: "",
  },
];

import img1 from "@/assets/projects/img1.jpg";
import img2 from "@/assets/projects/img2.png";
import img3 from "@/assets/projects/img3.png";
import img4 from "@/assets/projects/img4.png";
import img5 from "@/assets/projects/img5.png";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from 'next/dynamic';
// Dynamically import Link and Image to reduce initial bundle size
const Link = dynamic(() => import('next/link'));
const Image = dynamic(() => import('next/image'));
import { useRouter } from "next/router";
import { useMemo, useRef, useState } from "react";
import AnimatedText from "../ui/TextAnimation";

const MobileShuffle = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const clicks = useRef(0);
  const items = useRef(data);

  // Calculate reordered items ensuring the active item is always at index 0
  const reorderedItems = useMemo(() => {
    return [
      items.current[expandedIndex],
      ...items.current.filter((item) => item.id !== expandedIndex),
    ];
  }, [expandedIndex]);

  const shuffle = () => {
    clicks.current = clicks.current + 1;
    const newIndex = (expandedIndex + 1) % items.current.length;

    // Preserve the grid size of the first item
    const previousExpandedGrid = items.current[0].grid;
    items.current[expandedIndex].grid = items.current[newIndex].grid;

    // Set the new expanded item and keep the first item's grid size
    items.current[newIndex].grid = previousExpandedGrid;

    setExpandedIndex(newIndex);
  };

  return (
    <div className="px-5 md:px-10 mt-20">
      <div className="flex items-center justify-between mb-10">
        <AnimatedText
          text={"THE EXPERIMENTS"}
          stagger={0.05}
          className={
            " uppercase text-3xl md:text-4xl flex flex-wrap max-w-[500px]  font-bold "
          }
        />

        <button className="text-white" onClick={shuffle}>
          <svg
            width="30"
            height="52"
            viewBox="0 0 57 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.7667 79L0 40.2453L29.7667 0L57 40.2453L29.7667 79Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 grid-rows-7 gap-2 h-[600px]">
        <AnimatePresence>
          {reorderedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}

              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 50,
              }}
              layout
              className={`flex items-center justify-center relative w-full h-full ${index === 0 ? 'col-span-7 row-span-4' : item.grid
                }`}
            >
              <Link href={item.link || ''} key={item.id}>
                <Image
                  src={item.img}
                  alt=""
                  layout="fill" // Use fill layout to adapt to the container size
                  quality={100} // Set quality to 100 for all images
                  className="object-cover select-none"
                  placeholder="blur" // Enable blur placeholder
                  blurDataURL={""} // Provide blurDataURL if available
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

return (
  <div className="px-5 md:px-10 mt-20">
    <div className="flex items-center justify-between mb-10">
      <h1 className="uppercase text-4xl text-white font-bold">
        THE EXPERIMENTS
      </h1>
      <button className="text-white" onClick={shuffle}>
        <svg
          width="30"
          height="52"
          viewBox="0 0 57 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7667 79L0 40.2453L29.7667 0L57 40.2453L29.7667 79Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div className="grid grid-cols-7 grid-rows-7 gap-2 h-[600px]">
      <AnimatePresence>
        {reorderedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}

            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 50,
            }}
            layout
            className={`flex items-center justify-center relative w-full h-full ${index === 0 ? 'col-span-7 row-span-4' : item.grid
              }`}
          >
            <Link href={item.link || ''} key={item.id}>
              <Image
                src={item.img}
                alt=""
                layout="fill" // Use fill layout to adapt to the container size
                quality={100} // Set quality to 100 for all images
                className="object-cover select-none"
                placeholder="blur" // Enable blur placeholder
                blurDataURL={""} // Provide blurDataURL if available
              />
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
);


export default MobileShuffle;

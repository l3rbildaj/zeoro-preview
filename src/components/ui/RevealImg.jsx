





import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";


const RevealImage = ({ className, src , classNameImg=" h-full object-cover " }) => {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref);
  
    useEffect(() => {
      if (hasLoaded && inView) {
        controlsLeft.start({
          x: "-100%",
          transition: { duration: 1, ease: "easeInOut", },
        });
        controlsRight.start({
          x: "100%",
          transition: { duration: 1, ease: "easeInOut", },
        });
      }
    }, [hasLoaded, inView, controlsLeft, controlsRight]);
  
    return (
      <div className={className} ref={ref}>
        <motion.div
          initial={{ x: "0%" }}
          animate={controlsLeft}
          className="absolute scale-110 top-0 bottom-0 left-0 bg-black z-10 [will-change:transform]"
          style={{ width: "50%" }}
        />
        <motion.div
          initial={{ x: "0%" }}
          animate={controlsRight}
          className="absolute scale-110 top-0 bottom-0 right-0 bg-black z-10 [will-change:transform]"
          style={{ width: "50%" }}
        />
        <motion.figure 
        // whileHover={{scale:1.05}} 
        // transition={{duration:0.5,ease:"easeOut"}}
        >
        <Image
          src={src}
          alt="Revealed Image"
          width={3000}
          height={3000}
          quality={100}
          className={" w-full " + classNameImg}
          // placeholder="blur"
          // blurDataURL=""
          loading="lazy"
          onLoadingComplete={() => setHasLoaded(true)}
        />
        </motion.figure>
      </div>
    );
  };
  
  

  export default RevealImage





// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const imageVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.8,
//       ease: 'easeOut'
//     }
//   }),
//   hover: {
//     scale: 1.05,
//     boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)'
//   }
// };

// const textVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { delay: 1.5, duration: 1 } }
// };

// const ComplexReveal = ({ images }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {images.map((image, index) => (
//           <motion.div
//             className="relative overflow-hidden h-48 w-48 rounded-lg shadow-lg transform transition-transform duration-300"
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             custom={index}
//             variants={imageVariants}
//             key={image.src}
//           >
//             <motion.figure variants={imageVariants} >
//             <Image
//               fill
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-auto object-cover"
//             />
//             </motion.figure>
//             <motion.div
//               className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold"
//               variants={textVariants}
//             >
//               {image.alt}
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ComplexReveal;

// pages/index.js


// import img1 from "@/assets/projects/img1.jpg";
// import img2 from "@/assets/projects/img2.png";
// import img3 from "@/assets/projects/img3.png";
// import img4 from "@/assets/projects/img4.png";
// import img5 from "@/assets/projects/img5.png";


// const images = [
//   { src: img1, alt: 'Image 1' },
//   { src: img2, alt: 'Image 2' },
//   { src: img3, alt: 'Image 3' },
//   { src: img4, alt: 'Image 4' },
//   { src: img5, alt: 'Image 5' },
// ];



// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ComplexReveal() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.5,
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const imgVariants = {
//     hidden: { scale: 1.2 },
//     visible: {
//       scale: 1,
//       transition: {
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//     hover: { scale: 1.1, rotate: 5 },
//     tap: { scale: 0.9, rotate: -5 },
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <motion.div
//         className="grid grid-cols-3 gap-8"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {images.map((e, index) => (
//           <motion.div
//             key={index}
//             className="w-48 h-48 relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
//             variants={itemVariants}
//           >
//             <motion.figure
//               className="w-full h-full object-cover"
//               variants={imgVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <Image
//                 fill
//                 src={e.src}
//                 alt=""
//                 className="w-full h-auto object-cover"
//               />
//             </motion.figure>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }



// pages/index.js
// import { motion } from 'framer-motion';

// export default function Home() {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const imgContainerVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const imgVariants = {
//     hidden: { scale: 1.1 },
//     visible: { scale: 1 },
//     hover: { scale: 1.05, rotate: 5 },
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <motion.div
//         className="relative w-96 h-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//         initial="hidden"
//         whileInView="visible"
//         variants={imgContainerVariants}
//       >
//         <motion.img
//           src="https://plus.unsplash.com/premium_photo-1715876267901-617fcb78efa1?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Kitten"
//           className="w-full h-full object-cover"
//           variants={imgVariants}
//           whileHover="hover"
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center"
//           initial="hidden"
//           whileInView="visible"
//           variants={textVariants}
//         >
//           <h1 className="text-xl font-bold">Amazing Kitten</h1>
//           <p className="text-sm">Experience the cuteness!</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

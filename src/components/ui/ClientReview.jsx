import { motion } from "framer-motion";

import Image from "next/image";
import AnimatedText from "./TextAnimation";

const ClietReview = ({ span, img, name, review,textcolor }) => (
  <div className=" px-5 md:px-10 max-w-[1000px] mx-auto my-32 ">
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{once:true}}
      transition={{ duration: 1, ease: "easeIn" }}
      className=" flex items-center gap-3  "
    >
      <Image
        src={img}
        alt="client_img"
        width={3000}
        height={3000}
        quality={100}
        className=" h-12 w-12 sm:w-16 sm:h-16 object-cover"
        loading="lazy"
      />
      <div>
        <h2 className=" text-white font-secondary text-xs md:text-base ">{name}</h2>
        <span className=" text-[#595959] capitalize ">{span}</span>
      </div>
    </motion.div>
    <AnimatedText
      text={review}
      stagger={0.01}
      className={" mt-10 text-xl  xs:text-2xl md:text-3xl flex flex-wrap  mx-auto   " + textcolor}
    />
  </div>
);


export default ClietReview

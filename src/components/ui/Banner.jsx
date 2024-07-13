import img3 from "@/assets/img3.png";
import Image from "next/image";
import AnimatedButton from "./Button";
import { useState } from "react";

function Banner({text}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" relative w-full ">
      <Image
        src={img3}
        alt=""
        width={2000}
        height={2000}
        quality={100}
        className="   object-cover w-full -ml-0   "
      />
      <div className=" absolute top-[50%] left-[50%] text-xs z-30 translate-x-[-50%] translate-y-[-50%] ">
        <AnimatedButton
          text={text}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}

export default Banner;






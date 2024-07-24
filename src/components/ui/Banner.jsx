import img3 from "@/assets/img3.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedButton from "./Button";

function Banner({ text, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" relative w-full mt-20 sm:mt-0 ">
      <Image
        src={img3}
        alt=""
        width={2000}
        height={2000}
        quality={100}
        className="   object-cover w-full -ml-0   "
      />
      <div className=" absolute top-[50%] sm:top-[58%] left-[50%] text-xs z-30 translate-x-[-50%] translate-y-[-50%] w-5/6 sm:w-auto mx-auto ">
        <Link href={href || "/contact"} className=" w-full mx-auto justify-center items-center flex ">
          <AnimatedButton
            text={text}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>
      </div>
    </div>
  );
}

export default Banner;






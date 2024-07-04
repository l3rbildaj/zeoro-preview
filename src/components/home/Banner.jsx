import React from 'react'
import AnimatedButton from '../ui/Button'
import Image from 'next/image'
import img3 from "@/assets/img3.png";

function Banner() {
  return (
    <div className=" relative w-full ">
          <Image
            src={img3}
            alt=""
            width={2000}
            height={2000}
            quality={100}
            className="   object-cover w-full -ml-20   "
          />
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <AnimatedButton />
          </div>
        </div>
  )
}

export default Banner
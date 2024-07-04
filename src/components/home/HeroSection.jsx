import Image from 'next/image'
import img1 from "@/assets/img1.png";
import React from 'react'

function HeroSection() {
  return (
    <div className="  mt-32 px-10 ">
        <Image
          src={img1}
          alt=""
          width={2000}
          height={2000}
          quality={100}
          className=" absolute  -top-60 -left-52 scale-75  object-cover !z-[0] "
        />
        <h1 className=" text-white text-[150px] leading-none w-full uppercase !z-[5000] relative text-start flex flex-col items-start  ">
          <span>WE SOLVE THE </span>
          <span className=" flex self-end   items-center gap-3 ">
            <svg
              width="57"
              height="79"
              viewBox="0 0 57 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.7667 79L0 40.2453L29.7667 0L57 40.2453L29.7667 79Z"
                fill="white"
              />
            </svg>
            MILLENNIUM
          </span>
          <span className=" pl-20 ">EQUATIONS</span>
        </h1>
      </div>
  )
}

export default HeroSection
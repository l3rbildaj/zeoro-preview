import Image from 'next/image'
import React from 'react'
import img2 from "@/assets/img2.png";

function Reasoning() {
  return (
    <div className=" h-[200vh] px-10 ">
          <div className=" sticky top-0  h-screen ">
            <h1 className=" uppercase text-4xl pt-10 ">THE REASONING</h1>
            <div className=" flex justify-center items-center h-full pb-24 gap-20 ">
              <Image
                src={img2}
                alt=""
                width={2000}
                height={2000}
                quality={100}
                className="   object-cover w-96   "
              />
              <div>
                <span className=" text-[#8A8A8A] text-xs ">SCROLL DOWN</span>
                <p className=" text-white capitalize text-xl -mt-1 ">
                  General Premise
                </p>
                <p className=" mt-2 ">
                  If your company prioritizes <br />
                  - Innovation and Adaptability <br />
                  - Quality and Excellence <br />
                  - Integrity and Transparency <br />
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Reasoning
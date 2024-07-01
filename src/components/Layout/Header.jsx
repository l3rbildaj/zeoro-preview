import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const Header = () => {
  const ref = useRef(null);

  return (
    <header className="h-15 shadow-sm dark:border-gray-700  w-full">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center mx-auto">
        <div
          className="flex gap-3 justify-center items-center text-3xl font-bold uppercase "
        >
          <Image src={"/logo.png"} width={100} height={100} priority draggable="false" className=" select-none h-full w-full" alt="logo" /> 
        </div>
        <div   className="flex gap-4 items-center">
          <Link
            ref={ref}
            className="inline-flex items-center  justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#daf50d] text-black hover:bg-[#daf50d]/95 h-10 py-2 px-8"
            href=""
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

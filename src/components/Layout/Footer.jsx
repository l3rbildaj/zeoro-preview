import Link from "next/link";
import { AnimatedLink } from "./Header";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-5 py-4 flex flex-col mt-10">
      <hr className="border border-white/80" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-10 flex-col py-10">
          <Logo />
          <div className="grid md:hidden  grid-cols-2 text-lg text-white/50 gap-10 z-40 flex-col py-10">
            <div className="flex flex-col gap-3 z-40">
              <AnimatedLink url='/' title='The Science' />
              <AnimatedLink url='/' title='Millenniums' />
              <AnimatedLink url='/' title='Coefficients' />
            </div>
            <div className="flex flex-col gap-3 z-40">
              <AnimatedLink url='https://twitter.com/@itsomarzh' title='Knowledge' />
              <AnimatedLink url='/terms' title='Terms & Policies' />
              <AnimatedLink url='/contact' title='Contact us' />
            </div>
          </div>
          <p className="text-2xl text-white">© Zoero Labs LTD.<br />
            All Rights Reserved 2024.</p>
          <div className=" left-0 w-full  flex justify-center items-center text-white">
            Equations Solved by <Link href={"https://twitter.com/@itsomarzh"} className='text-violet-600 mx-2 !z-50 cursor-pointer'>@Omar</Link> and <Link href={"https://twitter.com/@zakariaambari"} className='text-violet-600 mx-2 !z-50 cursor-pointer'>@Zakaria</Link>
          </div>
        </div>
        <div className="md:grid grid-cols-2 hidden  text-lg text-white/50 gap-10 flex-col py-10">
          <div className="flex flex-col gap-3 z-40">
            <AnimatedLink url='/' title='The Science' />
            <AnimatedLink url='/' title='Millenniums' />
            <AnimatedLink url='/' title='Coefficients' />
          </div>
          <div className="flex flex-col gap-3 z-40">
            <AnimatedLink url='https://twitter.com/@itsomarzh' title='Knowledge' />
            <AnimatedLink url='/terms' title='Terms & Policies' />
            <AnimatedLink url='/contact' title='Contact us' />
          </div>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
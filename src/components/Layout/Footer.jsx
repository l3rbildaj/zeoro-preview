import { AnimatedLink } from "./Header";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-5 py-4 flex flex-col mt-10">
      <hr className="border border-white/80" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-10 flex-col py-10">
          <Logo />
          <div className="grid grid-cols-2 text-lg text-white/50 gap-10 flex-col py-10">
            <div className="flex flex-col gap-3 z-40">
              <AnimatedLink url='/' title='The Science' />
              <AnimatedLink url='/' title='Millenniums' />
              <AnimatedLink url='/' title='Coefficients' />
            </div>
            <div className="flex flex-col gap-3 z-40">
              <AnimatedLink url='/' title='Knowledge' />
              <AnimatedLink url='/' title='Terms & Policies' />
              <AnimatedLink url='/' title='Contact us' />
            </div>
          </div>
          <p className="text-2xl">© Zoero Labs LTD.<br />
            All Rights Reserved 2024.</p>
          <div className=" left-0 w-full  flex justify-center items-center text-white">
            Equations Solved by <span className='text-violet-600 mx-2 cursor-pointer'>@Omar</span> and <span className='text-violet-600 mx-2 cursor-pointer'>@Zakaria</span>
          </div>
        </div>
        <div className="md:grid grid-cols-2 hidden  text-lg text-white/50 gap-10 flex-col py-10">
          <div className="flex flex-col gap-3 z-40">
            <AnimatedLink url='/' title='The Science' />
            <AnimatedLink url='/' title='Millenniums' />
            <AnimatedLink url='/' title='Coefficients' />
          </div>
          <div className="flex flex-col gap-3 z-40">
            <AnimatedLink url='/' title='Knowledge' />
            <AnimatedLink url='/' title='Terms & Policies' />
            <AnimatedLink url='/' title='Contact us' />
          </div>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
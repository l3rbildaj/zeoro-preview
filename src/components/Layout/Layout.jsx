
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";



const Layout = ({ children }) => {




  return <AnimatePresence>
    <motion.div className="min-h-screen mx-auto max-w-[1550px] flex flex-col">
      <Header />
      <main className=" box-border bg-black">
        {children}
      </main>
      <Footer />
    </motion.div>
  </AnimatePresence>
};

export default Layout;

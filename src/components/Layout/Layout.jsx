
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";


const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);


  return <AnimatePresence>
    {loading ?
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{
        opacity: 0, transition: {
          duration: 10
        }
      }}>
        <Loader loading={loading} setLoading={setLoading} />
      </motion.div>
      : (
        <motion.div className="min-h-screen mx-auto max-w-[1550px] flex flex-col">
          <Header />
          <main className=" box-border bg-black">
            {children}
          </main>
          <Footer />
        </motion.div>
      )}
  </AnimatePresence>
};

export default Layout;

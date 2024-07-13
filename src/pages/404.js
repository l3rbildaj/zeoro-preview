import Banner from "@/components/ui/Banner";
import { AnimatePresence, motion } from "framer-motion";

function FourOFour() {
  return (
    <div className=" flex flex-col pt-20 !h-screen justify-center items-center w-full ">
      <AnimatePresence>
        <motion.svg
          width="206"
          height="206"
          viewBox="0 0 206 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1.1, fillOpacity: 1.2 }}
            transition={{ ease: "easeIn", duration: 1 }}
            cx="102.034"
            cy="103.012"
            r="90.927"
            stroke="white"
            stroke-width="14.3872"
          />

          <motion.rect
            initial={{ width: 0 }}
            animate={{ width: "275.93px", pathLength: 1, fillOpacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            y="195.112"
            height="14.3872"
            transform="rotate(-45 0 195.112)"
            fill="white"
          />
        </motion.svg>
      </AnimatePresence>

      <motion.h1
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true }}
        className=" font-secondary mt-5 mb-20 md:mb-10 lg:mb-0 "
      >
        No Solution
      </motion.h1>
      <Banner text={"BACK HOME"} />
    </div>
  );
}

export default FourOFour;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}

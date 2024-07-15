import Layout from "@/components/Layout/Layout";
import Coifficient from "@/components/home/Coifficient";
import HeroSection from "@/components/home/HeroSection";
import Reasoning from "@/components/home/Reasoning";
import ShuffleGrid from "@/components/home/ShuffleGrid";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";


import img1 from "@/assets/projects/img1.jpg";
import img2 from "@/assets/projects/img2.png";
import img3 from "@/assets/projects/img3.png";
import img4 from "@/assets/projects/img4.png";
import img5 from "@/assets/projects/img5.png";
import Medals from "@/components/home/Medals";

import profile_pic from "@/assets/exe/profile__pic.png";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from 'framer-motion'
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileShuffle from "@/components/home/MobileShuffle";

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
];

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <HeroSection />
      <div className=" mt-20 ">
        <Reasoning />
        <Banner />
      </div>
      { isMobile ? <MobileShuffle /> : <ShuffleGrid />}
      <FlickerAnimation />
      <Coifficient sectionText={"THE COEFFICIENTS"} container={"relative my-20 md:mt-36 md:my-40   mx-5 2xl:mx-20"} />
      <Medals />
      <div className="  px-5 md:px-10 max-w-[1000px]   my-20 ">
        <AnimatedText
          text={
            "In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."
          }
          stagger={0.01}
          className={
            " mt-10 text-xs md:text-lg  lg:text-xl  !leading-[2.5] py-10 flex flex-wrap font-secondary   mx-auto !text-white  "
          }
        />
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className=" flex items-center gap-3  "
        >
          <Image
            src={profile_pic}
            alt="client_img"
            width={3000}
            height={3000}
            quality={100}
            className=" h-12 w-12 sm:w-16 sm:h-16 object-cover"
            loading="lazy"
          />
          <div>
            <h2 className=" text-white font-secondary text-xs md:text-base  ">Zakaria Ambari</h2>
            <span className=" text-[#595959] capitalize  ">
              Zœro Mathematician{" "}
            </span>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}

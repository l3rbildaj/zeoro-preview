import img1 from "@/assets/leadsforge/img2.png";
import img2 from "@/assets/projects/img4.png";

import RevealImage from "@/components/ui/RevealImg";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from "framer-motion";

import client_img from "@/assets/exe/client_img.png";
import profile_pic from "@/assets/exe/profile__pic.png";
import ClietReview from "@/components/ui/ClientReview";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";
import Image from "next/image";


function LeadsForge() {
  return (
    <>
      <div className=" px-10 ">
        <div className=" flex text-white items-end w-full ">
          <AnimatedText
            text={"LEADS FORGE"}
            stagger={0.1}
            className={" mt-10 text-7xl max-w-[600px] flex flex-wrap font-extrabold "}
          />
          <motion.span
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{once:true}}
            className=" mb-2 "
          >
            Case <br />
            Study
          </motion.span>
        </div>
        <AnimatedText
          text={
            "Strategy Crafting and Web Design for a Market Validation Company."
          }
          stagger={0.01}
          className={
            " mt-5 text-2xl flex flex-wrap max-w-[450px]  font-extrabold "
          }
        />
      </div>
      <RevealImage
        className="w-full  relative my-20 overflow-hidden"
        src={img2}
      />
      <div className=" px-10  my-36 flex gap-0 justify-center text-white items-start ">
        <AnimatedText
          text={"LEADS FORGE EQUATIONS"}
          stagger={0.05}
          className={
            " mt-5 text-7xl flex flex-wrap max-w-[800px]  font-extrabold "
          }
        />
        <AnimatedText
          text={
            "For Leads Forge, we worked on crafting a comprehensive strategy and designing a captivating website to elevate their online presence. As a market validation company, Leads Forge sought to establish credibility and attract their target audience through a seamless digital experience. Our design process centered on creating a visually striking website that not only reflected their innovative approach but also provided intuitive navigation for visitors. The result was a dynamic platform that effectively communicated their expertise."
          }
          stagger={0.01}
          className={
            " mt-5 text-2xl flex flex-wrap max-w-[570px]  font-extrabold "
          }
        />
      </div>
      <RevealImage
        className="w-full relative my-20 overflow-hidden"
        src={img1}
      />
      {/* <ClietReview
        span={"Happy Client"}
        img={client_img}
        name={"Bachir RZAMA"}
        review={
          "“I'm proud to showcase a series of recent branding projects that we passionately brought to life. Each project was approached with a deep understanding of our clients' unique objectives. From crafting compelling visual identities to designing cohesive brand systems, we ensured that every element resonated authentically with our clients' target audiences.”"
        }
      /> */}
      <Banner />
      <FlickerAnimation />
      <div className=" px-10 max-w-[1000px]  my-20 ">
        <AnimatedText
          text={"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."}
          stagger={0.01}
          className={" mt-10 text-xl leading-[2.3] py-10 flex flex-wrap font-secondary  mx-auto !text-white  "}
        />
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{once:true}}
      className=" flex items-center gap-3  "
    >
      <Image
        src={profile_pic}
        alt="client_img"
        width={3000}
        height={3000}
        quality={100}
        className=" w-16 h-16 object-cover"
        loading="lazy"
      />
      <div>
        <h2 className=" text-white font-secondary ">Zakaria Ambari</h2>
        <span className=" text-[#595959] capitalize ">Zœro Mathematician </span>
      </div>
    </motion.div>
  </div>
    </>
  );
}

export default LeadsForge;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}


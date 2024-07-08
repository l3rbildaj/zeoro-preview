import img2 from "@/assets/exe/img1.png";
import img3 from "@/assets/exe/img2.png";
import img4 from "@/assets/exe/img3.png";
import img5 from "@/assets/exe/img4.png";
import img6 from "@/assets/exe/img5.png";
import img7 from "@/assets/exe/img6.png";
import img1 from "@/assets/projects/img3.png";
import RevealImage from "@/components/ui/RevealImg";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from "framer-motion";

import client_img from "@/assets/exe/client_img.png";
import profile_pic from "@/assets/exe/profile__pic.png";
import ClietReview from "@/components/ui/ClientReview";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";
import Image from "next/image";


function Exe() {
  return (
    <>
      <div className=" px-10 ">
        <div className=" flex text-white items-end ">
          <AnimatedText
            text={"EXE"}
            stagger={0.2}
            className={" mt-10 text-7xl font-extrabold "}
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
            "An innovative workout tracker app designed to optimize your exercise regimen and accuracy."
          }
          stagger={0.01}
          className={
            " mt-5 text-2xl text-white flex flex-wrap max-w-[670px]  font-extrabold "
          }
        />
      </div>
      <RevealImage
        className="w-full h-screen relative my-20 overflow-hidden"
        src={img1}
      />
      <div className=" px-10  my-36 flex gap-0 justify-center text-white items-center ">
        <AnimatedText
          text={"EXE APP EQUATIONS"}
          stagger={0.05}
          className={
            " mt-5 text-7xl flex flex-wrap max-w-[500px]  font-extrabold "
          }
        />
        <AnimatedText
          text={
            "EXE is an innovative workout tracker app that combines great design with precise analytics to deliver an efficient fitness experience. Our goal was to create a tool that not only tracks workouts but also provides actionable insights that help users optimize their fitness journey."
          }
          stagger={0.01}
          className={
            " mt-5 text-2xl flex flex-wrap max-w-[670px]  font-extrabold "
          }
        />
      </div>
      <RevealImage
        className="w-full relative my-20 overflow-hidden"
        src={img2}
      />
      <div className=" grid grid-cols-2 gap-14  mt-36 ">
        <RevealImage className="w-full  relative  overflow-hidden" src={img3} />
        <RevealImage className="w-full  relative overflow-hidden" src={img4} />
        <RevealImage className="w-full  relative  overflow-hidden" src={img5} />
        <RevealImage className="w-full  relative  overflow-hidden" src={img6} />
      </div>
      <RevealImage
        className="w-full h-full relative overflow-hidden mt-20 "
        src={img7}
      />
      <ClietReview
        span={"Happy Client"}
        img={client_img}
        name={"Bachir RZAMA"}
        textcolor={" text-[#FF0303] "}
        review={
          "“I'm proud to showcase a series of recent branding projects that we passionately brought to life. Each project was approached with a deep understanding of our clients' unique objectives. From crafting compelling visual identities to designing cohesive brand systems, we ensured that every element resonated authentically with our clients' target audiences.”"
        }
      />
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

export default Exe;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}


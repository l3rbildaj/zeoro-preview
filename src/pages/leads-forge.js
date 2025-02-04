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
import Layout from "@/components/Layout/Layout";
import Head from "next/head";


function LeadsForge() {
  return (
    <Layout>
       <Head>
        <title>Zoero - Leads Forge</title>
      </Head>
      <div className=" px-5 md:px-10 ">
        <div className="  flex flex-col md:flex-row md:items-end text-white  w-full ">
          <AnimatedText
            text={"LEADS FORGE"}
            stagger={0.1}
            className={" mt-20 md:mt-10 text-4xl md:text-7xl max-w-[600px] flex flex-row flex-wrap font-extrabold "}
          />
          <motion.span
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{once:true}}
            className=" mb-2 hidden md:flex "
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
            " mt-5  text-white text-xl sm:text-2xl flex flex-wrap max-w-[450px]  font-extrabold "
          }
        />
        <div className=" flex gap-10 mt-5 ">
          {["Brand Design", "Web Crafting"].map((e, i) => (
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration:0.5, delay: i * 0.1 }}
              key={i}
              className=" flex gap-2 items-center "
            >
              <svg
                viewBox="0 0 39 39"
                className=" h-[30px] w-[30px] sm:h-[39px] sm:w-[39px] "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="19.4314"
                  width="27.4802"
                  height="27.4802"
                  transform="rotate(45 19.4314 0)"
                  fill="#5E4699"
                />
                <path
                  d="M20.7383 18.2422L22.6367 21.8516C23.293 23.1094 23.8125 23.9062 24.1953 24.2422C24.4062 24.4219 24.6953 24.5195 25.0625 24.5352V24.957H18.957V24.5352C19.4336 24.4961 19.7266 24.4336 19.8359 24.3477C19.9531 24.2617 20.0117 24.1445 20.0117 23.9961C20.0117 23.7773 19.8867 23.4336 19.6367 22.9648L18.6875 21.1836L17.8789 22.3672C17.5117 22.9062 17.3047 23.2266 17.2578 23.3281C17.1953 23.4766 17.1641 23.6094 17.1641 23.7266C17.1641 23.9062 17.1992 24.0586 17.2695 24.1836C17.3477 24.3008 17.4492 24.3906 17.5742 24.4531C17.707 24.5078 17.9453 24.5352 18.2891 24.5352V24.957H14V24.5352C14.5312 24.5352 15.0156 24.3906 15.4531 24.1016C15.8984 23.8047 16.543 23.0352 17.3867 21.793L18.2891 20.457L16.4023 16.9648C15.7852 15.8242 15.3242 15.125 15.0195 14.8672C14.7148 14.6094 14.375 14.4648 14 14.4336V14H20.0703V14.4336L19.7539 14.4453L19.1445 14.6562C19.082 14.7109 19.0508 14.8008 19.0508 14.9258C19.0508 15.043 19.0703 15.1641 19.1094 15.2891C19.1328 15.3438 19.2422 15.5547 19.4375 15.9219L20.293 17.5156L20.7383 16.8828C21.3633 16.0234 21.6758 15.4219 21.6758 15.0781C21.6758 14.9141 21.6055 14.7773 21.4648 14.668C21.332 14.5508 21.0898 14.4727 20.7383 14.4336V14H24.6172V14.4336C24.1406 14.4492 23.6953 14.5977 23.2812 14.8789C22.8672 15.1523 22.4023 15.6875 21.8867 16.4844L20.7383 18.2422Z"
                  fill="#121212"
                />
              </svg>
              <span className=" text-white ">{e}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <RevealImage
       classNameImg={" lg:h-screen object-cover"}
        className="w-full  relative my-20 overflow-hidden"
        src={img2}
      />
      <div className=" px-5 md:px-10  my-36 flex flex-col lg:flex-row gap-0 lg:justify-center text-white lg:items-center ">
        <AnimatedText
          text={"LEADS FORGE EQUATIONS"}
          stagger={0.05}
          className={
            " mt-5 text-5xl xs:text-6xl md:text-7xl flex flex-wrap lg:max-w-[600px]  font-extrabold "
          }
        />
        <AnimatedText
          text={
            "For Leads Forge, we worked on crafting a comprehensive strategy and designing a captivating website to elevate their online presence. As a market validation company, Leads Forge sought to establish credibility and attract their target audience through a seamless digital experience. Our design process centered on creating a visually striking website that not only reflected their innovative approach but also provided intuitive navigation for visitors. The result was a dynamic platform that effectively communicated their expertise."
          }
          stagger={0.01}
          className={
            " mt-5 text-2xl flex flex-wrap lg:max-w-[600px] "
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
      <div className=" px-5 md:px-10 max-w-[1000px]  my-20 ">
        <AnimatedText
          text={"In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."}
          stagger={0.01}
          className={" mt-10 text-xs md:text-lg  lg:text-xl !leading-[2.3] py-10 flex flex-wrap font-secondary  mx-auto !text-white  "}
        />
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{once:true}}
      className=" flex items-center  gap-3   "
    >
      <Image
        src={profile_pic}
        alt="client_img"
        width={3000}
        height={3000}
        quality={100}
        className=" h-12 w-12 sm:w-16 sm:h-16 object-cover  "
        loading="lazy"
      />
      <div  className=" flex flex-col gap-1.5 h-fit pt-2 ">
        <h2 className=" text-white font-secondary text-xs md:text-base ">Zakaria Ambari</h2>
        <span className=" text-[#595959] capitalize ">Zœro Mathematician </span>
      </div>
    </motion.div>
  </div>
    </Layout>
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


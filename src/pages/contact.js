import Layout from "@/components/Layout/Layout";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

import profile_pic from "@/assets/exe/profile__pic.png";

function Contact() {
  return (
    <Layout>
      <div className=" px-5 md:px-20 mt-20 ">
        <div className="  text-white items-end  ">
          <AnimatedText
            text={"LET’S SOLVE "}
            stagger={0.05}
            className={" mt-10 text-5xl xs:text-6xl lg:text-7xl xl:text-9xl font-extrabold flex flex-row "}
          />
          <AnimatedText
            text={"TOGETHER"}
            stagger={0.05}
            className={" mt-0 text-5xl xs:text-6xl lg:text-7xl xl:text-9xl font-extrabold flex flex-row "}
          />
        </div>
        <div className=" mt-20 ">
          <AnimatedText
            text={"GENERAL VARIABLES"}
            stagger={0.01}
            className={
              " mt-5 text-xl xs:text-2xl md:text-3xl text-white flex flex-wrap max-w-[670px]  font-extrabold "
            }
          />
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className=" relative ">
              <label className=" text-white ">First & Last Name</label>
              <input
                type="text"
                className=" border border-white rounded-[5px] w-full py-5 px-3 mt-1 placeholder:text-[#BABABA] "
                autoComplete="off"
                spellCheck="false"
                placeholder="Your Full Name"
              />
              <svg
                className=" absolute right-5 top-[65%] translate-y-[-50%] "
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.3023L10.4615 19L27 2"
                  stroke="white"
                  stroke-width="3.5"
                />
              </svg>
            </div>
            <div className=" relative ">
              <label className=" text-white ">Company Email</label>
              <input
                type="text"
                className=" border border-white w-full rounded-[5px] py-5 px-5 mt-1 placeholder:text-[#BABABA] "
                autoComplete="off"
                spellCheck="false"
                placeholder="you@yourcompany.com"
              />
              <svg
                className=" absolute right-5 top-[65%] translate-y-[-50%] "
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.3023L10.4615 19L27 2"
                  stroke="white"
                  stroke-width="3.5"
                />
              </svg>
            </div>
            <div className=" relative ">
              <label className=" text-white ">Company Name</label>
              <input
                type="text"
                className=" border border-white w-full rounded-[5px] py-5 px-5 mt-1 placeholder:text-[#BABABA] "
                autoComplete="off"
                spellCheck="false"
                placeholder="Nice to meet you!"
              />
              <svg
                className=" absolute right-5 top-[65%] translate-y-[-50%] "
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.3023L10.4615 19L27 2"
                  stroke="white"
                  stroke-width="3.5"
                />
              </svg>
            </div>
            <div className=" relative ">
              <label className=" text-white ">Your Project’s Idea</label>
              <input
                type="text"
                className=" border border-white w-full rounded-[5px] py-5 px-5 mt-1 placeholder:text-[#BABABA] "
                autoComplete="off"
                spellCheck="false"
                placeholder="In One Line"
              />
              <svg
                className=" absolute right-5 top-[65%] translate-y-[-50%] "
                width="29"
                height="22"
                viewBox="0 0 29 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.3023L10.4615 19L27 2"
                  stroke="white"
                  stroke-width="3.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" my-32 ">
          <Banner />
        </div>
      </div>
      <FlickerAnimation />
      <div className=" px-5 md:px-10 max-w-[1000px]  my-20 ">
        <AnimatedText
          text={
            "In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."
          }
          stagger={0.01}
          className={
            " mt-10 text-xs md:text-lg  lg:text-xl  !leading-[2.3] py-10 flex flex-wrap font-secondary   mx-auto !text-white  "
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
            className="  h-12 w-12 sm:w-16 sm:h-16 object-cover"
            loading="lazy"
          />
          <div>
            <h2 className=" text-white font-secondary text-xs md:text-base ">
              Zakaria Ambari
            </h2>
            <span className=" text-[#595959] capitalize ">
              Zœro Mathematician{" "}
            </span>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}






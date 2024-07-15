import Layout from "@/components/Layout/Layout";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

import profile_pic from "@/assets/exe/profile__pic.png";
import Coifficient from "@/components/home/Coifficient";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {


  const [sending, setSending] = useState(false);
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();

    const name = e.target.name.value;
    const company_email = e.target.company_email.value;
    const company_name = e.target.company_name.value;
    const project_idea = e.target.project_idea.value;

    if (name == "" || company_email == "" || company_name == "" || project_idea == "") {
      toast.error("All fields are required")
      setSending(false)
    }
    else {
      const templateParams = {
        from_name: name,
        message: project_idea,
        email: company_email,
        reply_to: company_email,
        company_name: company_name,
      };

      emailjs
        .send(
          "service_4h9v1fb",
          "template_56zr3fk",
          templateParams,
          "mCapNEqG9BLXtUBOT"
        )
        .then(
          function (response) {
            setSending("done");
            toast.success("Email sent. Thank you!")
            e.target.reset();
          },
          function (error) {
            setSending("error");
            toast.error("Sorry, unknown error.")
          }
        );
    }

  };



  return (
    <Layout>
      <Toaster
        toastOptions={{
          className: "rounded-full",
          error: {
            style: {
              borderRadius: "100px",
              background: "red",
              color: "#fff",
            },
          },
          success: {
            style: {
              borderRadius: "100px",
              background: "green",
              color: "#fff",
            },
          }

        }}
        containerStyle={{
          zIndex: 60,

        }} />
      <div className=" px-5 md:px-10 lg:px-20 mt-20 ">
        <div className="  text-white items-end  ">
          <AnimatedText
            text={"LET’S SOLVE "}
            stagger={0.05}
            className={" mt-10 text-5xl sm:!text-7xl  xl:!text-9xl font-extrabold flex flex-row "}
          />
          <AnimatedText
            text={"TOGETHER"}
            stagger={0.05}
            className={" mt-0 text-5xl sm:!text-7xl  xl:!text-9xl font-extrabold flex flex-row "}
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
          <form onSubmit={handleSubmit} className=" flex flex-col  mt-10 md:grid  md:grid-cols-2 gap-5 ">
            <div className=" relative ">
              <label className=" text-white ">First & Last Name</label>
              <input
                type="text"
                name="name"
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
                name="company_email"
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
                name="company_name"
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
                name="project_idea"
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
            <div className=" col-span-2 w-full  " >
              <motion.button
                className="  w-full font-bold flex gap-10 justify-center items-center relative overflow-hidden px-10 py-4 text-white border-4 mb-10 uppercase bg-black rounded-lg"
                whileHover={{
                  borderColor: "#00ffff",
                  boxShadow: "0 0 10px #00ffff",
                }}

                style={{ borderColor: "#22505D", transition: "all 0.3s ease" }}
              >
                Send message
                {sending && sending != "done" && sending != "error" && (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-200 animate-spin  fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </motion.button>
            </div>
          </form>
        </div>
        <Coifficient sectionText={"SELECT YOUR COEFFICIENTS"} container={"relative my-20 md:mt-36 md:my-40   "} />
        {/* <div className=" my-32 ">
          <Banner />
        </div>  */}
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






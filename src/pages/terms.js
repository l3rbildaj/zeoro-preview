"use client";

import profile_pic from "@/assets/exe/profile__pic.png";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/ui/Banner";
import FlickerAnimation from "@/components/ui/FlickerAnimation";
import AnimatedText from "@/components/ui/TextAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

function index() {
  return (
    <Layout>
      <div className=" w-full mt-40">
        <div className=" flex text-white  flex-col gap-2 max-w-5xl mx-auto">
          <AnimatedText
            text={"Terms and Conditions"}
            stagger={0.05}
            className={" mt-10 text-3xl md:text-4xl lg:text-7xl flex font-extrabold "}
          />
          <p className="mb-5 text-base  uppercase">
            Last updated as of August 05, 2024
          </p>
        </div>
        <section>
          <div class="flex flex-col  justify-center px-5 md:px-10 text-white">
            <div className="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">
              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="text-sm font-bold  sm:text-3xl ">
                  Introduction
                </p>
                <p className="text-sm sm:text-base">
                  Welcome to Zœro (hereinafter referred to as &ldquo;the Company&ldquo;, &ldquo;we&ldquo;, &ldquo;us&ldquo;, or &ldquo;our&ldquo;).
                  These Terms and Conditions govern your use of our website, located at zoerolabs.com (the &ldquo;Website&ldquo;), and the services provided by the Company. By accessing or using our Website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our Website.

                </p>
              </div>

              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Services</p>
                <p className="text-sm sm:text-base">
                  Zœro is an online digital agency specializing in brand creation, logo design, MVP development, web design, and web development (collectively, the &ldquo;Services&ldquo;).
                </p>
              </div>

              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Use of the Website</p>
                <p className="text-sm sm:text-base">
                  <ul className=" list-decimal ">
                    <li><strong>Eligibility:</strong>{" "}
                      By using our Website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms and Conditions.
                    </li>
                    <li><strong>Account Information:</strong>{" "}
                      If you use our contact form, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your personal information.
                    </li>
                    <li><strong>Prohibited Conduct:</strong>{" "}
                      You agree not to use the Website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Website.
                    </li>
                  </ul>
                </p>
              </div>


              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Collection of Information                </p>
                <p className="text-sm sm:text-base">
                  When you use the &ldquo;Contact Us&ldquo; form on our Website, we collect the following information: <br />
                  <ul className=" list-disc ">
                    <li>Your name
                    </li>
                    <li>Your email address
                    </li>
                    <li>
                      Your business name
                    </li>
                    <li>
                      Your business idea
                    </li>
                  </ul> <br />
                  We use this information solely for the purpose of responding to your inquiries and providing our Services.

                </p>
              </div>


              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Privacy Policy                </p>
                <p className="text-sm sm:text-base">
                Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.

                </p>
              </div>
              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Intellectual Property
                </p>
                <p className="text-sm sm:text-base">
                All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of Zœro or its content suppliers and is protected by international copyright and trademark laws. Unauthorized use of any content on the Website is strictly prohibited.


                </p>
              </div>
              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Limitation of Liability

                </p>
                <p className="text-sm sm:text-base">
                To the fullest extent permitted by law, Zœro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                <ul className=" list-disc ">
                    <li>Your use of the Website or Services

                    </li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein

                    </li>
                    <li>
                    Any interruption or cessation of transmission to or from our Website
                    </li>
                  
                  </ul> <br />


                </p>
              </div>


              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Indemnification


                </p>
                <p className="text-sm sm:text-base">
                You agree to indemnify and hold harmless Zœro, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees) arising from:
                <ul className=" list-disc ">
                    <li>Your use of and access to the Website and Services


                    </li>
                    <li>Your violation of any term of these Terms and Conditions

                    </li>
                    <li>
                    Your violation of any third-party right, including without limitation any copyright, property, or privacy right

                    </li>
                  
                  </ul> <br />


                </p>
              </div>
              

              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Governing Law
                </p>
                <p className="text-sm sm:text-base">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of London, England, without regard to its conflict of law principles. Any disputes arising out of or in connection with these Terms and Conditions shall be resolved exclusively in the courts located in London, England.


                </p>
              </div>


              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Changes to Terms and Conditions

                </p>
                <p className="text-sm sm:text-base">
                We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website following the posting of any changes constitutes acceptance of those changes.



                </p>
              </div>
              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Contact Us


                </p>
                <p className="text-sm sm:text-base">
                If you have any questions about these Terms and Conditions, please contact us via the form.
                </p>
                <p className="text-sm sm:text-base">
                By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.

                </p>
              </div>

              </div>
          </div>
        </section>

        <Banner />
        <FlickerAnimation />
        <div className=" px-10 max-w-[1000px]  my-20 ">
          <AnimatedText
            text={
              "In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes."
            }
            stagger={0.01}
            className={
              " mt-10 text-xl leading-[2.3] py-10 flex flex-wrap font-secondary  mx-auto !text-white  "
            }
          />
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
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
            <div className=" flex flex-col gap-1.5 h-fit pt-2 ">
              <h2 className=" text-white font-secondary text-xs md:text-base ">Zakaria Ambari</h2>
              <span className=" text-[#595959] capitalize ">Zœro Mathematician </span>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export default index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}

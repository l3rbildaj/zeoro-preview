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
        <div className=" flex text-white flex-col gap-2 max-w-5xl mx-auto">
          <AnimatedText
            text={"Privacy Policy"}
            stagger={0.05}
            className={" mt-10 text-7xl flex font-extrabold "}
          />
          <p className="mb-5 text-base  uppercase">
            Last updated as of October 17, 2022
          </p>
        </div>
        <section>
          <div class="flex flex-col  justify-center px-5 md:px-10">
            <div className="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">
              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="text-sm font-bold  sm:text-3xl ">
                  Cookies Settings
                </p>
                <p className="text-sm sm:text-base">
                  Sit vel orci et malesuada nam eu. Hac sed auctor mus ipsum
                  amet. Varius sed nisl leo, aliquet. In ultrices eget
                  fermentum, aliquet dictum nec mattis. Fermentum quam blandit
                  dictum ipsum est. Congue ac urna, id sed consectetur.
                  Consectetur purus in lorem in volutpat orci, magna. Amet, nibh
                  dictum augue vitae sit facilisi tortor orci. Vitae, tempor
                  arcu elit, eu. Egestas at sed quis tempor, quam. Libero dictum
                  placerat enim cras facilisis blandit non tortor. Etiam arcu
                  morbi tincidunt sit vitae, morbi sit viverra vel. Ut risus
                  neque, tortor facilisis arcu
                </p>
              </div>

              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Privacy Settings</p>
                <p className="text-sm sm:text-base">
                  Arcu eget ut tortor eros in et risus. Egestas ipsum dui,
                  fringilla odio mattis et. Amet, sem posuere lacus, et placerat
                  consectetur est nunc. Tempus nibh nisl justo, quam tincidunt
                  porta cras aliquam. Eget gravida posuere neque consequat
                  venenatis, ipsum in. Cras aliquet faucibus egestas quisque
                  arcu amet. Nec dui tempus, non ornare. Ornare tellus euismod
                  ornare neque platea lobortis accumsan accumsan. Nunc
                  scelerisque duis in amet, vitae sed felis nascetur congue.
                  <br />
                  <br />
                  Commodo volutpat placerat molestie morbi quis lorem ante
                  scelerisque. Sit pellentesque porttitor mattis tellus blandit.
                  Erat quisque massa dolor faucibus erat elementum id. Non
                  feugiat neque magna sed accumsan. Nulla elit commodo nunc id.
                  Id sit senectus vestibulum eget tortor risus vestibulum.
                  Faucibus facilisi commodo aliquam aliquet massa porttitor
                  egestas. Enim quam consectetur bibendum sodales ornare
                  faucibus at egestas tincidunt. Interdum egestas pellentesque
                  quisque egestas aliquam varius est, velit nec. Arcu commodo
                  scelerisque odio posuere amet sit consectetur. Auctor
                  tristique posuere egestas aliquet orci egestas.
                </p>
              </div>

              <div className="mb-6 flex flex-col items-start gap-y-3">
                <p className="font-bold sm:text-3xl">Usage Settings</p>
                <p className="text-sm sm:text-base">
                  Sagittis dolor id adipiscing euismod gravida nibh platea
                  sapien, elementum. Nulla neque, curabitur velit integer
                  ultricies feugiat etiam. Donec magna pharetra nullam mauris.
                  Nec, fermentum, varius habitasse arcu habitasse in et. Ut
                  cursus id nulla et ac imperdiet pellentesque dui. At et
                  egestas sed pellentesque tristique cras hac. Egestas diam
                  velit dignissim pellentesque leo, velit vitae euismod. At in
                  odio nunc, etiam nunc, turpis praesent sit. Tristique
                  adipiscing metus consectetur lacus nam fames aenean etiam.
                  Ante tincidunt felis metus consectetur ipsum, ultrices
                  condimentum enim ipsum. Sed lacus mattis pretium sed neque
                  ornare dictum erat. Habitasse nulla convallis sagittis sed.
                  Fames suspendisse ut nisl scelerisque diam lacus.
                  <br />
                  <br />
                  Nullam gravida nisl ultrices risus augue risus dolor dis.
                  Vestibulum, sed consectetur vitae elit sagittis ipsum
                  pellentesque dapibus. Tellus elementum tempor leo nibh
                  fermentum, et enim, rhoncus in. Orci, blandit sodales quam
                  tellus leo justo, viverra vestibulum. Sapien vulputate
                  scelerisque varius sit lacus, in mauris ac. Sed faucibus
                  vulputate sit senectus tortor amet accumsan et dolor. Euismod
                  tincidunt feugiat ac mattis eget cum in nunc. Nulla pharetra
                  vitae, et, ante urna, fringilla. Et nec nisl facilisis
                  habitant est tortor. Erat consequat habitasse cursus placerat
                  ornare sit scelerisque lectus. Dolor dictum proin etiam.
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
              <span className=" text-[#595959] capitalize ">
                Zœro Mathematician{" "}
              </span>
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

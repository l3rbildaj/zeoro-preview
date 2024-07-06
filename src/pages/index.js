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

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className=" mt-20 ">
        <Reasoning />
        <Banner />
      </div>
      <ShuffleGrid />
      <FlickerAnimation />
      <Coifficient />
      {/* <div className="flex items-center justify-center h-screen bg-black">
      <AnimatedText text="Welcome to the Smooth Text Animation with Framer Motion" />
    </div> */}
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

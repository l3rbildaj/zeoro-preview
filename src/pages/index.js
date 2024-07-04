import Layout from "@/components/Layout/Layout";
import Banner from "@/components/home/Banner";
import HeroSection from "@/components/home/HeroSection";
import Reasoning from "@/components/home/Reasoning";
import ShuffleGrid from "@/components/home/ShuffleGrid";
import Coifficient from "@/components/ui/Coifficient";
import FlickerAnimation from "@/components/ui/FlickerAnimation";


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

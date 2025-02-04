import Loader from "@/components/Layout/Loader";
import SEO from "@/components/seo/DefaultSeo";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from 'framer-motion';
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";


const pageTransition = {
  initial: { opacity: 0, },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -50,

    transition: {
      duration: 0.6,
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: { opacity: 0 },
};


export default function App({ Component, pageProps, router }) {


  const [loading, setLoading] = useState(true);
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(false);
    };

    nextRouter.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      nextRouter.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [nextRouter]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SEO />
      <NextIntlClientProvider
        messages={pageProps.messages}
        locale={pageProps.locale}
        timeZone={"Africa/Casablanca"}
      >
        <Analytics />
        <Provider store={store}>
          <SmoothScrolling>
            <AnimatePresence mode="wait">
              {loading ?
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{
                  opacity: 0, transition: {
                    duration: 0.2
                  }
                }}>
                  <Loader loading={loading} setLoading={setLoading} />
                </motion.div>
                :
                <motion.div
                  key={router.route}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <motion.div variants={childVariants}>
                    <Component {...pageProps} />
                  </motion.div>
                </motion.div>
              }
            </AnimatePresence>
          </SmoothScrolling>
        </Provider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
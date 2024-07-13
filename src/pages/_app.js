import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from "react";


const pageTransition = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
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
    scale: 0.8,
    transition: {
      duration: 0.6,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: { opacity: 0, y: 50 },
};


export default function App({ Component, pageProps, router }) {

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
      <NextIntlClientProvider
        messages={pageProps.messages}
        locale={pageProps.locale}
        timeZone={"Africa/Casablanca"}
      >
        <Analytics />
        <Provider store={store}>
          <SmoothScrolling>
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          </SmoothScrolling>
        </Provider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
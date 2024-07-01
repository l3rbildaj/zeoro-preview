import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react"


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextIntlClientProvider
        messages={pageProps.messages}
        locale={pageProps.locale}
        timeZone={"Africa/Casablanca"}
      >
        <Analytics />
        <Provider store={store} >
        <SmoothScrolling>
          <Component {...pageProps} />
        </SmoothScrolling>
        </Provider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

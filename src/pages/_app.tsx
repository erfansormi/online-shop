import React from "react";
import type { AppProps } from 'next/app';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// css
import '../styles/globals.css';
import '../styles/swiper.css';

// toastify
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// font
import { Fredoka } from "@next/font/google";

// mui theme
import { muiTheme } from "../components/utils/mui/costumizeMui";
import { ThemeProvider } from "@mui/material/styles";

// components
import Navbar from '../components/layout/navbar/navbar';
import Footer from "../components/layout/footer/footer";
import LoadingAfterChngLink from "../components/utils/loading/loadingAfterChngLink";
import Loading from "../components/utils/loading/loading";

// font
export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ["400", "500", "600"],
})

// contexts
import UserContextProvider from "../context/userContext";
import GeneralContextProvider from "../context/generalContext";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          Shop Online Store
        </title>
      </Head>
      <UserContextProvider>
        <GeneralContextProvider>
          <ThemeProvider theme={muiTheme}>
            <Loading />
            <Navbar />
            <main className={fredoka.className}>
              <Component {...pageProps} />
            </main>
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </GeneralContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App;
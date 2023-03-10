import React, { useState, useEffect, createContext, useContext } from "react";
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";

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
import { muiTheme } from "../components/mui/costumizeMui";
import { ThemeProvider } from "@mui/material/styles";

// components
import Navbar from '../components/layout/navbar/navbar';
import Footer from "../components/layout/footer/footer";
import LoadingAfterChngLink from "../components/utils/loading/loadingAfterChngLink";

// font
export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ["400", "500", "600"],
})

// context
interface IGeneralContext {
  width: number | null
}
const GeneralContext = createContext({} as IGeneralContext)
export const useGeneralContext = () => useContext(GeneralContext)

const App = ({ Component, pageProps }: AppProps) => {
  // context
  const [general, setGeneral] = useState<IGeneralContext>({
    width: null
  });

  const handleWidth = () => {
    if (typeof window !== "undefined") {
      setGeneral({ width: window.innerWidth })
    }
  }

  // handle page width
  useEffect(() => {
    handleWidth();
    addEventListener("resize", handleWidth)
  }, [])

  return (
    <>
      <GeneralContext.Provider value={general}>
        <ThemeProvider theme={muiTheme}>
          <Navbar />
          <main className={fredoka.className}>
            <Component {...pageProps} />
          </main>
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </GeneralContext.Provider>
    </>
  )
}

export default App;
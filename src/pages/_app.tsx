import type { AppProps } from 'next/app';

// css
import '../styles/globals.css';

// toastify
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// font
import { Fredoka } from "@next/font/google";

// components
import Navbar from '../components/layout/navbar/navbar';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ["400", "500", "600"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar className={fredoka.className} />
      <main className={fredoka.className}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </>
  )
}

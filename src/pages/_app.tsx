import type { AppProps } from 'next/app';

// css
import '../styles/globals.css';

// font
import { Fredoka } from "@next/font/google";

// components
import Navbar from '../components/layout/navbar';

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
    </>
  )
}

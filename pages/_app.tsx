import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local';

const risque = localFont({
  src: [
    {
      path: '../public/fonts/risque/Risque-Regular.ttf',
      weight: '400',
    }
  ],
  variable: '--font-risque'
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={`${risque.variable}`} {...pageProps} />
}

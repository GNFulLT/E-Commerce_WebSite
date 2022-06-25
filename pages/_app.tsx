import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar/Navbar";
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </ParallaxProvider>
  )
}

export default MyApp

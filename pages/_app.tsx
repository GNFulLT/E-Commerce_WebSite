import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar/Navbar";
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider from '../lib/hooks/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ParallaxProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
     </ParallaxProvider>
    </AuthProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import InfoBar from "../components/CPS/Infobar/InfoBar";
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider, { useAuth } from '../lib/hooks/Auth';
import "../styles/global.scss"
import Navbar from '../components/CPS/Navbar/Navbar';
import Footer from '../components/CPS/Footer/Footer';
import { MantineProvider } from '@mantine/core';
import { useAPI } from '../lib/hooks/API';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ParallaxProvider>
        <InfoBar></InfoBar>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
        </MantineProvider>
        <Footer></Footer>
     </ParallaxProvider>
    </AuthProvider>
  )
}

export default MyApp
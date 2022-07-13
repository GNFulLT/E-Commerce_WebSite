import '../styles/globals.css'
import type { AppProps } from 'next/app'
import InfoBar from "../components/Infobar/InfoBar";
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider, { useAuth } from '../lib/hooks/Auth';
import "../styles/global.scss"
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { MantineProvider } from '@mantine/core';
import QueryActiveProvider from '../lib/hooks/Query';
import HomeNav from '../components/HomeNav/HomeNav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ParallaxProvider>
      <QueryActiveProvider>
        <InfoBar></InfoBar>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Navbar></Navbar>
        <HomeNav></HomeNav>
        <Component {...pageProps} />
        </MantineProvider>
        <Footer></Footer>
      </QueryActiveProvider>
     </ParallaxProvider>
    </AuthProvider>
  )
}

export default MyApp

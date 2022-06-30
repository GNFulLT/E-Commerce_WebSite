import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Navbar/navbar.module.scss'
import { IParallax, ParallaxLayer, ParallaxProps } from "@react-spring/parallax";
import { MutableRefObject, UIEvent, useEffect, useRef, useState } from 'react';
import Navbar from "../components/CPS/Navbar/Navbar";
import { Parallax } from 'react-scroll-parallax';
import HomeCarousel from '../components/CPS/HomeCarousel/HomeCarousel';
import HomeNav from '../components/CPS/HomeNav/HomeNav';
const Home: NextPage = () => {
 
  return (
    <>
      <Navbar></Navbar>
      <HomeNav></HomeNav>
      <HomeCarousel></HomeCarousel>
    </>
  )
}

export default Home

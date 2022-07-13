import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Navbar/navbar.module.scss'
import { IParallax, ParallaxLayer, ParallaxProps } from "@react-spring/parallax";
import { MutableRefObject, UIEvent, useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import { Parallax } from 'react-scroll-parallax';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import HomeNav from '../components/HomeNav/HomeNav';
import ProductsShowcase from '../components/ProductsShowcase/ProductsShowcase';
import MarkCarousel from '../components/MarkCarousel/MarkCarousel';

const Home: NextPage = () => {

  return (
    <>
      <HomeCarousel></HomeCarousel>
      <ProductsShowcase></ProductsShowcase>
      <MarkCarousel></MarkCarousel>
    </>
  )
}

export default Home

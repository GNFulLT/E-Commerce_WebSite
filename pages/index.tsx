import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Navbar/navbar.module.scss'
import { IParallax, ParallaxLayer, ParallaxProps } from "@react-spring/parallax";
import { MutableRefObject, UIEvent, useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import { Parallax } from 'react-scroll-parallax';

const Home: NextPage = () => {
  const parallaxRef = useRef<IParallax>(null);
  const navRef = useRef<HTMLDivElement>(null);
 /* useEffect(() => {
    const onScroll = () => {
    let scrollVal = parallaxRef.current!.current! / parallaxRef.current!.space
    if(scrollVal > 0)
    {
      if(!navRef.current?.classList.contains(styles["sticky"]))
      {
        navRef.current?.classList.add(styles["sticky"]);
        console.log("Eklendi")
      }
    }
    else
    {
      if(navRef.current?.classList.contains(styles["sticky"]))
      {
        navRef.current?.classList.remove(styles["sticky"]);
      }
      console.log("Çıkarıldı")

    }
    }
    if (!parallaxRef.current || !parallaxRef.current.container) return

    parallaxRef.current.container.current.onscroll = onScroll
   

  },[]);*/

  return (
    <>
    <div style={{color:"white"}}>sa</div>
    </>
  )
}

export default Home

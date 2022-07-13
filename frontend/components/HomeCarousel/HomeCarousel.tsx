import React, { useEffect, useRef, useState } from 'react'
import { useTransitionCarousel,useSpringCarousel  } from 'react-spring-carousel'
import CarouselItem from './CarouseItem/CarouselItem';
import styles from "./homeCarousel.module.scss";
import { Button, createTheme } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

const item = [{src:"./homeImages/iphone.jpg"},{src:"./homeImages/ipad.jpg"},{src:"./homeImages/laptop.png"}]



const HomeCarousel = () => {

    const { carouselFragment,slideToPrevItem,slideToNextItem,slideToItem,activeItem } = useTransitionCarousel({
        withLoop:true,
        items: item.map((i,index) => ({
          id: index,
          renderItem: (
            <CarouselItem src={i.src}></CarouselItem>
           
          ),
        })),
      });
      const slide = () => 
      {
        slideToNextItem();
      }
      const buttonRef = useRef();
      useEffect(()=>{
        const interval = setInterval(() => {
           buttonRef.current!.click();
        }, 5000);
      
        return () => clearInterval(interval);},[]);
  return (
    <div className={styles["container"]}>
      <div className={styles["left-button-wrapper"]}>
        <Button className={styles["left-button"]} onClick={()=> slideToPrevItem()} sx={{
          ":hover":
          {
            backgroundColor:"rgba(59,89,152,0.2)"
          }
        }}><ArrowLeft></ArrowLeft></Button>
      </div>
        {carouselFragment}
      <div className={styles["right-button-wrapper"]}>
        <Button ref={buttonRef} className={styles["right-button"]}   onClick={()=> slideToNextItem()} sx={{
          ":hover":
          {
            backgroundColor:"rgba(59,89,152,0.2)"
          }
        }} ><ArrowRight></ArrowRight></Button>
      </div>
    </div>
  )
}

export default HomeCarousel
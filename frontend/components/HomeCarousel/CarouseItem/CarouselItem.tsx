import React from 'react'
import styles from "./carouselItem.module.scss";

interface CarouselItemProps
{
    src:string
}

const CarouselItem = ({src}:CarouselItemProps) => {
  return (
    <div className={styles["container"]}>
        <img className={styles["image"]}  src={src} alt="Image" />
    </div>
  )
}

export default CarouselItem
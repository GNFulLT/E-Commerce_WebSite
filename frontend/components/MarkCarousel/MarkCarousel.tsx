import React from 'react'
import styles from "./markCarousel.module.scss"
import { useSpringCarousel } from 'react-spring-carousel'
import MarkCard from './MarkCard/MarkCard'

const marks=[{name:"Apple"},{name:"Nokia"},{name:"Acer"}]
const MarkCarousel = () => {
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useSpringCarousel({
        itemsPerSlide: 2, 
        withLoop: true,
        items: marks.map((i,index) => ({
          id: index,
          renderItem: (
            <MarkCard>
              {i.name}
            </MarkCard>
          ),
        })),
      });

  return (
    <div className={styles["container"]}>
        {carouselFragment}
    </div>
  )
}

export default MarkCarousel
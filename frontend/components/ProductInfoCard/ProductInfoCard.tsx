import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import styles from "./productInfoCard.module.scss"
import {ProductResponseType} from "../../lib/types/ProductType"

interface ProductInfoCardProps
{
    star:number
    product:ProductResponseType
}



const ProductInfoCard = ({star,product}:ProductInfoCardProps) => {
    const router = useRouter();
    const [heart1Checked,setHeart1Checked] = useState(false);
    const [heart2Checked,setHeart2Checked] = useState(false);
    const [heart3Checked,setHeart3Checked] = useState(false);
    const [heart4Checked,setHeart4Checked] = useState(false);
    const [heart5Checked,setHeart5Checked] = useState(false);
  
    
    const heartArr = [setHeart1Checked,setHeart2Checked,setHeart3Checked,setHeart4Checked,setHeart5Checked]
    useEffect(() => {
        const val = Math.round(star);
        for(let i = 0;i<val;i++)
            heartArr[i](true);
    },[])


  return (
    <div className={styles["container"]}>
        <div className={styles["detail-top"]}>
            <div className='medium-text'>{product.SKU}</div>
                <ul>
                    <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart1Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                    <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart2Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                    <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart3Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                    <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart4Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart5Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
            </ul>   
        </div>
        <div className='large-text'>
            {product.name}
        </div>
        <div className='medium-text'>
            {product.desc}
        </div>
        <div className={styles["price"]}>
            <span  className='large-text'><span style={{color:"green"}}>$</span>{product.price}</span><span className='medium-text'>USD</span>
        </div>
    </div>
  )
}

export default ProductInfoCard
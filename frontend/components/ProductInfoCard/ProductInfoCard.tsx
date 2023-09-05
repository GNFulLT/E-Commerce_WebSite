import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import styles from "./productInfoCard.module.scss"
import {ProductResponseType} from "../../lib/types/ProductType"
import { Button } from '@mantine/core'
import { useMdQuery } from '../../lib/hooks/Query'
import { BsTelephone,BsSuitHeart,BsHandbag ,BsBookmarkHeart,BsShare} from "react-icons/bs";

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

    const {mdQuery} = useMdQuery();
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
        <div className={styles["buttons"]}>
        <Button styles={{
                root: {
                  width: `${mdQuery ? "180px" : "90px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  transition:"all 0.2s",
                  ":hover":{
                    opacity:0.8,
                    transition:"all 0.4s"
                  },
                  margin:`${product ? "0" : "50px 0 0 0"}`
                },
                
                label: {
                  fontSize: `${mdQuery ? "14px" : "7px"}`,
                },
              }} radius="xs" size="xs"><div className={styles["btninside"]}><BsHandbag></BsHandbag>Add to the card</div></Button>        
                  
                <Button styles={{
                root: {
                  width: `${mdQuery ? "30px" : "30px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  transition:"all 0.2s",
                  ":hover":{
                    opacity:0.8,
                    transition:"all 0.4s"
                  },
                  margin:`${product ? "0" : "50px 0 0 0"}`
                },
                
                label: {
                    fontSize: `${mdQuery ? "14px" : "10px"}`,
                    padding:"0 12px 0 0"
                },
              }} radius="xs" size="xs"><div className={styles["btninside"]}><BsBookmarkHeart style={{color:"red"}}></BsBookmarkHeart></div></Button>        
                
                <Button styles={{
                root: {
                  width: `${mdQuery ? "30px" : "30px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  transition:"all 0.2s",
                  ":hover":{
                    opacity:0.8,
                    transition:"all 0.4s"
                  },
                  margin:`${product ? "0" : "50px 0 0 0"}`
                },
                
                label: {
                    fontSize: `${mdQuery ? "14px" : "10px"}`,
                    padding:"0 12px 0 0"
                },
              }} radius="xs" size="xs"><div className={styles["btninside"]}><BsShare style={{color:"blue"}}></BsShare></div></Button>        
               
              </div>
    </div>
  )
}

export default ProductInfoCard
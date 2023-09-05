import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./sku.module.scss"
import {BsFillSuitHeartFill, BsHandbag,BsBookmarkHeart,BsShare} from "react-icons/bs"
import { useMdQuery } from '../../lib/hooks/Query'
import { Button } from '@mantine/core'
import MarkCarousel from '../../components/MarkCarousel/MarkCarousel'
import { useSpringCarousel } from 'react-spring-carousel'
import MarkCard from '../../components/MarkCarousel/MarkCard/MarkCard'
import ProductInfoCard from '../../components/ProductInfoCard/ProductInfoCard'
import {ProductResponseType} from "../../lib/types/ProductType"
import Comments from '../../components/Comments/Comments'

const SKU = () => {
    const router = useRouter()
    const { sku,commentPage } = router.query
    const star = 3.4;
    useEffect(() => {
      router.push(`/product/${sku}?commentPage=2`,undefined,{shallow:true});

    },[])

    let pc:ProductResponseType = {
      id:1,
      SKU:sku?.toString()!,
      name:"Oppo A55 4+128gb Akıllı Telefon Işıltılı Siyah",
      imageAlt:"image",
      imageSrc:"/images/product/default.jpg",
      desc:"qweqwebqwebqwebqwen qwenqwe nqwneqwenqwebqwec qwev qwrqerewvr ewtberw nretnewr",
      discPercent:0,
      price:400,
      stockAmount:400
    } 
    return (
      <div className={styles["container"]}>
        <img src="/images/product/default.jpg" alt="" />
        <ProductInfoCard star={3.5} product={pc}></ProductInfoCard>
        <div className={styles["comments"]}>
          <Comments></Comments>
        </div>
      </div>
    );
    /*const [heart1Checked,setHeart1Checked] = useState(false);
    const [heart2Checked,setHeart2Checked] = useState(false);
    const [heart3Checked,setHeart3Checked] = useState(false);
    const [heart4Checked,setHeart4Checked] = useState(false);
    const [heart5Checked,setHeart5Checked] = useState(false);
  
  
    const heartArr = [setHeart1Checked,setHeart2Checked,setHeart3Checked,setHeart4Checked,setHeart5Checked]
    useEffect(() => {
        router.push(`/product/${skt}?commentPage=2`,undefined,{shallow:true});
        const val = Math.round(star);
        for(let i = 0;i<val;i++)
            heartArr[i](true);
    },[])
    

    

  return (
    <div className={styles["container"]}>
        <div className={styles["top-side"]}>
            <div className={styles["images"]}>
                <img className={styles["image"]} src="/images/product/default.jpg" alt="image" />
                <div className={styles["carousel"]}>
                  
                </div>
            </div>
            <div className={styles["details"]}>
                <div className={styles["detail-top"]}>
                    <div className='medium-text'>{skt}</div>
                        <ul>
                            <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart1Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                            <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart2Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                            <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart3Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                            <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart4Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                            <li><BsFillSuitHeartFill className={styles["icon"] + " " + (heart5Checked ? styles["checked"] : "")}></BsFillSuitHeartFill></li>
                        </ul>   
                </div>
                <div className={styles["pname"] + " large-text"}>
                Samsung Galaxy A32 128 Gb Akıllı Telefon Siyah
                </div>
                <div className={styles["desc"] + " medium-text"}>
                Samsung Galaxy A32 128 Gb Akıllı Telefon Siyah
                Samsung Galaxy A32 128 Gb Akıllı Telefon Siyah
                Samsung Galaxy A32 128 Gb Akıllı Telefon Siyah

                </div>
                <div className={styles["price"]}>
                 <span className="large-text"><span style={{color:"#66ff00"}}>$</span>500</span><span className="small-text">USD</span>
                </div>
                <div className={styles["buycard"]}>
                <Button styles={{
                root: {
                  width: `${mdQuery ? "180px" : "90px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  transition:"all 0.2s",
                  ":hover":{
                    opacity:0.8,
                    transition:"all 0.4s"
                  },
                },
                
                label: {
                  fontSize: `${mdQuery ? "14px" : "7px"}`,
                },
        
              }} radius="xs" size="xs" ><div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"baseline",gap:"1px"}}><BsHandbag style={{width:"10px"}} ></BsHandbag>Add to the card</div></Button>
                <div className={styles["iconbtns"]}>
                    <Button variant="outline" styles={{
                root: {
                  width:`${"15px"}`,
                  minWidth:`${"15px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  padding:"0"
                },
                
                label: {
                  fontSize: `${mdQuery ? "14px" : "7px"}`,
                },
        
              }} radius="xs" size="xs" ><div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"baseline",gap:"1px"}}><BsBookmarkHeart style={{width:"10px"}} ></BsBookmarkHeart></div></Button>
                <Button variant="outline" styles={{
                root: {
                  width:`${"15px"}`,
                  minWidth:`${"15px"}`,
                  height: `${mdQuery ? "30px" : "15px"}`,
                  padding:"0"
                },
                
                label: {
                  fontSize: `${mdQuery ? "14px" : "7px"}`,
                },
        
              }} radius="xs" size="xs" ><div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"baseline",gap:"1px"}}><BsShare style={{width:"10px"}} ></BsShare></div></Button>
                
                </div>
                </div>
            </div>
        </div>
    </div>  
  )*/
}

export default SKU
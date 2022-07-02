import React from "react";
import styles from "./product.module.scss";
import { ProductResponseType } from "../../../lib/types/ProductType";
import {Button} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";

interface ProductProps
{
    product:ProductResponseType
}

const Product = ({product}:ProductProps) => {
  const query = useMediaQuery("(min-width: 768px)",false);

    
  return (
    <div className={styles["container"]}>
      <img src={product.imageSrc} alt={product.imageAlt} className={styles["card_image"]}/>
      <div className={`small-text ${styles["stock-code"]}`}>
        {product.SKU}
      </div>
      <div className={styles["product_info"]}>
        <div className={`${styles["productName"]}`}>
          {product.name}
        </div>
        <div className={styles["product_price_info"]}>
          <div className={`medium-text ${styles["price"]}`}>
            <span className="large-text">{product.price}</span><span style={{color:"#66ff00"}}>$</span>
          </div>
        <Button styles={{
                root: {
                  width: `${query ? "180px" : "90px"}`,
                  height: `${query ? "30px" : "15px"}`,
                  transition:"all 0.2s",
                  ":hover":{
                    opacity:0.8,
                    transition:"all 0.4s"
                  }
                },
                
                label: {
                  fontSize: `${query ? "14px" : "7px"}`,
                  padding: "0 75px 0 0",
                },
              }} radius="xs" size="xs">Go to view the product</Button>
            </div>
        </div>
    </div>
  );
};

export default Product;

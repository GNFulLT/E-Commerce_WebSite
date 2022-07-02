import React from 'react'
import styles from "./productsShowCase.module.scss"
import useSWR from "swr";
import { request } from "graphql-request";
import {BACKEND_URL} from "../../../constants"
import { ProductResponseType } from '../../../lib/types/ProductType';
import Product from '../Product/Product';
import { FcLike } from "react-icons/fc"

const GQuery = `
{
    getPopularProducts(limit: 10) {
        name
        price
        stockAmount
        imageSrc
        discPercent
        desc
        id
        SKU
      }
}
`;
const fetcher = (query: any) => {
    return request(BACKEND_URL, query);
  };

const ProductsShowcase = () => {
    const { data, error } = useSWR<{getPopularProducts:ProductResponseType[]},any>(GQuery, fetcher,{revalidateOnFocus:false,revalidateOnReconnect:false});

    if(!data)
    {
        return (
            <div className={styles["container"]}>
        
            </div>
          )
    }
  return (
    <div className={styles["max-container"]}>
        <div className={styles["featured-container"]}>
           <FcLike className={styles["icon"]}></FcLike><span className='large-text'> Most Featured Products</span>
        </div>
        <div className={styles["container"]}>
            {data.getPopularProducts.map(p => <Product key={p.id} product={p}></Product>)}
        </div>
    </div>
  )
}

export default ProductsShowcase
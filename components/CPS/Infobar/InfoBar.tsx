import React from 'react'
import styles from "./infoBar.module.scss"
import {BsTruck} from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md"
import { GoLocation } from "react-icons/go";
import { BiUser } from "react-icons/bi";
const InfoBar = () => {

  
  return (
    <div className={styles["container"]}>
        <div className={styles["left-info"]}>
          <BsTruck></BsTruck>
          <span className='small-text'>Free shipping over $100 shoppify</span>
        </div>
        <div className={styles["right-info"]}>
            <ul>
                <li><GoLocation className={styles["icon"]}></GoLocation><div className='small-text cursor-text'>Contact Us</div></li>
                <li><MdOutlineContactSupport className={styles["icon"]}></MdOutlineContactSupport><div className='small-text cursor-text'>Needed Help</div></li>
                <li><BiUser className={styles["icon"]}></BiUser><div className='small-text cursor-text'>Sign In/Sign Up</div></li>

            </ul>
        </div>
    </div>
  )
}

export default InfoBar
import React from 'react'
import styles from "./homeNav.module.scss"
import { TbDiscount2 } from "react-icons/tb"
import { AiOutlineInfoCircle } from "react-icons/ai"
import {RiComputerLine} from "react-icons/ri";
import { BsLaptop } from "react-icons/bs"
import {MdPhoneIphone} from "react-icons/md"
const HomeNav = () => {
  return (
    <div className={styles["container"]}>
        <div>
            <ul>
                
                <li><RiComputerLine className={styles["icon"]}></RiComputerLine><div className='medium-text'>TV</div></li>
                <li><BsLaptop className={styles["icon"]}></BsLaptop><div className='medium-text'>Laptop</div></li>
                <li><MdPhoneIphone className={styles["icon"]}></MdPhoneIphone><div className='medium-text'>Mobilephone</div></li>

            </ul>
        </div>
        <div>
            <ul>
              <li><TbDiscount2 className={styles["icon"]}></TbDiscount2><div className='medium-text'>Special Offers</div></li>
              <li><AiOutlineInfoCircle className={styles["icon"]}></AiOutlineInfoCircle><div className='medium-text'>About Us</div></li>
            </ul>
        </div>
    </div>
  )
}

export default HomeNav
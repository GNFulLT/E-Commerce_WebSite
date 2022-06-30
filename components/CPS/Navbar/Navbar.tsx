import React from 'react'
import styles from "./navbar.module.scss";
import Searchbar from "./Searchbar/Searchbar";
import { BsTelephone,BsSuitHeart,BsHandbag ,BsBookmarkHeart} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
        <div className={styles["left-side"]}>
            <img className={styles["logo"]} src="/logoVariant.png" alt="Logo"></img>
            <div className='large-text'>GNFCMR</div>
        </div>
        <div className={styles["mid-side"]} >
            <Searchbar></Searchbar>
        </div>
        <div className={styles["right-side"]}>
            <ul>
                <li><BsTelephone className={styles["icon"]}></BsTelephone><div className='small-text'>Call us Now<br></br>0555-555-55-55</div></li>
                <li><BsBookmarkHeart className={styles["icon"]} style={{cursor:"pointer",color:"red"}}></BsBookmarkHeart></li>
                <li><BsHandbag className={styles["icon"]}  style={{cursor:"pointer",color:"blue"}}></BsHandbag></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
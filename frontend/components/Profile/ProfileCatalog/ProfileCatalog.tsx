import React from 'react'
import { useMenuActive } from '../../../lib/hooks/MenuActive';
import styles from "./profileCatalog.module.scss";



const ProfileCatalog = () => {
  const {activeElement,setActiveElement} = useMenuActive();
  console.log(activeElement);
  return (
    <div className={styles["container"]}>
        <div>Profil Foto</div>
        <ul className={styles["list-container"]}>
            <li><div className={activeElement == 0 ? styles["focused-div"] : ""} onClick={() => setActiveElement(0)}>Home</div><span className={activeElement == 0 ? styles["focused-span"] : ""}></span></li> 
            <li><div className={activeElement == 1 ? styles["focused-div"] : ""} onClick={() => setActiveElement(1)}>Whishlist</div><span className={activeElement == 1 ? styles["focused-span"] : ""}></span></li> 
            <li><div className={activeElement == 2 ? styles["focused-div"] : ""} onClick={() => setActiveElement(2)}>Orders</div><span className={activeElement == 2 ? styles["focused-span"] : ""}></span></li> 
            <li><div className={activeElement == 3 ? styles["focused-div"] : ""} onClick={() => setActiveElement(3)}>Personal Information</div><span className={activeElement == 3 ? styles["focused-span"] : ""}></span></li> 
            <li><div className={activeElement == 4 ? styles["focused-div"] : ""} onClick={() => setActiveElement(4)}>Addresses</div><span className={activeElement == 4 ? styles["focused-span"] : ""}></span></li> 
            <li><div className={activeElement == 5 ? styles["focused-div"] : ""} onClick={() => setActiveElement(5)}>Payment Methods</div><span className={activeElement == 5 ? styles["focused-span"] : ""}></span></li> 
        </ul>
        <div>
            as
        </div>
    </div>
  )
}

export default ProfileCatalog
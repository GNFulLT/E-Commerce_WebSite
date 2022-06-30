import React from 'react'
import styles from "./profileHome.module.scss"
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from '../../../../lib/hooks/Auth';

const ProfileHome = () => {
    const {auth} = useAuth();

  return (
    <div className={styles["container"]}>
        <div className={styles["profile-summary"]}>
            <div className={styles["profile-summary-top"]}>
                <FaUserCircle size={60} className={styles["profile-image"]}></FaUserCircle>
                <div className={styles["name"]}>{auth?.first_name} <br /> {auth?.last_name}</div>
            </div>
            <div className={styles["profile-summary-mid"]}>
                <div className={styles["searched-item"]}>
                    <div className={styles["helper-text"]}>
                        Browsed Item
                    </div>
                    <div className={styles["searched-info"]}>
                        100
                    </div>
                </div>
                <div className={styles["loved-item"]}>
                     <div className={styles["helper-text"]}>
                        Loved Item
                     </div>
                     <div className={styles["searched-info"]}>
                        100
                     </div>
                </div>
                <div>
                    <div className={styles["helper-text"]}>
                        Loved Item
                    </div>
                    <div className={styles["searched-info"]}>
                        100
                    </div>
                </div>
                <div>
                    <div className={styles["helper-text"]}>
                        Loved Item
                     </div>
                     <div className={styles["searched-info"]}>
                        100
                     </div>
                </div>
            </div>
            
            <div className={styles["profile-summary-bottom"]}>
                s
            </div>
        </div>
    </div>
  )
}

export default ProfileHome
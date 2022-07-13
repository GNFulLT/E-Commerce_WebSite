import React, { useState } from 'react'
import styles from "./infoBar.module.scss"
import {BsTruck} from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md"
import { GoLocation,GoHome } from "react-icons/go";
import { BiUser,BiUserCircle } from "react-icons/bi";
import LoginCard from '../LoginRegister/LoginCard';
import { useAuth } from '../../lib/hooks/Auth';
import {FiLogOut} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
const InfoBar = () => {
  const {auth,signOut} = useAuth();
  const [showModal,setShowModal] = useState(false);
  console.log(auth?.first_name)
  const logoutHandler = () => {
    signOut();
  }
  const loginRegisterHandler = () => {
    setShowModal(true);
  }
  const modalCloseHandler = () => 
  {
    setShowModal(false);
  }
  return (
    <div className={styles["container"]}>
        <div className={styles["left-info"]}>
          <BsTruck></BsTruck>
          <span className='small-text'>Free shipping over $100 shoppify</span>
        </div>
        <div className={styles["right-info"]}>
            <ul>
                <li className="cursor-text"><GoHome className={styles["icon"]}></GoHome><div className='small-text'>Home</div></li>
                <li className="cursor-text"><GoLocation className={styles["icon"]}></GoLocation><div className='small-text'>Contact Us</div></li>
                <li className="cursor-text"><MdOutlineContactSupport className={styles["icon"]}></MdOutlineContactSupport><div className='small-text'>Needed Help</div></li>
                {auth ? 
                <>
                <li className='cursor-text'><CgProfile className={styles["icon"]}></CgProfile><div className="small-text">{auth.first_name} {auth.last_name}</div></li>
                <li className="cursor-text" onClick={logoutHandler}><FiLogOut className={styles["icon"]}></FiLogOut><div className='small-text'>Log Out</div></li>
                </>
                :
                <li className="cursor-text" onClick={loginRegisterHandler}><BiUser className={styles["icon"]}></BiUser><div className='small-text'>Sign In/Sign Up</div></li>}
            </ul>
        </div>
        <LoginCard isShow={showModal} onClose={modalCloseHandler}></LoginCard>
    </div>
  )
}

export default InfoBar
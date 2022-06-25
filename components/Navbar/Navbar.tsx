import React, { forwardRef, useEffect } from "react";
import styles from "./navbar.module.scss";
import { CgMenuGridO } from "react-icons/cg";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import Link from 'next/link'


const Navbar = forwardRef<HTMLDivElement>((props,ref) => {
  return (
    <div ref={ref} className={styles["container"]}>
      <ul className={styles["left-ul"]}>
        <li>
          <CgMenuGridO className={styles["left-menu-icon"]}></CgMenuGridO>
        </li>
        <li>
        <img
        className={styles["image"]}
          src="/logo.png"
          alt="Logo"
        ></img>
        </li>
      </ul>
      <div className={styles["search-bar-container"]}>
        <form action="" className={styles["search-bar"]}>
          <div className={styles["search-input-container"]}>
            <input type="text" placeholder="Search" />
            <span className={styles["first-span"]}></span>
            <span className={styles["second-span"]}></span>
            <button>
              <BsSearch className={styles["search-icon"]}></BsSearch>
            </button>
          </div>
        </form>
      </div>
      <ul className={styles["right-ul"]}>
        <li><Link href={"/login"}><a>Login</a></Link></li>
        <li>
          <BsFillCartFill className={styles["card"]}></BsFillCartFill>
        </li>
      </ul>
    </div>
  );
});

export default Navbar;

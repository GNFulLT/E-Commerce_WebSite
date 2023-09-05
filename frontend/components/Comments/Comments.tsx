import React from 'react'
import styles from "./comments.module.scss"
import {ParallaxBanner} from "react-scroll-parallax"
import Comment from './Comment/Comment'

const Comments = () => {
  return (
    <div className={styles["container"]}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>

    </div>
  )
}

export default Comments
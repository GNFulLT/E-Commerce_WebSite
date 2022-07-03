import React from 'react'
import styles from "./markCard.module.scss"
interface MarkCardProps
{
    children:any
}

const MarkCard = ({children}:MarkCardProps) => {
  return (
    <div className={styles["container"]}>MarkCard</div>
  )
}

export default MarkCard
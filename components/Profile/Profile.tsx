import React, { useState } from 'react'
import MenuActiveProvider from '../../lib/hooks/MenuActive'
import styles from "./profile.module.scss"
import ProfileCard from './ProfileCard/ProfileCard'
import ProfileCatalog from './ProfileCatalog/ProfileCatalog'

const Profile = () => {
    
  return (
    <div className={styles["container"]}>
        <MenuActiveProvider>
            <ProfileCatalog></ProfileCatalog>
            <ProfileCard></ProfileCard>
        </MenuActiveProvider>
    </div>
  )
}

export default Profile
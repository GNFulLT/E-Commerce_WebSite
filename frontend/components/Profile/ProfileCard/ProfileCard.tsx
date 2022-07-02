import React from 'react'
import ContentLoader,{ Facebook } from 'react-content-loader';
import { useMenuActive } from '../../../lib/hooks/MenuActive'
import styles from "./profileCard.module.scss"
import ProfileHome from './ProfileHome/ProfileHome';

const ProfileCard = () => {
    const {activeElement} = useMenuActive();

    let renderElement = <ProfileHome></ProfileHome>

    if(activeElement != 0)
    {
      renderElement = <ContentLoader
      height="100%"
      speed={0.8}
      backgroundColor={'rgba(255,255,255,0.2)'}
      foregroundColor={'white'}
      width="100%"
    >
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      <rect x="80" y="60" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="80" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="107" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="127" rx="4" ry="4" width="300" height="13" />

    </ContentLoader>
    }
    
    return (
    <div className={styles["container"]}>
      {renderElement}
    </div>
  )
}

export default ProfileCard
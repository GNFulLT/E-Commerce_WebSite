import React from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'

const NavbarLoader = () => {
  return (
    <>
    <ContentLoader
    height="100%"
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    width="100%"
  >
    {/* Only SVG shapes */}
    <rect x="60" y="17" rx="0" ry="0" width="10px" height="10px" />
    <circle cx="100" cy="20" r="10px"></circle>
    
  </ContentLoader>
  </>
  )
}

export default NavbarLoader
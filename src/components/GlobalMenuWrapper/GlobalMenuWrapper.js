import { GlobalMenu } from '@ankr.com/global-menu'
import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './GlobalMenuWrapper.module.css'

const getIsMobile = () => window.innerWidth <= 1235

export default function () {
  const [isVisible, setVisible] = useState(false)
  const portalContainer = document.createElement('div')
  portalContainer.classList.add(styles.root)
  const [isMobile, setMobile] = useState(getIsMobile())

  const renderMenu = ({ before }) => {
    const portalRoot = document.querySelector('.navbar__brand')
    if (portalRoot) {
      if (before) {
        portalRoot.parentNode.insertBefore(portalContainer, portalRoot)
      } else {
        portalRoot.parentNode.insertBefore(
          portalContainer,
          portalRoot.nextSibling,
        )
      }
    }
  }

  const handleResize = () => {
    renderMenu({ before: !getIsMobile() })
    setMobile(getIsMobile())
  }

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    setTimeout(() => setVisible(true), 10)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible, isMobile])

  // useLayoutEffect(() => {
  //   renderMenu({ before: true })
  // }, [portalRoot])

  return createPortal(
    <GlobalMenu project="docs" isMobile={isMobile} locale="en-US" />,
    portalContainer,
  )
}

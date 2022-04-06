import { GlobalMenu } from '@ankr.com/global-menu'
import React, { useLayoutEffect, useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import styles from './GlobalMenuWrapper.module.css'

const getIsMobile = () => window.innerWidth <= 996

export default function () {
  const [isVisible, setVisible] = useState(false)

  const portalContainer = useMemo(() => document.createElement('div'), [])
  portalContainer.classList.add(styles.root)

  const [isMobile, setMobile] = useState(getIsMobile())

  const renderMenu = () => {
    const portalRoot = document.querySelector('.navbar__logo')
    if (portalRoot) {
      portalRoot.parentNode.insertBefore(portalContainer, portalRoot)
    }
  }

  const handleResize = () => {
    renderMenu()
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

  return createPortal(
    <GlobalMenu project="docs" isMobile={isMobile} locale="en-US" />,
    portalContainer,
  )
}

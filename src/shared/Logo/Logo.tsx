import { FC, useRef } from 'react'

import styles from './Logo.module.scss'

interface IProps {
  logoType?: 'first' | 'second' | 'third'
}

export const Logo: FC<IProps> = ({ logoType = 'first' }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className={styles.logo}>
      {logoType === 'first' && <img src="/images/logo.svg" alt="" />}
      {logoType === 'second' && <img src="/images/logo-second.svg" alt="" />}
      {logoType === 'third' && <img src="/images/logo-texture.svg" alt="" />}
    </div>
  )
}

import { FC, useRef } from 'react'

import styles from './Logo.module.scss'

interface IProps {
  logoType?: 'first' | 'second'
}

export const Logo: FC<IProps> = ({ logoType = 'first' }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className={styles.logo}>
      {logoType === 'first' && <img src="/images/logo.png" alt="" />}
      {logoType === 'second' && <img src="/images/logo-2.svg" alt="" />}
    </div>
  )
}

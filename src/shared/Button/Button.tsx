import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  colorType: 'first' | 'second' | 'third'
  children: ReactNode
}

export const Button: FC<IProps> = ({ colorType, children }) => {
  return (
    <button className={clsx(styles[colorType], styles.button)}>
      <div className={styles.content}>{children}</div>
    </button>
  )
}

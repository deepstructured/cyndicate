import clsx from 'clsx'
import React, { FC } from 'react'
import styles from './Button.module.scss'

interface IProps {
  colorType: '' | '2'
}

export const Button: FC<IProps> = ({ colorType }) => {
  return <button className={clsx(styles[colorType], styles.button)}></button>
}

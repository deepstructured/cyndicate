import clsx from 'clsx'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

interface IProps extends ButtonHTMLAttributes<string> {
  colorType?: 'filled' | 'transparent'
  isLink?: boolean
  href?: string
}

export const Button: FC<IProps> = ({
  colorType = 'filled',
  children,
  isLink = true,
  href,
}) => {
  return isLink ? (
    <a href={href} className={clsx(styles.button, styles[colorType])}>
      {children}
    </a>
  ) : (
    <button className={clsx(styles.button, styles[colorType])}>
      {children}
    </button>
  )
}

import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IProps extends ButtonHTMLAttributes<string> {
  handleClick?: () => void
}

export const Button: FC<IProps> = ({ children, type, handleClick }) => {
  return (
    <button
      data-delay="0.75"
      data-start="100%"
      onClick={(ev) => {
        handleClick && handleClick()

        if (type === 'submit') {
          ev.preventDefault()
        }
      }}
      className={clsx(styles.button, 'reveal')}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.border}></div>
    </button>
  )
}

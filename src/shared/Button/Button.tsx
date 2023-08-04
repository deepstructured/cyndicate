import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<string> {
  handleClick?: () => void
}

export const Button: FC<IProps> = ({ children, type, handleClick }) => {
  return (
    <button
      onClick={(ev) => {
        handleClick && handleClick()

        if (type === 'submit') {
          ev.preventDefault()
        }
      }}
      className={styles.button}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.border}></div>
    </button>
  )
}

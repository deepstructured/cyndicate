import { Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react'
import styles from './Input.module.scss'

interface IProps extends InputHTMLAttributes<string> {
  setState: Dispatch<SetStateAction<string>>
}

export const Input: FC<IProps> = ({ value, type, placeholder, setState }) => {
  return (
    <input
      type={type}
      value={value}
      className={styles.input}
      placeholder={placeholder}
      onChange={(ev) => setState(ev.target.value)}
    />
  )
}

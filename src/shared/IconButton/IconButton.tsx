import clsx from 'clsx'
import styles from './IconButton.module.scss'
import { FC } from 'react'

interface IProps {
  href?: string
  icon?: string
  isLink?: boolean
  outlined?: boolean
}

export const IconButton: FC<IProps> = ({
  href,
  icon,
  isLink,
  outlined = false,
}) => {
  return (
    <>
      {isLink ? (
        <a
          href={href}
          className={clsx(
            styles.iconButton,
            outlined && styles.outlined,
            styles.link
          )}
        >
          <img src={icon} alt="" className={styles.icon} />
        </a>
      ) : (
        <button
          className={clsx(styles.iconButton, outlined && styles.outlined)}
        >
          <img src={icon} alt="" className={styles.icon} />
        </button>
      )}
    </>
  )
}

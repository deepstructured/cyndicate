import { FC } from 'react'
import styles from './TokenCard.module.scss'
import clsx from 'clsx'

interface IProps {
  title: string
  listItems: string[]
  icon: string
}

export const TokenCard: FC<IProps> = ({ title, listItems, icon }) => {
  return (
    <div className={styles.tokenCard}>
      <img src={icon} alt="" className={styles.icon} />
      <span className={clsx(styles.title, 'text-gold')}>{title}</span>
      <ul className={styles.list}>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

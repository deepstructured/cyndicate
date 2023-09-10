import clsx from 'clsx'
import styles from './CapitalCard.module.scss'
import { FC } from 'react'
import { Logo } from '../../shared/Logo/Logo'

interface IProps {
  title: string
  text: string
  cardBg: string
}

export const CapitalCard: FC<IProps> = ({ title, text, cardBg }) => {
  return (
    <div className={styles.capitalCard}>
      <div className={clsx(styles.side, styles.front)}>
        <div className={styles.logo}>
          <Logo logoType="third" />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div
        style={{
          backgroundImage: `url(${cardBg})`,
        }}
        className={clsx(styles.side, styles.back)}
      >
        <span className={styles.title}>{title}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

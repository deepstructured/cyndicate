import { FC } from 'react'
import styles from './EvolutionCard.module.scss'
import clsx from 'clsx'

interface IProps {
  title: string
  text: string
  icon: string
  goldStyle?: boolean
}

export const EvolutionCard: FC<IProps> = ({
  title,
  text,
  icon,
  goldStyle = false,
}) => {
  return (
    <div className={clsx(styles.evolutionCard, goldStyle && styles.gold)}>
      <div className={styles.content}>
        <div className={styles.evolutionCardBackground}>
          <img
            src={
              goldStyle
                ? '/images/Home/Evolution/card-bg-gold.png'
                : '/images/Home/Evolution/card-bg.png'
            }
            alt=""
          />
        </div>
        <div className={styles.evolutionCardIcon}>
          <img src={icon} alt="" />
        </div>
        <div className={styles.body}>
          <span className={styles.evolutionCardTitle}>{title}</span>
          <span className={styles.evolutionCardText}>{text}</span>
        </div>
      </div>
    </div>
  )
}

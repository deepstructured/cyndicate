import { FC } from 'react'
import styles from './BenefitCard.module.scss'
import clsx from 'clsx'

interface IProps {
  title: string
  text: string
  img: string
  idx: number
}

export const BenefitCard: FC<IProps> = ({ title, text, img, idx }) => {
  return (
    <div
      data-delay={`${0.125 * idx}`}
      className={clsx(styles.benefitCard, 'reveal')}
    >
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.info}>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

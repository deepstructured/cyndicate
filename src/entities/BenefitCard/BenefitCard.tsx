import { FC } from 'react'
import styles from './BenefitCard.module.scss'

interface IProps {
  title: string
  text: string
  img: string
}

export const BenefitCard: FC<IProps> = ({ title, text, img }) => {
  return (
    <div className={styles.benefitCard}>
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

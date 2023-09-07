import { FC, useRef } from 'react'
import styles from './ExclusiveCard.module.scss'

interface IProps {
  image: string
}

export const ExclusiveCard: FC<IProps> = ({ image }) => {
  const ref = useRef<HTMLDivElement>(null)

  function mouseEnter() {
    if (ref.current) {
      Array.from(
        document.querySelectorAll<HTMLDivElement>(`.${styles.exclusiveCard}`)
      ).forEach((el) => el.classList.remove(`${styles.hovered}`))

      ref.current.classList.add(`${styles.hovered}`)
    }
  }

  function mouseLeave() {
    if (ref.current) {
      ref.current.classList.remove(`${styles.hovered}`)
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => mouseEnter()}
      //   onMouseLeave={() => mouseLeave()}
      className={styles.exclusiveCard}
    >
      <div className={styles.content}>
        <img src={image} alt="" className={styles.exclusiveCardImage} />
      </div>
    </div>
  )
}

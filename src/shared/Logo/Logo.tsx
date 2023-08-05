import clsx from 'clsx'
import styles from './Logo.module.scss'
import { FC } from 'react'

interface IProps {
  animatedLogo: boolean
}

export const Logo: FC<IProps> = ({ animatedLogo }) => {
  return (
    <div data-start="100%" className={clsx(styles.logo, 'reveal')}>
      {animatedLogo ? (
        <video playsInline={true} autoPlay={true} loop={true} muted={true}>
          <source type="video/webm" src="/videos/logo.webm" />
          <source type="video/mp4" src="/videos/logo.mp4" />
        </video>
      ) : (
        <img src="/images/logo.svg" alt="" />
      )}
    </div>
  )
}

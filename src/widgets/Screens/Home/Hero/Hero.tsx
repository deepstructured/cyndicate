import clsx from 'clsx'
import styles from './Hero.module.scss'
import { IconButton } from '../../../../shared/IconButton/IconButton'
import { Logo } from '../../../../shared/Logo/Logo'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.galaxy}>
        <div className={styles.galaxyContainer}>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>Resolution</p>
              <IconButton outlined={true} icon="/images/icons/resolution.svg" />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>Evolution</p>
              <IconButton outlined={true} icon="/images/icons/evolution.svg" />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>roadmap</p>
              <IconButton outlined={true} icon="/images/icons/roadmap.svg" />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>exclusives</p>
              <IconButton outlined={true} icon="/images/icons/exclusives.svg" />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>mission & vision</p>
              <IconButton
                outlined={true}
                icon="/images/icons/mission-vision.svg"
              />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>token</p>
              <IconButton outlined={true} icon="/images/icons/token.svg" />
            </div>
          </div>
          <div className={styles.galaxyLink}>
            <div className={styles.group}>
              <p>Revolution</p>
              <IconButton outlined={true} icon="/images/icons/revolution.svg" />
            </div>
          </div>
        </div>
        <div className={styles.galaxyMiddleLogo}>
          <Logo logoType="second" />
        </div>
      </div>
    </section>
  )
}

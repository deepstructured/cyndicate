import clsx from 'clsx'
import styles from './Platform.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { GoldCircle } from '../../../../shared/GoldCircle/GoldCircle'
import { Logo } from '../../../../shared/Logo/Logo'

export const Platform = () => {
  return (
    <section className={clsx('section', styles.platform)}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.platformBlockFirst}>
            <div className={styles.inner}>
              <div className="section-label-block">
                <span className="section-index">03</span>
                <h2 className="gold-texture">
                  Why cyndicate
                  <div className="section-title">resolution?</div>
                </h2>
              </div>
              <div className="section-text-block">
                <p>
                  Our cutting-edge platform provides{' '}
                  <span className="text-gold">VIP CYNDICATORS</span> exclusive
                  opportunites to invest in real estate leveraging the power of
                  blockchain technology.
                </p>
              </div>
            </div>
            <div className={styles.inner}>
              <div className="section-text-block">
                <p>
                  Platform only available to{' '}
                  <span className="text-gold">VIP CYNDICATORS</span>
                </p>
              </div>
              <Button colorType="first">Learn More</Button>
            </div>
          </div>
          <div className={styles.platformBlockSecond}>
            <div className={styles.platformLabels}>
              <div className={styles.platformLabel}>
                <p className={styles.text}>
                  A Direct Partnership with CYNDICATE in Real Estate
                </p>
                <GoldCircle />
              </div>
              <div className={styles.platformLabel}>
                <p className={styles.text}>Higher Rate of Return</p>
                <GoldCircle />
              </div>
              <div className={styles.platformLabel}>
                <p className={styles.text}>
                  Fractional Ownership and Passive Income
                </p>
                <GoldCircle />
              </div>
              <div className={clsx(styles.platformLabel, styles.reversed)}>
                <p className={styles.text}>More Efficient and Cost-Effective</p>
                <GoldCircle />
              </div>
              <div className={clsx(styles.platformLabel, styles.reversed)}>
                <p className={styles.text}>Transparency through blockchain</p>
                <GoldCircle />
              </div>
            </div>
            <div className={styles.platformCard}>
              <div className={styles.content}>
                <div className={styles.logo}>
                  <Logo logoType="third" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import clsx from 'clsx'
import styles from './Platform.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { GoldCircle } from '../../../../shared/GoldCircle/GoldCircle'

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
            <div className={styles.platformLabel}>
              <p className={styles.text}>
                A Direct Partnership with CYNDICATE in Real Estate
              </p>
              <GoldCircle />
            </div>
            <div className={styles.platformCard}>
              <div className={styles.content}>
                <img
                  src="/images/Home/Platform/card-logo.png"
                  alt=""
                  className={styles.logo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import clsx from 'clsx'
import styles from './OurVision.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export const OurVision = () => {
  return (
    <>
      <section className={clsx('section', styles.ourVision)}>
        <div className="container">
          <div className={styles.ourVisionWrapper}>
            <div className="section-span-group">
              <span className="section-num">002</span>
              <span className="section-span">our vision</span>
              <span className="section-span ml-auto">cyndicate</span>
            </div>

            <div className={styles.ourVisionContent}>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  <h3 className={styles.ourVisionTitle}>
                    To inspire, empower, <br /> and connect individuals
                  </h3>
                  <p className="text-gold">
                    CYNDICATE is your partner in the pursuit of a life of
                    greatness
                  </p>
                </div>
                <img
                  src="/images/OurVision/image.png"
                  alt=""
                  className={styles.ourVisionImage}
                />
              </div>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  <p className="text-gold opacity-0 pointer-events-none">
                    CYNDICATE is your partner in the pursuit of a life of
                    greatness
                  </p>
                  <h3 className={styles.ourVisionTitle}>
                    together to lead lives of greatness
                  </h3>
                </div>
                <div className={styles.block}>
                  <p className="text-grey">
                    We believe that greatness is not an end goal but a
                    continuous journey, and our mission is to create every
                    possibility for people to maximize the potential within
                    themselves and within others.
                  </p>
                  <div className={styles.row}>
                    <div className="quote">
                      <span className="quotes text-gold">“</span>
                      <p className="text-white">
                        CYNDICATE is your partner in <br /> the pursuit of a
                        life of greatness
                      </p>
                    </div>
                    <Button>Join the Future Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

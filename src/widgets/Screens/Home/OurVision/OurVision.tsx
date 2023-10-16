import clsx from 'clsx'
import styles from './OurVision.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'

export const OurVision = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const h3Split: any = new SplitText(`#our-vision-title-1`, {
        type: 'words',
      })

      const h3SplitTwo: any = new SplitText(`#our-vision-title-2`, {
        type: 'words',
      })

      const textSplit: any = new SplitText(`.${styles.ourVisionText}`, {
        type: 'words',
      })

      h3Split.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.025}`
          el.dataset.duration = `0.5`
          el.classList.add('reveal')
        })
      })

      h3SplitTwo.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.025 + 0.25}`
          el.dataset.duration = `0.5`
          el.classList.add('reveal')
        })
      })

      textSplit.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.0125 + 0.25}`
          el.dataset.start = `top top+=100%`
          el.dataset.duration = `0.35`
          el.classList.add('reveal')
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className={clsx('section', styles.ourVision)}>
        <div className="container">
          <div className={styles.ourVisionWrapper}>
            <div className="section-span-group">
              <span
                data-delay="0"
                data-duration="0.45"
                className="reveal opacity-0 translate-y-1/2 section-num"
              >
                002
              </span>
              <span
                data-delay="0.25"
                data-duration="0.45"
                className="reveal opacity-0 translate-y-1/2 section-span"
              >
                our vision
              </span>
              <span
                data-delay="0.35"
                data-duration="0.45"
                className="reveal opacity-0 translate-y-1/2 section-span ml-auto"
              >
                cyndicate
              </span>
            </div>

            <div className={styles.ourVisionContent}>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  <h3 id="our-vision-title-1" className={styles.ourVisionTitle}>
                    <svg
                      className={clsx(styles.line, 'reveal')}
                      data-duration="4"
                      data-delay="0.5"
                      width="173"
                      height="71"
                      viewBox="0 0 173 71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.2699 69.4452C2.2699 58.1274 6.99373 49.1554 15.0149 41.0059C39.936 15.6861 73.0527 5.42298 107.706 3.08679C126.47 1.8218 147.184 -0.0962041 164.374 8.98532C170.141 12.0322 174.834 19.5503 168.113 24.311C156.995 32.1868 140.876 35.4707 127.508 36.2133C124.234 36.3952 112.374 37.0979 114.237 30.5781C115.152 27.3742 122.466 24.945 125.138 23.995C131.654 21.6784 139.36 20.5479 146.257 20.2031C152.588 19.8865 158.981 20.1504 165.322 20.1504"
                        stroke="#DBC99F"
                        stroke-width="2.79295"
                        stroke-linecap="round"
                      />
                    </svg>
                    To inspire, empower, <br /> and connect individuals
                  </h3>
                  <p className="reveal opacity-0 translate-y-1/2 text-gold">
                    CYNDICATE is your partner in the pursuit of a life of
                    greatness
                  </p>
                </div>
                <img
                  src="/images/OurVision/image.png"
                  alt=""
                  data-duration="0.65"
                  data-start="top top+=100%"
                  data-delay="0.25"
                  className={clsx(
                    styles.ourVisionImage,
                    'reveal opacity-0 scale-x-[0.8]'
                  )}
                />
              </div>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  <p className="text-gold opacity-0 pointer-events-none">
                    CYNDICATE is your partner in the pursuit of a life of
                    greatness
                  </p>
                  <h3 id="our-vision-title-2" className={styles.ourVisionTitle}>
                    together to lead lives of greatness
                  </h3>
                </div>
                <div className={styles.block}>
                  <p className={clsx('text-grey', styles.ourVisionText)}>
                    We believe that greatness is not an end goal but a
                    continuous journey, and our mission is to create every
                    possibility for people to maximize the potential within
                    themselves and within others.
                  </p>
                  <div className={styles.row}>
                    <div className="quote">
                      <span
                        data-duration="0.4"
                        data-delay="0"
                        data-start="top top+=100%"
                        className="reveal opacity-0 translate-y-1/2 quotes text-gold"
                      >
                        “
                      </span>
                      <p
                        data-duration="0.4"
                        data-delay="0.25"
                        data-start="top top+=100%"
                        className="reveal opacity-0 translate-y-1/2 text-white"
                      >
                        CYNDICATE is your partner in <br /> the pursuit of a
                        life of greatness
                      </p>
                    </div>

                    <Button dataDelay="0.5">Join the Future Now</Button>
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

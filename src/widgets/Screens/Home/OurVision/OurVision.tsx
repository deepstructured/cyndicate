import clsx from 'clsx'
import styles from './OurVision.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { Magnetic } from '../../../../shared/Magnetic/Magnetic'

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
              {window.innerWidth > 768 && (
                <span
                  data-delay="0.35"
                  data-duration="0.45"
                  className="reveal opacity-0 translate-y-1/2 section-span ml-auto"
                >
                  cyndicate
                </span>
              )}
            </div>

            <div className={styles.ourVisionContent}>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  {window.innerWidth > 768 ? (
                    <h3
                      id="our-vision-title-1"
                      className={styles.ourVisionTitle}
                    >
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
                  ) : (
                    <h3
                      id="our-vision-title-1"
                      className={styles.ourVisionTitle}
                    >
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
                      together to lead lives of greatness
                    </h3>
                  )}
                  <p className="reveal opacity-0 translate-y-1/2 text-gold">
                    CYNDICATE is your partner in the pursuit of a life of
                    greatness
                  </p>
                </div>
                <Magnetic>
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
                </Magnetic>
              </div>
              <div className={styles.ourVisionBlock}>
                <div className={styles.ourVisionGroup}>
                  {window.innerWidth > 768 && (
                    <p className="text-gold opacity-0 pointer-events-none">
                      CYNDICATE is your partner in the pursuit of a life of
                      greatness
                    </p>
                  )}
                  {window.innerWidth > 768 && (
                    <h3
                      id="our-vision-title-2"
                      className={styles.ourVisionTitle}
                    >
                      together to lead lives of greatness
                    </h3>
                  )}
                </div>
                <div className={styles.block}>
                  <p className={clsx('text-grey', styles.ourVisionText)}>
                    We believe that greatness is not an end goal but a
                    continuous journey, and our mission is to create every
                    possibility for people to maximize the potential within
                    themselves and within others.
                  </p>
                  <br />
                  {window.innerWidth <= 768 && (
                    <p className={clsx('text-grey', styles.ourVisionText)}>
                      We want to redefine the very essence of what it means to
                      excel in every facet of life.
                    </p>
                  )}
                  <div className={styles.row}>
                    <div className="quote">
                      <svg
                        data-start="top top+=100%"
                        data-duration="0.75"
                        data-delay="0"
                        className="reveal opacity-0 translate-y-[50%] quotes text-gold"
                        width="21"
                        height="15"
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.82 0.159997C20.46 1.68 20.08 3.32 19.68 5.08C19.28 6.84 18.92 8.56 18.6 10.24C18.28 11.92 18.02 13.46 17.82 14.86H12.12L11.7 14.2C12.06 12.8 12.52 11.3 13.08 9.7C13.64 8.06 14.26 6.42 14.94 4.78C15.62 3.14 16.28 1.6 16.92 0.159997H20.82ZM9.72 0.159997C9.36 1.68 8.98 3.32 8.58 5.08C8.18 6.84 7.82 8.56 7.5 10.24C7.18 11.92 6.92 13.46 6.72 14.86H1.08L0.72 14.2C1.08 12.8 1.54 11.3 2.1 9.7C2.66 8.06 3.26 6.42 3.9 4.78C4.58 3.14 5.24 1.6 5.88 0.159997H9.72Z"
                          fill="#DBC99F"
                        />
                      </svg>
                      <p
                        data-duration="0.4"
                        data-delay="0.25"
                        data-start="top top+=100%"
                        className="reveal opacity-0 translate-y-1/2 text-white"
                      >
                        CYNDICATE is your partner in <br /> the pursuit of a
                        life of greatness
                      </p>
                      <svg
                        data-start="top top+=100%"
                        data-duration="0.75"
                        data-delay="0"
                        className="reveal opacity-0 translate-y-[50%] quotes end text-gold"
                        width="21"
                        height="15"
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.82 0.159997C20.46 1.68 20.08 3.32 19.68 5.08C19.28 6.84 18.92 8.56 18.6 10.24C18.28 11.92 18.02 13.46 17.82 14.86H12.12L11.7 14.2C12.06 12.8 12.52 11.3 13.08 9.7C13.64 8.06 14.26 6.42 14.94 4.78C15.62 3.14 16.28 1.6 16.92 0.159997H20.82ZM9.72 0.159997C9.36 1.68 8.98 3.32 8.58 5.08C8.18 6.84 7.82 8.56 7.5 10.24C7.18 11.92 6.92 13.46 6.72 14.86H1.08L0.72 14.2C1.08 12.8 1.54 11.3 2.1 9.7C2.66 8.06 3.26 6.42 3.9 4.78C4.58 3.14 5.24 1.6 5.88 0.159997H9.72Z"
                          fill="#DBC99F"
                        />
                      </svg>
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

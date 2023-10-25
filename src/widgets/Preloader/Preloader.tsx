import { useContext, useEffect, useState } from 'react'
import { preloader } from './function'

import styles from './Preloader.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import gsap from 'gsap'

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(MainContext)

  const [loading, setLoading] = useState<number>(0)
  const [closing, setClosing] = useState<boolean>(false)
  const [preloaderKilled, setPreloaderKilled] = useState<boolean>(false)

  useEffect(() => {
    if (loading >= 100 && !pageLoaded) {
      setTimeout(() => setClosing(true), 500)
      setTimeout(() => setPageLoaded(true), 750)
      setTimeout(() => setPreloaderKilled(true), 1400)
    }
  }, [loading])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.fromTo(
        '.preloader-counter',
        {
          textContent: 0,
        },
        {
          textContent: 100,
          duration: 2.5,
          ease: 'none',
          snap: { textContent: 1 },
          stagger: 1,
        }
      )

      tl1.eventCallback('onUpdate', () => {
        const percent = Number(tl1.progress().toFixed(2))
        const num = Number(Number(percent * 100).toFixed(2))
        setLoading(num)
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {!preloaderKilled && (
        <div className={clsx(styles.preloader, closing && styles.loaded)}>
          {!pageLoaded && (
            <div className="container">
              <div className={styles.wrapper}>
                <div className={styles.top}>
                  <span className="cyndicate-span">CYNDICATE</span>
                </div>
                <div className={styles.video}>
                  <h1>
                    <span className="preloader-counter">0</span>%
                  </h1>
                  {/* <video
                    playsInline={true}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={false}
                  >
                    <source type="video/mp4" src="/videos/logo.mp4" />
                  </video> */}
                </div>
                <div className={styles.bottom}>
                  <p>From 2023</p>
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.9"
                      d="M0 14.2629L10.3549 10.3549L14.2631 -0.000121641L17.9317 10.3549L28.5261 14.2629L17.9317 17.6792L14.2631 28.526L10.3549 17.6792L0 14.2629Z"
                      fill="#DBC99F"
                    />
                  </svg>
                  <p>
                    Sculpting Wealth, <br />
                    Forging Empires
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

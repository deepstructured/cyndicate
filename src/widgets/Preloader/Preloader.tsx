import { useContext, useEffect, useState } from 'react'
import { preloader } from './function'

import styles from './Preloader.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(MainContext)

  const [loading, setLoading] = useState<number>(0)
  const [closing, setClosing] = useState<boolean>(false)

  useEffect(() => {
    preloader({
      onChange(percentage: number, complete: number) {
        setLoading(percentage)
      },
    })
  }, [])

  useEffect(() => {
    if (loading >= 100 && !pageLoaded) {
      setTimeout(() => setClosing(true), 1000)
      setTimeout(() => setPageLoaded(true), 1500)
    }
  }, [loading])

  return (
    <div className={clsx(styles.preloader, closing && styles.loaded)}>
      {!pageLoaded && (
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <span className="cyndicate-span">CYNDICATE</span>
            </div>
            <div className={styles.video}>
              <h1>{loading < 100 ? loading.toFixed(0) : `100`}%</h1>
              <video
                playsInline={true}
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
              >
                <source type="video/mp4" src="/videos/logo.mp4" />
              </video>
            </div>
            <div className={styles.bottom}>
              <p>From 2023</p>
              <p>
                Advancing Self Evolution, <br />
                Forging Empires
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

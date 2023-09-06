import { useContext, useEffect, useState } from 'react'
import styles from './Preloader.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import { preloader } from './function'

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(MainContext)

  const [loading, setLoading] = useState<number>(0)
  const [closing, setClosing] = useState<boolean>(false)

  const [logoAnimEnd, setLogoAnimEnd] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLogoAnimEnd(true), 4000)
  }, [])

  useEffect(() => {
    preloader({
      onChange(percentage: number, complete: number) {
        setLoading(percentage)
      },
    })
  }, [])

  useEffect(() => {
    if (logoAnimEnd) {
      setClosing(true)
    }
  }, [logoAnimEnd])

  useEffect(() => {
    if (closing) {
      setTimeout(() => setPageLoaded(true), 1000)
    }
  }, [closing])

  return (
    <div
      id="preloader"
      className={clsx(styles.preloader, closing && styles.closing)}
    ></div>
  )
}

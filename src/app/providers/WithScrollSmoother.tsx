import { FC, ReactNode, useContext, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { MainContext } from './MainContext'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

interface IProps {
  children: ReactNode
}

export const WithScrollSmoother: FC<IProps> = ({ children }) => {
  const { setActiveScreen, pageLoaded, hash } = useContext(MainContext)

  useEffect(() => {
    if (hash !== '' && pageLoaded) {
      if (document.querySelector(hash)) {
        const querySection = document.querySelector<HTMLDivElement>(hash)

        if (querySection) {
          window.scrollTo({
            left: 0,
            top: querySection.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }
  }, [hash, pageLoaded])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (pageLoaded) {
      setTimeout(() => document.body.classList.add('page-loaded'), 0)
    }

    if (!pageLoaded) {
      document.body.style.overflowY = `hidden`
    }
  }, [pageLoaded])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pageLoaded) {
        const revealElements = Array.from(
          document.querySelectorAll<HTMLDataElement>('.reveal')
        )

        revealElements.map((item) => {
          ScrollTrigger.create({
            trigger: item.dataset.trigger
              ? item.closest(item.dataset.trigger)
              : item,
            start: item.dataset.start ?? `top top+=75%`,
            onEnter: () =>
              gsap.to(item, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                xPercent: 0,
                yPercent: 0,
                y: 0,
                x: 0,
                z: 0,
                strokeDashoffset: 0,
                duration: item.dataset.duration ? item.dataset.duration : 0.5,
                ease: item.dataset.ease ?? 'ease',
                delay: item.dataset.delay ? Number(item.dataset.delay) : 0,
              }),
          })
        })
      }
    })

    return () => ctx.revert()
  }, [pageLoaded])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

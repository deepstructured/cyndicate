import React, { useContext, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { MainContext } from './MainContext'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

interface IProps {
  children: React.ReactNode
}

export const WithSmoothScroll: React.FC<IProps> = ({ children }) => {
  const { pageLoaded } = useContext(MainContext)

  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    if (!init && pageLoaded) {
      if (ScrollSmoother) {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1,
        })

        const revealItems =
          document.querySelectorAll<HTMLDataElement>('.reveal')

        Array.from(revealItems).map((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: `top ${item.dataset.start ?? `80%`}`,
            end: `bottom 5%`,
            onEnter: () =>
              gsap.to(item, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                duration: 1,
                delay: item.dataset.delay ?? `0`,
              }),
          })
        })

        setInit(true)
      }
    }
  }, [init, pageLoaded])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface IProps {
  children: React.ReactElement
  xK?: number
  yK?: number
}

export const Magnetic: FC<IProps> = ({ children, xK = 7.5, yK = 5 }) => {
  const magnetic = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, 'x', {
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
      })
      const yTo = gsap.quickTo(magnetic.current, 'y', {
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
      })

      magnetic.current.addEventListener('mousemove', (e: MouseEvent) => {
        if (magnetic.current) {
          const { clientX, clientY } = e
          const { height, width, left, top } =
            magnetic.current.getBoundingClientRect()
          const x = (clientX - (left + width / 2)) / xK
          const y = (clientY - (top + height / 2)) / yK
          xTo(x)
          yTo(y)
        }
      })
      magnetic.current.addEventListener('mouseleave', () => {
        xTo(0)
        yTo(0)
      })
    }
  }, [])

  return React.cloneElement(children, { ref: magnetic })
}

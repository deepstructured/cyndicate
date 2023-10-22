import gsap from 'gsap'
import './Ticker.scss'
import React, { FC, useEffect, useRef, useState } from 'react'

interface IProps {
  direction?: 1 | -1
}

export const Ticker: FC<IProps> = ({ direction = 1 }) => {
  const ref = useRef<HTMLUListElement>(null)
  const refCopy = useRef<HTMLUListElement>(null)
  const refItem = useRef<HTMLLIElement>(null)
  const [translateX, setTranslateX] = useState<number>(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current && refCopy.current) {
        let translateWidth: number = 0
        const widthCollection: number[] = []
        const items = Array.from(
          ref.current.querySelectorAll<HTMLDivElement>('li')
        )

        items.map((item) => {
          widthCollection.push(item.offsetWidth)
        })

        widthCollection.forEach((item, idx) => {
          idx + 1 !== widthCollection.length
            ? (translateWidth += item)
            : (translateWidth +=
                item +
                widthCollection[0] +
                (window.innerWidth / 100) * 2.91 * 2)
        })

        translateWidth += (window.innerWidth / 100) * 2.91 * items.length

        setTranslateX(translateWidth)
      }
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (translateX !== 0) {
      gsap.to(ref.current, {
        duration: 45,
        repeat: -1,
        ease: 'none',
        x: translateX * direction,
      })

      gsap.to(refCopy.current, {
        duration: 45,
        repeat: -1,
        ease: 'none',
        x: 0,
      })
    }
  }, [translateX])

  function mouseMove(ev: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (window.innerWidth > 768) {
      const target = ev.target as HTMLLIElement

      target.classList.add('hover')

      const x = ev.nativeEvent.offsetX
      const y = ev.nativeEvent.offsetY

      const images = Array.from(target.querySelectorAll('img'))

      images.forEach((image) => {
        if (image.dataset.canMove === 'true') {
          image.style.top = `${y}px`
          image.style.left = `${x}px`
        }

        image.addEventListener('animationstart', (ev) => {
          if (images[1]) {
            if (images[0] === image) {
              const target = ev.target as HTMLImageElement
              target.dataset.canMove = `false`
            }

            if (images[1] === image) {
              const target = ev.target as HTMLImageElement
              setTimeout(() => (target.dataset.canMove = `false`), 200)
            }

            return
          }

          const target = ev.target as HTMLImageElement
          target.dataset.canMove = `false`
        })

        image.addEventListener('animationend', (ev) => {
          const target = ev.target as HTMLImageElement
          target.closest('li')?.classList.remove('hover')
          target.dataset.canMove = `true`
        })
      })
    }
  }

  return (
    <div
      style={{
        height: `${Number(refItem.current?.offsetHeight)}px`,
      }}
      className="ticker"
    >
      <ul ref={ref} className="ticker__list">
        <li onMouseMove={(ev) => mouseMove(ev)} ref={refItem}>
          <span>Revolution</span>
          <span>01</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Exclusives</span>
          <span>02</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>$CYND TOKEN</span>
          <span>03</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Evolution</span>
          <span>04</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Revolution</span>
          <span>01</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Exclusives</span>
          <span>02</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>$CYND TOKEN</span>
          <span>03</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Evolution</span>
          <span>04</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
      </ul>
      <ul
        style={{
          transform: `translate(${translateX * -direction}px, 0px)`,
        }}
        ref={refCopy}
        className="ticker__list"
      >
        <li onMouseMove={(ev) => mouseMove(ev)} ref={refItem}>
          <span>Revolution</span>
          <span>01</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Exclusives</span>
          <span>02</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>$CYND TOKEN</span>
          <span>03</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Evolution</span>
          <span>04</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Revolution</span>
          <span>01</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Exclusives</span>
          <span>02</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>$CYND TOKEN</span>
          <span>03</span>
          <img data-can-move="true" src="/images/Exclusives/1.png" alt="" />
        </li>
        <li onMouseMove={(ev) => mouseMove(ev)}>
          <span>Evolution</span>
          <span>04</span>
          <img data-can-move="true" src="/images/Exclusives/2.png" alt="" />
          <img data-can-move="true" src="/images/Exclusives/3.png" alt="" />
        </li>
      </ul>
    </div>
  )
}

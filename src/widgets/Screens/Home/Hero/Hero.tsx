import clsx from 'clsx'
import styles from './Hero.module.scss'
import { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '../../../../shared/Button/Button'
import { MainContext } from '../../../../app/providers/MainContext'

export const Hero = () => {
  const { pageLoaded } = useContext(MainContext)
  const heroBg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pageLoaded) {
        ScrollTrigger.create({
          trigger: heroBg.current,
          start: 'top top+=100%',
          end: 'bottom bottom',
          onEnter: () =>
            gsap.to(heroBg.current, {
              scale: 1,
              duration: 0.1,
              delay: 0,
              ease: 'ease',
            }),
        })
      }
    })

    return () => ctx.revert()
  }, [pageLoaded])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h1Split: any = new SplitText(`.${styles.heroBlock} h1`, {
        type: 'words',
      })

      const textSplit: any = new SplitText(`.${styles.text}`, {
        type: 'words',
      })

      h1Split.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.05 + 0.25}`
          el.dataset.start = `top top+=100%`
          el.classList.add('reveal')
        })
      })

      textSplit.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.05 + 0.25}`
          el.dataset.start = `top top+=100%`
          el.classList.add('reveal')
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className={clsx('section', styles.hero)}>
      <div ref={heroBg} className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.scrollLabel}>
          <div data-duration="1.5" className="reveal" data-ease="bounce.out">
            scroll <div className="white-square"></div>
          </div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.heroBlock}>
            <span
              data-delay="0.25"
              data-duration="1"
              className="section-span reveal opacity-0 rotate-[1deg] translate-y-[50%]"
            >
              cyndicate
            </span>
            {window.innerWidth > 768 ? (
              <h1 className="hero-h1">Become Who You Are Meant </h1>
            ) : (
              <h1 className="hero-h1">Become Who You Are Meant to be </h1>
            )}
          </div>
          <div className={styles.heroBlock}>
            <div className={styles.group}>
              <div className={styles.arrow}>
                <svg
                  width="29"
                  height="14"
                  viewBox="0 0 29 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-delay="0.25"
                    data-duration="0.4"
                    className="reveal opacity-0 translate-x-[-50%]"
                    d="M1 6.87234L17.8511 6.87234M17.8511 6.87234L12.7447 1M17.8511 6.87234L12.7447 13"
                    stroke="#DBC99F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    data-delay="0.5"
                    data-duration="0.75"
                    className="reveal opacity-0 translate-x-[-50%]"
                    d="M22.7447 1L27.8511 6.87234L22.7447 13"
                    stroke="#DBC99F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className={styles.text}>
                You become who you surround yourself with, so choose wisely
              </p>
              {window.innerWidth <= 768 && <Button>Join us</Button>}
            </div>
            {window.innerWidth > 768 && <h1>To Be</h1>}
          </div>
        </div>
      </div>
    </section>
  )
}

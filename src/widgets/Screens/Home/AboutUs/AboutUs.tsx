import clsx from 'clsx'
import styles from './AboutUs.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import gsap from 'gsap'
import { useEffect } from 'react'

import 'swiper/css'
import { Ticker } from '../../../../entities/Ticker/Ticker'

export const AboutUs = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText('#about-us-text', {
        type: 'words',
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#about-us-text',
            start: 'top 75%',
            end: '+=60%',
            scrub: 1,
          },
        })
        .set(
          split.words,
          {
            color: '#fafafa',
            stagger: 0.1,
          },
          0.1
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section id="about-us" className={clsx('section', styles.aboutUs)}>
        <div className="container">
          <div className={styles.aboutUsWrapper}>
            <div className="section-span-group">
              <span
                data-delay="0"
                className="reveal opacity-0 translate-y-[50%] section-num"
              >
                001
              </span>
              <span
                data-delay="0.25"
                className="reveal opacity-0 translate-y-[50%] section-span"
              >
                about us
              </span>
            </div>
            <div className={styles.aboutUsText}>
              <p id="about-us-text" className={styles.text}>
                At <span className="text-gold">CYNDICATE</span>, our story is
                one of relentless dedication to excellence. Founded by a group
                of visionaries who share a passion for pushing the boundaries of
                what’s possible, we set out to create an elite lifestyle brand
                and community that redefines the way people approach health,
                fitness, wellness, mindset, and business.
              </p>
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
                  data-start="top top+=100%"
                  data-duration="0.75"
                  data-delay="0.3"
                  className="reveal opacity-0 translate-y-[50%] text-gold"
                >
                  CYNDICATE: Where Greatness Meets Lifestyle Excellence
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
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-wrapper">
        <Ticker />
        <Ticker direction={-1} />
      </div>
    </>
  )
}

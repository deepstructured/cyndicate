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
        type: 'chars',
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
          split.chars,
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
                <span
                  data-start="top top+=100%"
                  data-duration="0.75"
                  data-delay="0"
                  className="reveal opacity-0 translate-y-[50%] quotes text-gold"
                >
                  “
                </span>
                <p
                  data-start="top top+=100%"
                  data-duration="0.75"
                  data-delay="0.3"
                  className="reveal opacity-0 translate-y-[50%] text-gold"
                >
                  CYNDICATE: Where Greatness Meets Lifestyle Excellence
                </p>
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

import clsx from 'clsx'
import styles from './AboutUs.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'

import 'swiper/css'

export const AboutUs = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText('#about-us-text', {
        type: 'chars',
      })

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#about-us-text',
            start: 'top 75%',
            end: '+=50%',
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
              <span className="section-num">001</span>
              <span className="section-span">about us</span>
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
                <span className="quotes text-gold">“</span>
                <p className="text-gold">
                  CYNDICATE: Where Greatness Meets Lifestyle Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker">
        <Swiper
          spaceBetween={44}
          allowTouchMove={false}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          // }}
          // modules={[Autoplay]}
          // loop={true}
          // speed={3000}
          className="ticker-row"
        >
          <SwiperSlide className="ticker-item">
            <span>Revolution</span>
            <span>01</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Exclusives</span>
            <span>02</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Resolution</span>
            <span>03</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Capital</span>
            <span>04</span>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={44}
          allowTouchMove={false}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          // }}
          // modules={[Autoplay]}
          // loop={true}
          // speed={3000}
          className="ticker-row"
        >
          <SwiperSlide className="ticker-item">
            <span>Revolution</span>
            <span>01</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Exclusives</span>
            <span>02</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Resolution</span>
            <span>03</span>
          </SwiperSlide>
          <SwiperSlide className="ticker-item">
            <span>Capital</span>
            <span>04</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

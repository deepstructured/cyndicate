import clsx from 'clsx'
import styles from './Exclusives.module.scss'
import { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ISwiper } from '../../../../interfaces/ISwiper'

export const Exclusives = () => {
  const [swiper, setSwiper] = useState<ISwiper>()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.exclusives-word big', {
        xPercent: 50,
      })

      ScrollTrigger.create({
        trigger: '.exclusives-word big',
        start: 'top 100%',
        end: 'bottom bottom-=150%',
        scrub: 1,
        animation: gsap.to('.exclusives-word big', {
          xPercent: -50,
        }),
      })
    })

    return () => ctx.revert()
  }, [])

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [centerIndex, setCenterIndex] = useState<number>(2)

  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])

  return (
    <>
      <section className="section exclusives-word">
        <big>Exclusives</big>
      </section>
      <section className={clsx('section', styles.exclusives)}>
        <div className="container">
          <div className={styles.exclusivesWrapper}>
            <div className={styles.exclusivesCarousel}>
              <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper?.realIndex)}
                slidesPerView={5}
                spaceBetween={45}
                loop={true}
                className={styles.exclusivesSwiper}
              >
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/1.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/2.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/3.png" alt="" />
                  <span>CENTER</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/4.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/5.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/1.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/2.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/3.png" alt="" />
                  <span>CENTER</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/4.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
                <SwiperSlide className={styles.exclusivesCard}>
                  <img src="/images/Exclusives/5.png" alt="" />
                  <span>Sweatshirt</span>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.exclusivesInfoPanel}>
              <div className={styles.exclusivesInfoPanelTop}>
                <svg
                  className={styles.line}
                  width="135"
                  height="2"
                  viewBox="0 0 135 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M134.5 1H0"
                    stroke="url(#paint0_linear_40_30)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_40_30"
                      x1="134"
                      y1="1"
                      x2="2.5"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBC99F" />
                      <stop offset="1" stop-color="#DBC99F" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className={styles.group}>
                  <span className="section-num">002</span>
                  <span className="section-span">brand clothing</span>
                </div>
                <svg
                  className={styles.line}
                  preserveAspectRatio="none"
                  width="135"
                  height="2"
                  viewBox="0 0 135 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M0 1H134.5"
                    stroke="url(#paint0_linear_40_31)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_40_31"
                      x1="0.500002"
                      y1="1"
                      x2="132"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBC99F" />
                      <stop offset="1" stop-color="#DBC99F" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className={styles.exclusivesText}>
                Lorem ipsum dolor sit amet consectetur. Condimentum eu tincidunt
                massa platea et tempus orci. Sit morbi fermentum vitae sit sed
                et. Mi id libero quis integer convallis. Lectus vitae libero
                diam porttitor amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

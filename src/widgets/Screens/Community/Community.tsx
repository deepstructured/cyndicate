import { useState } from 'react'
import { benefitsData } from '../../../data'
import { BenefitCard } from '../../../entities/BenefitCard/BenefitCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSplit from '../../../app/hooks/useSplit'

export const Community = () => {
  const [swiper, setSwiper] = useState<any>()
  const [activeSlide, setActiveSlide] = useState<number>(0)

  return (
    <section id="community">
      <div className="container">
        <div className="wrapper">
          <h2 className="c-gold-primary reveal">
            {useSplit('Join')}{' '}
            <span className="cyndicate-span">
              {useSplit('Cyndicate', 0.25)}
            </span>{' '}
            {useSplit('community', 0.5)}
          </h2>
          <div className="row">
            <p className="reveal">The benefits of our community</p>
            {window.innerWidth > 768 && (
              <a href="">
                <p className="reveal">
                  Updates on <span className="c-token">$cynd</span> Token
                  Launch.
                </p>
                <img src="/images/icons/gray-arrow-right.svg" alt="" />
              </a>
            )}
          </div>

          {window.innerWidth > 768 ? (
            <div className="benefits-community">
              {benefitsData.map((benefit, idx) => (
                <BenefitCard
                  key={idx}
                  idx={idx}
                  title={benefit.title}
                  text={benefit.text}
                  img={benefit.img}
                />
              ))}
            </div>
          ) : (
            <div className="benefits-community">
              <Swiper
                onSlideChange={() =>
                  swiper && setActiveSlide(swiper.activeIndex)
                }
                onSwiper={(swiper) => setSwiper(swiper)}
                className="benefits-swiper"
              >
                {benefitsData.map((benefit, idx) => (
                  <SwiperSlide key={idx}>
                    <BenefitCard
                      idx={idx}
                      title={benefit.title}
                      text={benefit.text}
                      img={benefit.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {window.innerWidth <= 768 && (
            <div className="flex items-center justify-between w-100">
              <a href="">
                <p className="reveal">
                  Updates on <span className="c-token">$cynd</span>
                  <br /> Token Launch.{' '}
                  <img
                    style={{ display: 'inline-block' }}
                    src="/images/icons/gray-arrow-right.svg"
                    alt=""
                  />
                </p>
              </a>
              <div className="swiper-pagination">
                {swiper &&
                  swiper.slides.map((slide: any, idx: number) => (
                    <div className={idx === activeSlide ? 'active' : ''}></div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

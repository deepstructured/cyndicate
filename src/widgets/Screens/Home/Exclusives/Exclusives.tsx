import clsx from 'clsx'
import styles from './Exclusives.module.scss'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const Exclusives = () => {
  const refContainer = useRef<HTMLDivElement>(null)

  const [dragging, setDragging] = useState<boolean>(false)
  const [angle, setAngle] = useState<number>(0)
  const [degrees, setDegrees] = useState<number[]>([])

  useEffect(() => console.log(degrees), [degrees])
  useEffect(() => console.log(angle), [angle])

  function findClosestDegree(targetDegree: number, degreeArray: number[]) {
    if (refContainer.current) {
      if (!degreeArray || degreeArray.length === 0) {
        return null
      }

      degreeArray.sort((a, b) => a - b)

      let closest = degreeArray[0]
      let minDifference = Math.abs(targetDegree - closest)

      for (let i = 1; i < degreeArray.length; i++) {
        const currentDifference = Math.abs(targetDegree - degreeArray[i])
        if (currentDifference < minDifference) {
          closest = degreeArray[i]
          minDifference = currentDifference
        }
      }

      return closest
    }
  }

  useEffect(() => {
    if (refContainer.current) {
      if (angle < 360) {
        if (angle > 0) {
          refContainer.current.style.transform = `rotate(${findClosestDegree(
            angle,
            degrees
          )}deg)`
        }

        if (angle < 0) {
          refContainer.current.style.transform = `rotate(-${findClosestDegree(
            angle > 0 ? angle : angle * -1,
            degrees
          )}deg)`
        }
      }

      if (angle > 360) {
        const difference = angle - 360
        const targetAngle = findClosestDegree(difference, degrees)

        if (targetAngle) {
          refContainer.current.style.transform = `rotate(${
            360 + targetAngle
          }deg)`
        }
      }

      if (angle < -360) {
        const difference = angle * -1 - 360
        const targetAngle = findClosestDegree(difference, degrees)

        if (targetAngle) {
          refContainer.current.style.transform = `rotate(-${
            360 + targetAngle
          }deg)`
        }
      }
    }
  }, [angle])

  useEffect(() => {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (refContainer.current) {
        const lines = Array.from(
          refContainer.current.querySelectorAll<HTMLDivElement>(
            `.${styles.line}`
          )
        )
        const rotation = 360 / lines.length

        lines.forEach((line, idx) => {
          line.style.rotate = `${idx * rotation}deg`
          degrees.push(idx * rotation)
        })
        ;(function () {
          var init,
            rotate: any,
            start: any,
            stop: any,
            active = false,
            angle = 0,
            rotation = 0,
            startAngle = 0,
            center = {
              x: 0,
              y: 0,
            },
            R2D = 180 / Math.PI,
            init: any = function () {
              if (refContainer.current) {
                refContainer.current.addEventListener('mousedown', start, false)
                refContainer.current.addEventListener(
                  'mousemove',
                  function (event) {
                    if (active === true) {
                      event.preventDefault()
                      rotate(event)
                    }
                  }
                )
                refContainer.current.addEventListener(
                  'mouseup',
                  function (event) {
                    event.preventDefault()
                    stop(event)
                  }
                )
              }
            }

          start = function (e: any) {
            if (refContainer.current) {
              setDragging(true)

              e.preventDefault()

              var bb = refContainer.current.getBoundingClientRect(),
                t = bb.top,
                l = bb.left,
                h = bb.height,
                w = bb.width,
                x,
                y
              center = {
                x: l + w / 2,
                y: t + h / 2,
              }
              x = e.clientX - center.x
              y = e.clientY - center.y
              startAngle = R2D * Math.atan2(y, x)
              return (active = true)
            }
          }

          rotate = function (e: any) {
            if (refContainer.current) {
              e.preventDefault()
              var x = e.clientX - center.x,
                y = e.clientY - center.y,
                d = R2D * Math.atan2(y, x)
              rotation = d - startAngle

              return (refContainer.current.style.webkitTransform =
                'rotate(' + (angle + rotation) + 'deg)')
            }
          }

          stop = function () {
            setDragging(false)

            angle += rotation
            setAngle(angle)
            if (refContainer.current) {
              refContainer.current.style.transition = `transform 1s ease`
            }
            findClosestDegree(angle, degrees)
            return (active = false)
          }

          init()
        }).call(this)
      }
    })

    return () => ctx.revert()
  }, [])

  // useEffect(() => {
  //   !dragging && alert('stopped')
  // }, [dragging])

  return (
    <>
      <section className="section exclusives-word">
        <big>Exclusives</big>
      </section>
      <section className={clsx('section', styles.exclusives)}>
        <div className="container">
          <div className={styles.exclusivesWrapper}>
            <div className={styles.exclusivesCarousel}>
              <div
                id="rotate"
                ref={refContainer}
                className={clsx(styles.exclusivesSwiper, 'drag-swiper')}
              >
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>

                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>

                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>

                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>

                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
                <div className={styles.line}>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                  <div className={styles.exclusivesCard}>
                    <img src="/images/Exclusives/5.png" alt="" />
                    <span>Sweatshirt</span>
                  </div>
                </div>
              </div>
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

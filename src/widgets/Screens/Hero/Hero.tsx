import { useEffect, useState } from 'react'
import { Button } from '../../../shared/Button/Button'
import Header from '../../Header/Header'
import { socialsData } from '../../../data'
import { SocialLink } from '../../../shared/SocialLink/SocialLink'
import useSplit from '../../../app/hooks/useSplit'

export const Hero = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const [targetDate, setTargetDate] = useState<any>(new Date(2023, 8, 1))

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now: any = new Date()
      const diff = targetDate - now
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(diff / (1000 * 60 * 60)) % 24)
      setMinutes(Math.floor(diff / (1000 * 60)) % 60)
    }, 100)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="wrapper">
            {window.innerWidth > 768 ? (
              <h1 className="c-gold-primary reveal">
                {useSplit('Unleash Your')}
                <br />
                {useSplit('True Potential', 0.25)}
              </h1>
            ) : (
              <h1 className="c-gold-primary reveal">
                {useSplit('Unleash Your')}
                <br />
                {useSplit('True Potential', 0.25)}
              </h1>
            )}
            {window.innerWidth > 768 ? (
              <h3 className="c-gold-secondary reveal">
                {useSplit('The World`s #1 Platform ', 0.5)}
                <br />
                {useSplit(
                  'for Self Evolution and Real Estate Tokenization.',
                  0.75
                )}
              </h3>
            ) : (
              <h3 className="c-gold-secondary reveal">
                {useSplit('The World`s Largest Real ', 0.25)}
                <br />
                {useSplit('Estate Tokenization ', 0.5)}
                <br />
                {useSplit('Investment.', 0.75)}
              </h3>
            )}
            {/* <div data-delay="0.5" className="countdown reveal">
              <ul className="date">
                <li className="date__item">
                  <span>{days}</span>
                  <p>days</p>
                </li>
                <li className="date__item">
                  <span>{hours}</span>
                  <p>hours</p>
                </li>
                <li className="date__item">
                  <span>{minutes}</span>
                  <p>minutes</p>
                </li>
              </ul>
              <div className="progress">
                <div
                  style={{
                    width: `${(720 - (days * 24 + hours)) / 7.2}%`,
                  }}
                  className="thumb"
                ></div>
              </div>
            </div> */}
            <div className="bottom-row">
              <p data-delay="0.5" data-start="100%" className="reveal">
                From 2023
              </p>
              <div>
                <Button
                  handleClick={() => {
                    window.scrollTo({
                      top: window.innerHeight,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }}
                >
                  Join $CYND Token Private Sale Waitlist
                  <img src="/images/icons/btn-arrow-right.svg" alt="" />
                </Button>
              </div>
              <p data-delay="0.5" data-start="100%" className="reveal">
                Advancing Self Evolution, <br />
                Forging Empires
                <img
                  src="/images/icons/star.svg"
                  alt=""
                  className="star reveal"
                  data-delay="1"
                  data-duration="1.25"
                />
              </p>
            </div>
            {window.innerWidth <= 768 && (
              <div data-start="100%" className="social-links reveal">
                {socialsData.map((social, idx) => (
                  <SocialLink key={idx} icon={social.icon} href={social.href} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

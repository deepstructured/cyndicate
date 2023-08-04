import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import styles from './WaitlistForm.module.scss'
import { socialsData } from '../../data'
import { SocialLink } from '../../shared/SocialLink/SocialLink'

export const WaitlistForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [formSended, setFormSended] = useState<boolean>(false)

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const [targetDate, setTargetDate] = useState<Date>(new Date(2023, 8, 1))

  console.log(targetDate)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const diff = targetDate - now
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(diff / (1000 * 60 * 60)) % 24)
      setMinutes(Math.floor(diff / (1000 * 60)) % 60)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return (
    <form action="" className={styles.waitlistForm}>
      <div className={styles.content}>
        {/* <div>
          <h1>До события осталось:</h1>
          <p>Дней: {days}</p>
          <p>Часов: {hours}</p>
          <p>Минут: {minutes}</p>
        </div> */}
        {formSended ? (
          <h4>Thank You for Joining the Waitlist</h4>
        ) : (
          <h4>
            <span className="cyndicate-span c-gold-primary">$CYND</span> Token
            Launch Coming Soon. Join Today For Updates.
          </h4>
        )}

        {!formSended && (
          <div className={styles.inputs}>
            <Input
              setState={setFirstName}
              value={firstName}
              placeholder="First Name"
            />
            <Input
              setState={setLastName}
              value={lastName}
              placeholder="Last Name"
            />
            <Input
              setState={setEmail}
              type="email"
              value={email}
              placeholder="Email Address"
            />
          </div>
        )}
        <div className={clsx(styles.videoLogo, formSended && styles.active)}>
          <video autoPlay={true} loop={true} muted={true}>
            <source type="video/webm" src="/videos/logo.webm" />
            <source type="video/mp4" src="/videos/logo.mp4" />
          </video>
        </div>
        {formSended ? (
          <div className={styles.socials}>
            <p>Follow Us</p>
            <div className="social-links">
              {socialsData.map((social) => (
                <SocialLink icon={social.icon} href={social.href} />
              ))}
            </div>
          </div>
        ) : (
          <Button
            handleClick={() => {
              setFormSended(true)
            }}
            type="submit"
          >
            Join The Waitlist{' '}
            <img src="/images/icons/btn-arrow-right.svg" alt="" />
          </Button>
        )}
      </div>
      <div className={styles.border}></div>
    </form>
  )
}

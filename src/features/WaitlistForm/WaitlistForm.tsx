import clsx from 'clsx'
import { useContext, useEffect, useRef, useState } from 'react'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import styles from './WaitlistForm.module.scss'
import { socialsData } from '../../data'
import { SocialLink } from '../../shared/SocialLink/SocialLink'
import { HomeContext } from '../../app/providers/HomeContext'
import useSplit from '../../app/hooks/useSplit'

export const WaitlistForm = () => {
  const { formSent, setFormSent } = useContext(HomeContext)

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      let ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        let w = ctx.canvas.width
        let h = ctx.canvas.height

        let MAX_LINES = 4
        let amplitude = 105
        let freq = 0.01
        let rate = 0

        let ctr = 0

        function draw() {
          if (ctx) {
            w = ctx.canvas.width = window.innerWidth
            h = ctx.canvas.height = 1000
            ctx.moveTo(0, h / 2)
            ctr++
            for (let i = 1; i < MAX_LINES; i++) {
              ctr++
              rate = ctr / 2250
              ctx.beginPath()
              for (let x = 0; x < w; x++) {
                let y = (Math.sin(x * freq * (i / 3) + rate) * amplitude) / i
                ctx.lineTo(x, y + h / 2)
              }
              ctx.strokeStyle = '#D4A455'
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }

        const interval = setInterval(draw, 1)

        return () => clearInterval(interval)
      }
    }
  }, [])

  const sendForm = () => {
    if (firstName !== '' && lastName !== '' && email.includes('@')) {
      setFormSent(true)
    }
  }

  return (
    <>
      <canvas
        className={formSent && 'hidden'}
        ref={canvasRef}
        id="waitlist-wave"
      ></canvas>
      <svg
        id="waitlist-bg-grid"
        className={formSent && 'draw'}
        width={window.innerWidth}
        height={window.innerHeight}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M514 73.5022V1013"
          stroke="url(#paint0_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M132 73.5022V1013"
          stroke="url(#paint1_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M896 73.5022V1013"
          stroke="url(#paint2_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M1278 73.5022V1013"
          stroke="url(#paint3_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M703.5 10V1013"
          stroke="url(#paint4_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M323 73.5022V1013"
          stroke="url(#paint5_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M1088.5 0V1013"
          stroke="url(#paint6_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M1469 73.5022V1013"
          stroke="url(#paint7_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M76.5 203.502H1553"
          stroke="url(#paint8_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M76.5 394.502H1553"
          stroke="url(#paint9_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M1 589.002L1553 585.502"
          stroke="url(#paint10_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M76.5 776.502H1553"
          stroke="url(#paint11_radial_4_128)"
          strokeOpacity="0.3"
        />
        <path
          d="M76.5 967.502H1553"
          stroke="url(#paint12_radial_4_128)"
          strokeOpacity="0.2"
        />
        <defs>
          <radialGradient
            id="paint0_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(514.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(132.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(896.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1278.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(704 511.502) rotate(90) scale(501.502 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(323.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1089 506.502) rotate(90) scale(506.502 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1469.5 543.252) rotate(90) scale(469.75 0.5)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint8_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814.75 204.002) rotate(90) scale(0.5 738.25)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint9_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814.75 395.002) rotate(90) scale(0.5 738.25)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(777.001 587.752) rotate(89.8708) scale(0.5 776.002)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint11_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814.75 777.002) rotate(90) scale(0.5 738.25)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint12_radial_4_128"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(814.75 968.002) rotate(90) scale(0.5 738.25)"
          >
            <stop offset="0.484375" stopColor="#D4A455" />
            <stop offset="1" stopColor="#D4A455" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <form
        action=""
        className={clsx(styles.waitlistForm, formSent && styles.sent, 'reveal')}
      >
        <div className={styles.content}>
          <div className={styles.sentContent}>
            {window.innerWidth > 768 ? (
              <h4 className={styles.thankTitle}>
                {useSplit('Thank You for Joining the Waitlist')}
              </h4>
            ) : (
              <h4 className={styles.thankTitle}>
                {useSplit('Thank You for Joining ')}
                <br />
                {useSplit('the Waitlist', 0.25)}
              </h4>
            )}

            <div className={styles.videoLogo}>
              <video
                autoPlay={true}
                playsInline={true}
                loop={true}
                muted={true}
              >
                <source type="video/webm" src="/videos/logo.webm" />
                <source type="video/mp4" src="/videos/logo.mp4" />
              </video>
            </div>

            <div className={styles.socials}>
              <p>Follow Us</p>
              <div className="social-links">
                {socialsData.map((social, idx) => (
                  <SocialLink key={idx} icon={social.icon} href={social.href} />
                ))}
              </div>
            </div>
          </div>

          {window.innerWidth > 768 ? (
            <h4 className="reveal">
              <span className="cyndicate-span c-gold-primary">
                {useSplit('$CYND')}
              </span>{' '}
              {useSplit('Token Launch Coming Soon.', 0.25)}
              <br />
              {useSplit('Join Today For Updates.', 0.75)}
            </h4>
          ) : (
            <h4 className="reveal">
              <span className="cyndicate-span c-gold-primary">
                {useSplit('$CYND')}
              </span>{' '}
              {useSplit('Token Launch ', 0.25)}
              <br />
              {useSplit('Coming Soon. Join Today', 0.75)}
              <br />
              {useSplit('For Updates.', 1)}
            </h4>
          )}

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

          <Button
            handleClick={() => {
              sendForm()
            }}
            type="submit"
          >
            Join The Waitlist{' '}
            <img src="/images/icons/btn-arrow-right.svg" alt="" />
          </Button>
        </div>
        <div className={styles.border}></div>
      </form>
    </>
  )
}

import { useContext, useEffect, useRef } from 'react'
import { socialsData } from '../../../data'
import { WaitlistForm } from '../../../features/WaitlistForm/WaitlistForm'
import { Logo } from '../../../shared/Logo/Logo'
import { SocialLink } from '../../../shared/SocialLink/SocialLink'

export const Waitlist = () => {
  return (
    <>
      <section id="waitlist">
        <div className="container">
          <WaitlistForm />
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <Logo />
          <div data-start="100%" className="social-links gold reveal">
            {socialsData.map((social, idx) => (
              <SocialLink key={idx} icon={social.icon} href={social.href} />
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

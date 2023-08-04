import { socialsData } from '../../../data'
import { WaitlistForm } from '../../../features/WaitlistForm/WaitlistForm'
import { Logo } from '../../../shared/Logo/Logo'
import { SocialLink } from '../../../shared/SocialLink/SocialLink'

export const Waitlist = () => {
  return (
    <section id="waitlist">
      <div className="container">
        <WaitlistForm />
        <div className="bottom-row">
          <Logo />
          <div className="social-links gold">
            {socialsData.map((social) => (
              <SocialLink icon={social.icon} href={social.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

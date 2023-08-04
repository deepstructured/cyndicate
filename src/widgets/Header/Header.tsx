import { socialsData } from '../../data'
import { Logo } from '../../shared/Logo/Logo'
import { SocialLink } from '../../shared/SocialLink/SocialLink'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <div className="social-links">
          {socialsData.map((social) => (
            <SocialLink icon={social.icon} href={social.href} />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header

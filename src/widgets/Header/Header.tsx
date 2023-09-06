import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { navSocials } from '../../data'
import { IconButton } from '../../shared/IconButton/IconButton'

const Header = () => {
  const { activeScreen, pageLoaded, currentPage } = useContext(MainContext)

  return (
    <header className={clsx(styles.header, pageLoaded && `animated`)}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.socials}>
          {navSocials.map((social, idx) => (
            <IconButton
              isLink={true}
              key={idx}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header

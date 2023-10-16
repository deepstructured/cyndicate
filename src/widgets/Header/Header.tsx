import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { headerLinks } from '../../data'
import { Button } from '../../shared/Button/Button'

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        data-delay="0.25"
        data-duration="0.75"
        className={clsx(styles.headerLogo, 'reveal opacity-0 translate-x-full')}
      >
        <Logo />
      </div>
      <div className={styles.headerMenu}>
        {headerLinks.map((link, idx) => (
          <Button
            data-duration="0.85"
            dataDelay={`${0.02 * idx + 0.5}`}
            href={link.href}
            colorType={link.colorType ? 'filled' : 'transparent'}
          >
            {link.title}
          </Button>
        ))}
      </div>
    </header>
  )
}

export default Header

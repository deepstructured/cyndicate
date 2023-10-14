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
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerMenu}>
        {headerLinks.map((link) => (
          <Button
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

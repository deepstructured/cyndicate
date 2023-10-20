import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { headerLinks } from '../../data'
import { Button } from '../../shared/Button/Button'

const Header = () => {
  const { menuActive, setMenuActive } = useContext(MainContext)

  return (
    <header className={clsx(styles.header, 'reveal')}>
      <div
        data-delay="0.25"
        data-duration="0.75"
        className={clsx(styles.headerLogo, 'reveal opacity-0 translate-x-full')}
      >
        <Logo />
      </div>
      <div
        onClick={() => {
          !menuActive ? setMenuActive(true) : setMenuActive(false)
        }}
        className={clsx(styles.headerBurger, menuActive && styles.opened)}
      >
        <div className={styles.open}>
          <svg
            width="73"
            height="2"
            viewBox="0 0 73 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H72"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <svg
            width="73"
            height="2"
            viewBox="0 0 73 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H72"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={styles.close}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L21 21"
              stroke="#FAFAFA"
              stroke-width="2.06522"
              stroke-linecap="round"
            />
            <path
              d="M21 2L2 21"
              stroke="#FAFAFA"
              stroke-width="2.06522"
              stroke-linecap="round"
            />
          </svg>
        </div>
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

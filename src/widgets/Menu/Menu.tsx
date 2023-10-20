import clsx from 'clsx'
import { navLinks } from '../../data'
import { Button } from '../../shared/Button/Button'
import styles from './Menu.module.scss'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/MainContext'

export const Menu = () => {
  const { menuActive, setMenuActive } = useContext(MainContext)

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('freezed')
    } else {
      document.body.classList.remove('freezed')
    }
  }, [menuActive])

  return (
    <menu className={clsx(styles.menu, menuActive && styles.active)}>
      <div className={styles.menuListWrapper}>
        <span className="section-span">menu</span>
        <ul className={styles.menuList}>
          {navLinks.map((link, idx) => (
            <li
              style={{
                transitionDelay: `${0.125 * idx}s`,
              }}
              className={styles.menuLink}
            >
              <a
                onClick={(ev) => {
                  ev.preventDefault()

                  setMenuActive(false)

                  if (link.href[0] === '#') {
                    window.scrollTo({
                      left: 0,
                      top: document.querySelector<HTMLDivElement>(link.href)
                        ?.offsetTop,
                      behavior: 'smooth',
                    })
                  }
                }}
                href={link.href}
              >
                <svg
                  width="29"
                  height="14"
                  viewBox="0 0 29 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.87234L17.8511 6.87234M17.8511 6.87234L12.7447 1M17.8511 6.87234L12.7447 13"
                    stroke="#DBC99F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.7446 1L27.851 6.87234L22.7446 13"
                    stroke="#DBC99F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <Button animated={false}>Join Us</Button>
      </div>
      <div className={styles.menuSocials}>
        <a
          href="https://www.instagram.com/cyndicate.io/"
          className={styles.social}
        >
          Instagram
        </a>
        <a href="Cyndicate.io" className={styles.social}>
          Discord
        </a>
        <a href="https://twitter.com/DAOCyndicate" className={styles.social}>
          Twitter
        </a>
      </div>
    </menu>
  )
}

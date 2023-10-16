import clsx from 'clsx'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={clsx(styles.footer, 'section')}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBlock}>
          <div className="container">
            <img
              src="/images/logo-2.svg"
              alt=""
              data-duration="0.65"
              data-start="top top+=100%"
              className={clsx(
                styles.footerLogo,
                'reveal opacity-0 translate-y-1/2'
              )}
            />
          </div>
        </div>
        <div className={styles.footerBlock}>
          <div className="container">
            <span
              className={clsx(
                styles.footerExplore,
                'reveal opacity-0 translate-y-[100%]'
              )}
            >
              Explore
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3284 0.955078V27.915M12.3284 27.915L23 17.2434M12.3284 27.915L1.65674 17.2434"
                  stroke="white"
                  stroke-width="2.46269"
                />
              </svg>
            </span>
            <div className={styles.footerCols}>
              <div
                data-delay="0.1"
                data-start="top top+=100%"
                data-duration="0.5"
                className={clsx(
                  styles.footerCol,
                  'reveal opacity-0 translate-y-[25%]'
                )}
              >
                <span className={styles.footerColTitle}>About Us</span>
                <ul className={styles.footerList}>
                  <li className={styles.footerLink}>
                    <a href="">About Us</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Exclusives</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Evolution</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Token</a>
                  </li>
                </ul>
              </div>
              <div
                data-delay="0.25"
                data-start="top top+=100%"
                data-duration="0.5"
                className={clsx(
                  styles.footerCol,
                  'reveal opacity-0 translate-y-[25%]'
                )}
              >
                <span className={styles.footerColTitle}>Information</span>
                <ul className={styles.footerList}>
                  <li className={styles.footerLink}>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Help center</a>
                  </li>
                </ul>
              </div>
              <div
                data-delay="0.3"
                data-start="top top+=100%"
                data-duration="0.5"
                className={clsx(
                  styles.footerCol,
                  'reveal opacity-0 translate-y-[25%]'
                )}
              >
                <span className={styles.footerColTitle}>Follow us</span>
                <ul className={styles.footerList}>
                  <li className={styles.footerLink}>
                    <a href="">Instagram</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Discord</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Twitter</a>
                  </li>
                  <li className={styles.footerLink}>
                    <a href="">Token</a>
                  </li>
                </ul>
              </div>
            </div>
            <span
              data-start="top top+=100%"
              data-delay="0.5"
              data-duration="0.4"
              className={clsx(
                styles.footerCopyright,
                'reveal opacity-0 translate-y-1/2'
              )}
            >
              All rights reserved. Copyright ©2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

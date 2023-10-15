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
              className={styles.footerLogo}
            />
          </div>
        </div>
        <div className={styles.footerBlock}>
          <div className="container">
            <span className={styles.footerExplore}>
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
              <div className={styles.footerCol}>
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
              <div className={styles.footerCol}>
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
              <div className={styles.footerCol}>
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
            <span className={styles.footerCopyright}>
              All rights reserved. Copyright ©2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

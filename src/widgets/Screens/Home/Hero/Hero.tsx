import clsx from 'clsx'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className="container">
        <div className={styles.scrollLabel}>
          scroll <div className="white-square"></div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.heroBlock}>
            <span className="section-span">cyndicate</span>
            <h1>Become Who You Are Meant</h1>
          </div>
          <div className={styles.heroBlock}>
            <div className={styles.group}>
              <div className={styles.arrow}>
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
                    d="M22.7447 1L27.8511 6.87234L22.7447 13"
                    stroke="#DBC99F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className={styles.text}>
                You become who you surround yourself with, so choose wisely
              </p>
            </div>
            <h1>To Be</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

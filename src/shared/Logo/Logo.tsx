import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/images/logo.svg" alt="" />
    </div>
  )
}

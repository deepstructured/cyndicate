import clsx from 'clsx'
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div data-start="100%" className={clsx(styles.logo, 'reveal')}>
      <img src="/images/logo.svg" alt="" />
    </div>
  )
}

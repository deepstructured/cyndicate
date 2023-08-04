import { FC, ReactNode } from 'react'
import styles from './SocialLink.module.scss'

interface IProps {
  icon: ReactNode
  href: string
}

export const SocialLink: FC<IProps> = ({ icon, href }) => {
  return (
    <a href={href} className={styles.socialLink}>
      {icon}
    </a>
  )
}

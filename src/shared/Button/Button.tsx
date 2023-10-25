import clsx from 'clsx'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import { Magnetic } from '../Magnetic/Magnetic'

interface IProps extends ButtonHTMLAttributes<string> {
  colorType?: 'filled' | 'transparent'
  isLink?: boolean
  href?: string
  animated?: boolean
  dataStart?: string
  dataDuration?: string
  dataDelay?: string
  handleClick?: () => void
}

export const Button: FC<IProps> = ({
  colorType = 'filled',
  children,
  className,
  isLink = true,
  href,
  animated = true,
  dataStart = 'top top+=100%',
  dataDuration = '0.65',
  dataDelay = '0',
  handleClick,
}) => {
  return isLink ? (
    <Magnetic>
      <a
        // onClick={(ev) => {
        //   ev.preventDefault()
        //   handleClick && handleClick()
        // }}
        data-start={dataStart}
        data-duration={dataDuration}
        data-delay={dataDelay}
        href={href}
        className={clsx(
          styles.button,
          styles[colorType],
          className && className,
          animated && 'reveal scale-[0.75] opacity-0'
        )}
      >
        <div
          data-start={dataStart}
          data-duration={dataDuration}
          data-delay={`${Number(dataDelay) + 0.125}`}
          className="reveal opacity-0 scale-[0.75]"
        >
          {children}
        </div>
      </a>
    </Magnetic>
  ) : (
    <Magnetic>
      <button
        onClick={() => handleClick && handleClick()}
        data-start={dataStart}
        data-duration={dataDuration}
        data-delay={dataDelay}
        className={clsx(
          styles.button,
          styles[colorType],
          className && className,
          animated && 'reveal scale-[0.75] opacity-0'
        )}
      >
        <div
          data-start={dataStart}
          data-duration={dataDuration}
          data-delay={`${Number(dataDelay) + 0.125}`}
          className="reveal opacity-0 scale-[0.75]"
        >
          {children}
        </div>
      </button>
    </Magnetic>
  )
}

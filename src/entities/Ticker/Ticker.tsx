import gsap from 'gsap'
import React, { FC, useEffect } from 'react'

interface IProps {
  direction?: 0 | 1
}

export const Ticker: FC<IProps> = ({ direction }) => {
  useEffect(() => {}, [])

  return (
    <div
      className="ticker-init"
      data-speed="150"
      data-direction={direction === 0 ? 'left' : 'right'}
    >
      <div>
        <ul className="ticker-init__list">
          <li>
            <span>Revolution</span>
            <span>01</span>
          </li>
          <li>
            <span>Revolution</span>
            <span>01</span>
          </li>
          <li>
            <span>Revolution</span>
            <span>01</span>
          </li>
          <li>
            <span>Revolution</span>
            <span>01</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

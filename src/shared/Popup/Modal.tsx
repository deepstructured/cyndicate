import { FC, useContext, useState } from 'react'
import styles from './Modal.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import { Magnetic } from '../Magnetic/Magnetic'

interface IProps {
  title: string
  text: string
  links?: any[]
}

export const Modal: FC<IProps> = ({ title, text, links }) => {
  const { modalActive, setModalActive } = useContext(MainContext)

  return (
    <>
      <div className={clsx(styles.modalWrapper, modalActive && styles.active)}>
        {window.innerWidth <= 768 && (
          <svg
            className={clsx(styles.modalDraw, modalActive && styles.active)}
            width="213"
            height="123"
            viewBox="0 0 213 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M211.634 54.4507C200.678 51.2284 200.678 50.5839 169.744 20.1206C144.996 -4.25002 99.8928 1.47647 80.4345 7.38604C76.9512 9.06238 73.3696 10.6075 69.9759 12.4548C66.2787 14.4674 62.3441 17.1257 59.3775 20.1206C58.1609 21.3489 54.7853 24.6168 55.1294 26.6187C55.8297 30.6925 62.1588 27.1713 63.9093 26.2058C71.0563 22.2639 79.042 16.1992 83.0677 8.9336C85.501 4.54182 80.9357 1.65263 76.9623 1.50356C65.1189 1.05924 54.2475 7.58864 44.2747 13.2438C25.8568 23.6879 10.3786 38.0801 3.38257 58.5764C2.7633 61.1332 2.25912 63.5955 1.85702 65.9562C-2.00257 88.6154 24.9638 99.8207 30.5386 122.12V122.12"
              stroke="#DBC99F"
              stroke-width="1.70261"
              stroke-linecap="round"
            />
          </svg>
        )}
        <div className={clsx(styles.modal, modalActive && styles.active)}>
          <svg
            onClick={() => setModalActive(false)}
            className={styles.modalClose}
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_922_2328)">
              <path
                d="M22.658 41.4475C32.8151 41.4475 41.1255 33.1371 41.1255 22.98C41.1255 12.8228 32.8151 4.51245 22.658 4.51245C12.5008 4.51245 4.19043 12.8228 4.19043 22.98C4.19043 33.1371 12.5008 41.4475 22.658 41.4475Z"
                fill="url(#paint0_linear_922_2328)"
                fill-opacity="0.1"
              />
            </g>
            <path
              d="M17.4316 28.2063L27.8843 17.7537"
              stroke="#B1B1B1"
              stroke-width="2.77013"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.8843 28.2063L17.4316 17.7537"
              stroke="#B1B1B1"
              stroke-width="2.77013"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_922_2328"
                x="-108.831"
                y="-108.509"
                width="262.977"
                height="262.978"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="56.5106"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_922_2328"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_922_2328"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_922_2328"
                x1="9.0503"
                y1="2.88296"
                x2="38.6185"
                y2="30.6693"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0.73" />
              </linearGradient>
            </defs>
          </svg>

          <div className={styles.modalTextContent}>
            <span className={styles.modalTitle}>{title}</span>
            <p className={styles.modalText}>{text}</p>
          </div>
          {links && (
            <div className={styles.modalLinks}>
              {links.map((link, idx) => (
                <Magnetic key={idx}>
                  <a
                    target="_blank"
                    className={styles.modalLink}
                    href={link.link}
                  >
                    <img
                      src={link.icon}
                      className={styles.modalLinkIcon}
                      alt=""
                    />
                    {window.innerWidth > 768 && <span>{link.title}</span>}
                  </a>
                </Magnetic>
              ))}
            </div>
          )}
        </div>
      </div>
      {window.innerWidth <= 768 && (
        <div
          onClick={() => modalActive && setModalActive(false)}
          className={clsx(styles.overlay, modalActive && styles.active)}
        ></div>
      )}
    </>
  )
}

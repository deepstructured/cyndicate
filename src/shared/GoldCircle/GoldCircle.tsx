import styles from './GoldCircle.module.scss'

export const GoldCircle = () => {
  return (
    <div className={styles.goldCircle}>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_518_4040)">
          <circle cx="27" cy="27" r="7" fill="white" />
        </g>
        <g filter="url(#filter1_f_518_4040)">
          <circle cx="27" cy="27" r="7" fill="#D4A455" />
        </g>
        <g filter="url(#filter2_f_518_4040)">
          <circle cx="27" cy="27" r="7" fill="#D4A455" />
        </g>
        <defs>
          <filter
            id="filter0_f_518_4040"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_518_4040"
            />
          </filter>
          <filter
            id="filter1_f_518_4040"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_518_4040"
            />
          </filter>
          <filter
            id="filter2_f_518_4040"
            x="18"
            y="18"
            width="18"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_518_4040"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

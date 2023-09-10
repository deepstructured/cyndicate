import clsx from 'clsx'
import styles from './TokenomicsChart.module.scss'
import { Logo } from '../../shared/Logo/Logo'

export const TokenomicsChart = () => {
  return (
    <div className={styles.tokenomicsChart}>
      <div className={styles.tokenomicsChartLogo}>
        <Logo logoType="third" />
      </div>
      <div className={styles.tokenomicsChartInfoLabels}>
        <div
          data-chart-item-for="advisors"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>4%</span>
          <span className={styles.title}>Advisors</span>
        </div>
        <div data-chart-item-for="team" className={styles.tokenomicsChartInfo}>
          <span className={clsx('text-gold', styles.percent)}>8.5%</span>
          <span className={styles.title}>Team</span>
        </div>
        <div
          data-chart-item-for="company-reserve"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>14%</span>
          <span className={styles.title}>Company Reserve</span>
        </div>
        <div
          data-chart-item-for="ecosystem-development"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>19%</span>
          <span className={styles.title}>Ecosystem Development</span>
        </div>
        <div
          data-chart-item-for="public-sale"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>7.95%</span>
          <span className={styles.title}>Public Sale</span>
        </div>
        <div
          data-chart-item-for="pre-sale-5"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>3%</span>
          <span className={styles.title}>Pre-Sale #5</span>
        </div>
        <div
          data-chart-item-for="pre-sale-4"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>2%</span>
          <span className={styles.title}>Pre-Sale #4</span>
        </div>
        <div
          data-chart-item-for="pre-sale-3"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>1.5%</span>
          <span className={styles.title}>Pre-Sale #3</span>
        </div>
        <div
          data-chart-item-for="pre-sale-2"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>1.5%</span>
          <span className={styles.title}>Pre-Sale #2</span>
        </div>
        <div
          data-chart-item-for="marketing-partnership"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>7%</span>
          <span className={styles.title}>Marketing/Partnership</span>
        </div>
        <div
          data-chart-item-for="pre-sale-1"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>1.5%</span>
          <span className={styles.title}>Pre-Sale #1</span>
        </div>
        <div
          data-chart-item-for="private-sale"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>3%</span>
          <span className={styles.title}>Private Sale</span>
        </div>
        <div
          data-chart-item-for="staking-rewards"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>13%</span>
          <span className={styles.title}>Stakng Rewards</span>
        </div>
        <div
          data-chart-item-for="staking-rewards-security"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>5%</span>
          <span className={styles.title}>
            Staking Rewards <br /> (for security tokens staking)
          </span>
        </div>
        <div
          data-chart-item-for="staking-rewards-two"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>9%</span>
          <span className={styles.title}>Staking Rewards</span>
        </div>
        <div
          data-chart-item-for="airdrop"
          className={styles.tokenomicsChartInfo}
        >
          <span className={clsx('text-gold', styles.percent)}>0.1%</span>
          <span className={styles.title}>Airdrop</span>
        </div>
      </div>
      <svg
        width="720"
        height="763"
        viewBox="0 0 720 763"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-chart="ecosystem-development"
          d="M653.187 374.185C653.188 431.515 635.957 487.523 603.733 534.94C571.508 582.358 525.776 618.996 472.471 640.101L440.886 560.326C478.199 545.552 510.212 519.906 532.769 486.714C555.326 453.522 567.387 414.316 567.387 374.185H653.187Z"
          fill="#D4A455"
        />
        <path
          data-chart="company-reserve"
          d="M549.491 153.818C581.929 180.653 608.043 214.319 625.968 252.412C643.893 290.505 653.188 332.085 653.187 374.185L595.988 374.185C595.988 340.505 588.552 307.241 574.212 276.766C559.872 246.292 538.981 219.359 513.03 197.891L549.491 153.818Z"
          fill="#FAC570"
        />
        <path
          data-chart="team"
          d="M411.928 91.7057C462.517 99.7182 510.026 121.169 549.491 153.818L505.738 206.706C475.744 181.893 439.638 165.59 401.19 159.501L411.928 91.7057Z"
          fill="#FFD694"
        />
        <path
          data-chart="advisors"
          d="M340.273 89.4538C364.158 87.1961 388.232 87.9526 411.928 91.7057L402.98 148.201C384.023 145.199 364.764 144.594 345.656 146.4L340.273 89.4538Z"
          fill="#CA9D55"
        />
        <path
          data-chart="airdrop"
          d="M338.491 89.6279C339.087 89.5678 339.683 89.5095 340.28 89.4532L348.352 174.873C347.935 174.912 347.517 174.953 347.1 174.995L338.491 89.6279Z"
          fill="#E2A645"
        />
        <path
          data-chart="staking-rewards"
          d="M190.48 149.306C233.153 115.774 284.487 95.0752 338.485 89.6285L345.66 160.768C305.162 164.853 266.662 180.376 234.657 205.526L190.48 149.306Z"
          fill="#BF8B37"
        />
        <path
          data-chart="staking-rewards-security"
          d="M129.757 214.739C146.489 189.824 167.038 167.698 190.649 149.173L238.315 209.926C221.078 223.449 206.077 239.601 193.863 257.789L129.757 214.739Z"
          fill="#D99D3E"
        />
        <path
          data-chart="staking-rewards-two"
          d="M88.3677 437.868C79.6679 399.778 78.8648 360.31 86.0077 321.897C93.1507 283.485 108.088 246.944 129.899 214.528L189.221 254.442C172.863 278.754 161.66 306.16 156.303 334.969C150.945 363.778 151.548 393.38 158.073 421.947L88.3677 437.868Z"
          fill="#F9B54B"
        />
        <path
          data-chart="private-sale"
          d="M105.241 488.988C98.0221 472.518 92.373 455.403 88.3685 437.871L144.132 425.134C147.336 439.159 151.855 452.851 157.63 466.028L105.241 488.988Z"
          fill="#FCC063"
        />
        <path
          data-chart="pre-sale-1"
          d="M117.175 513.072C112.811 505.216 108.82 497.159 105.214 488.928L157.609 465.979C160.493 472.564 163.686 479.01 167.178 485.295L117.175 513.072Z"
          fill="#FFD087"
        />
        <path
          data-chart="marketing-partnership"
          d="M200.026 606.247C165.866 581.641 137.56 549.796 117.128 512.987L167.14 485.226C183.485 514.674 206.13 540.149 233.458 559.834L200.026 606.247Z"
          fill="#FFC365"
        />
        <path
          data-chart="pre-sale-2"
          d="M222.534 620.906C214.781 616.36 207.248 611.452 199.957 606.198L241.765 548.194C247.233 552.135 252.883 555.816 258.697 559.225L222.534 620.906Z"
          fill="#FFB748"
        />
        <path
          data-chart="pre-sale-3"
          d="M246.391 633.422C238.245 629.627 230.283 625.449 222.531 620.904L251.462 571.56C257.664 575.196 264.034 578.538 270.55 581.575L246.391 633.422Z"
          fill="#FFAB2B"
        />
        <path
          data-chart="pre-sale-4"
          d="M279.83 646.516C268.418 642.856 257.249 638.482 246.386 633.42L276.587 568.611C284.733 572.408 293.111 575.688 301.669 578.433L279.83 646.516Z"
          fill="#EAA030"
        />
        <path
          data-chart="pre-sale-5"
          d="M332.404 658.061C314.554 655.874 296.951 652.009 279.827 646.515L297.299 592.049C310.998 596.444 325.081 599.536 339.361 601.286L332.404 658.061Z"
          fill="#E3941C"
        />
        <path
          data-chart="public-sale"
          d="M472.667 640.023C428.158 657.683 379.928 663.885 332.399 658.061L341.096 587.092C376.743 591.46 412.916 586.809 446.297 573.563L472.667 640.023Z"
          fill="#CD8A24"
        />
        <path
          d="M535 373.5C535 466.008 460.008 541 367.5 541C274.992 541 200 466.008 200 373.5C200 280.992 274.992 206 367.5 206C460.008 206 535 280.992 535 373.5ZM205.025 373.5C205.025 463.232 277.768 535.975 367.5 535.975C457.232 535.975 529.975 463.232 529.975 373.5C529.975 283.768 457.232 211.025 367.5 211.025C277.768 211.025 205.025 283.768 205.025 373.5Z"
          fill="url(#paint0_radial_740_1761)"
        />
        <path
          data-chart="pre-sale-2"
          d="M202 625L158.576 694H108"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="airdrop"
          d="M331 39L336 75"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="advisors"
          d="M383 75L403.529 0.999999H466"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="team"
          d="M495 103L515.282 70H577"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="company-reserve"
          d="M633 236L654.271 204H719"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="ecosystem-development"
          d="M616 541L636.777 574H700"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="public-sale"
          d="M407 671L427.529 704H490"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="pre-sale-5"
          d="M302 667L337.754 762H394"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="pre-sale-4"
          d="M257 653L242 696"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="pre-sale-3"
          d="M226 639L170.103 758H105"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="marketing-partnership"
          d="M140 570L101.25 613H60"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="pre-sale-1"
          d="M98 506L75.4297 535H26"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="private-sale"
          d="M83 469L59.0255 458H11"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="staking-rewards-two"
          d="M148 169L124.051 144H77"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="staking-rewards-security"
          d="M248 99L232.17 67H184"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <path
          data-chart="staking-rewards"
          d="M73 316L50.9992 295H1"
          stroke="white"
          stroke-width="0.815597"
          stroke-linecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_740_1761"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(367.5 373.5) rotate(90) scale(167.5)"
          >
            <stop offset="0.970067" stop-color="#D4A455" stop-opacity="0" />
            <stop offset="1" stop-color="#D4A455" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

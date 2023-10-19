import clsx from 'clsx'
import styles from './Evolution.module.scss'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { evolutionCardsData } from '../../../../data'

export const Evolution = () => {
  const ref = useRef<HTMLDivElement>(null)
  const card1 = useRef<HTMLDivElement>(null)
  const card2 = useRef<HTMLDivElement>(null)
  const card3 = useRef<HTMLDivElement>(null)
  const card4 = useRef<HTMLDivElement>(null)
  const card5 = useRef<HTMLDivElement>(null)
  const circle = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h2Split: any = new SplitText(`#evolution h2`, {
        type: 'words',
      })

      h2Split.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.025 + 0.15}`
          el.dataset.duration = `0.65`
          el.classList.add('reveal')
        })
      })

      ScrollTrigger.create({
        trigger: '#evolution',
        start: 'top top+=100%',
        end: 'bottom bottom-=50%',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(circle.current, {
            rotate: 3.6 * self.progress * 100,
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="evolution"
      className={clsx('section', styles.evolution)}
    >
      <div className="container">
        <div className={styles.evolutionTopWrapper}>
          <div className={styles.group}>
            <span
              data-duration="0.45"
              data-delay="0"
              className={
                window.innerWidth > 768
                  ? 'reveal opacity-0 translate-x-full section-span'
                  : 'reveal opacity-0 translate-y-full section-span'
              }
            >
              evolution
            </span>
            <span
              data-duration="0.45"
              data-delay="0.25"
              className={
                window.innerWidth > 768
                  ? 'reveal opacity-0 translate-x-full section-num'
                  : 'reveal opacity-0 translate-y-full section-num'
              }
            >
              004
            </span>
          </div>
          <h2 className={styles.evolutionTitle}>
            Why CYNDICATE <br /> Evolution?
          </h2>
          <div className={styles.evolutionCircle}>
            <img src="/images/logo.png" alt="" className={styles.logo} />
            <svg
              ref={circle}
              width="124"
              height="128"
              viewBox="0 0 124 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M111.646 71.1048C111.986 67.9678 114.48 65.9986 117.712 66.3488C121.067 66.7123 123.01 69.3136 122.694 72.2333C122.481 74.2024 121.258 76.1033 119.092 76.5693L118.834 75.6483C120.519 75.1852 121.603 73.805 121.783 72.1483C122.031 69.8532 120.507 67.6958 117.587 67.3794C114.491 67.0439 112.784 69.0985 112.546 71.2985C112.306 73.512 113.627 75.0153 115.312 75.6926L114.906 76.5278C112.805 75.627 111.356 73.7801 111.646 71.1048Z"
                  fill="white"
                />
                <path
                  d="M109.685 81.4319L109.974 80.5061C111.213 80.8927 112.452 81.2793 113.679 81.7482C116.236 81.0724 118.783 80.479 121.325 79.8987L121.007 80.9157C118.818 81.4202 116.633 81.9116 114.272 82.2768L114.223 82.4332C115.957 84.0761 117.467 85.7492 118.981 87.4093L118.672 88.4003C116.915 86.4641 115.167 84.545 113.435 82.5305C112.176 82.2091 110.924 81.8185 109.685 81.4319Z"
                  fill="white"
                />
                <path
                  d="M107.915 86.3038L108.371 85.4324L117.812 90.3705L117.394 91.1693C113.68 91.7857 110.066 92.2696 106.112 92.6677L106.036 92.813C109.006 94.1198 111.675 95.531 114.374 96.9428L113.918 97.8142L104.477 92.8761L104.895 92.0773C108.541 91.4719 112.125 90.9264 116.037 90.5213L116.113 90.3761C113.179 89.0883 110.566 87.6903 107.915 86.3038Z"
                  fill="white"
                />
                <path
                  d="M100.961 97.4688L103.422 94.4701L111.658 101.229L109.275 104.133C107.022 106.878 104.232 106.532 102.004 104.703C99.5543 102.693 98.9944 99.8657 100.961 97.4688ZM103.578 95.6582L103.367 95.6791C102.826 96.5961 102.211 97.3458 101.613 98.0743C100.123 99.8904 100.468 102.118 102.59 103.86C104.787 105.662 107.055 105.439 108.728 103.401C109.248 102.767 109.767 102.134 110.483 101.52L110.484 101.326C108.041 99.5861 105.771 97.723 103.578 95.6582Z"
                  fill="white"
                />
                <path
                  d="M95.7303 103.026L96.453 102.359L103.68 110.188L102.957 110.855L95.7303 103.026Z"
                  fill="white"
                />
                <path
                  d="M89.814 107.398C92.4318 105.636 95.5449 106.274 97.3599 108.971C99.2435 111.77 98.507 114.933 96.0705 116.573C94.4273 117.679 92.1858 117.969 90.4334 116.612L90.9718 115.822C92.4119 116.812 94.1657 116.752 95.5483 115.821C97.4635 114.532 98.1306 111.976 96.491 109.54C94.7523 106.956 92.0815 106.975 90.2456 108.21C88.3984 109.453 88.1001 111.432 88.6682 113.157L87.7676 113.385C87.1027 111.198 87.5815 108.9 89.814 107.398Z"
                  fill="white"
                />
                <path
                  d="M84.4329 110.987L85.392 110.59L85.4811 122.085L84.4841 122.498L76.4193 114.306L77.3784 113.909C78.3001 114.814 79.2248 115.761 80.0651 116.862L80.2258 116.929C80.8759 116.571 81.5386 116.208 82.2453 115.915C83.0151 115.596 83.7606 115.361 84.5165 115.152L84.5904 114.973C84.4703 113.648 84.449 112.311 84.4329 110.987ZM84.599 115.886L84.471 115.791C83.8388 116.157 83.2339 116.481 82.5903 116.748C81.9972 116.993 81.3653 117.181 80.7987 117.312L80.7574 117.463C82.1531 118.762 83.3452 119.998 84.4716 121.468L84.7745 121.343C84.5462 119.471 84.5248 117.706 84.599 115.886Z"
                  fill="white"
                />
                <path
                  d="M72.3137 115.116L73.2603 114.905C73.9666 118.078 74.6759 121.265 75.2578 124.634C76.5689 124.174 77.7555 123.91 78.9422 123.646L79.1351 124.512L71.0685 126.308L70.8756 125.441C72.0623 125.177 73.2489 124.913 74.6178 124.776C73.7293 121.475 73.02 118.289 72.3137 115.116Z"
                  fill="white"
                />
                <path
                  d="M60.7787 116.372L67.6106 115.976L68.2269 126.612L61.5314 127L61.48 126.114C63.321 126.007 65.1451 125.847 67.2169 125.946L67.3598 125.814C67.1195 124.501 67.046 123.233 67.1194 121.901L66.9879 121.759C65.0217 122.064 63.2899 122.164 61.5307 122.266L61.4778 121.353C63.2369 121.251 64.9824 121.15 66.9579 121.24L67.0719 121.083C66.8398 119.674 66.7616 118.324 66.843 116.896L66.6843 116.755C64.6098 117.08 62.7279 117.189 60.8325 117.299L60.7787 116.372Z"
                  fill="white"
                />
                <path
                  d="M27.7172 102.772C30.0357 104.912 30.1337 108.088 27.9287 110.477C25.6402 112.956 22.3928 112.97 20.2349 110.978C18.7796 109.635 17.9797 107.521 18.8946 105.502L19.7879 105.844C19.1571 107.474 19.6211 109.166 20.8456 110.296C22.5419 111.862 25.1831 111.921 27.1751 109.763C29.2875 107.474 28.6521 104.88 27.0262 103.379C25.3901 101.869 23.3959 102.036 21.8486 102.987L21.4193 102.163C23.3936 101.011 25.7399 100.946 27.7172 102.772Z"
                  fill="white"
                />
                <path
                  d="M20.6393 95.137L21.2155 95.9171C20.1717 96.6881 19.1279 97.4591 18.0245 98.1722C17.0585 100.635 16.0328 103.04 14.9991 105.434L14.3661 104.577C15.2526 102.512 16.1473 100.459 17.2474 98.3387L17.15 98.2068C14.8001 98.635 12.5582 98.8645 10.3245 99.105L9.70769 98.2699C12.3078 97.9966 14.8888 97.7204 17.5376 97.513C18.5408 96.6871 19.5955 95.908 20.6393 95.137Z"
                  fill="white"
                />
                <path
                  d="M17.6942 90.7248L18.124 91.6094L8.54086 96.2655L8.14689 95.4546C9.85892 92.1018 11.618 88.9085 13.6484 85.4922L13.5768 85.3447C10.7605 86.956 8.03933 88.263 5.29954 89.5941L4.86975 88.7095L14.4529 84.0535L14.8469 84.8644C13.1661 88.1563 11.474 91.3627 9.47448 94.7488L9.54611 94.8962C12.3255 93.3028 15.0036 92.0321 17.6942 90.7248Z"
                  fill="white"
                />
                <path
                  d="M12.872 78.6202L13.8297 82.3794L3.5051 85.0097L2.57776 81.3696C1.701 77.9281 3.63324 75.8853 6.42617 75.1738C9.49707 74.3914 12.1065 75.6155 12.872 78.6202ZM12.7802 81.801L12.8887 81.6183C12.4702 80.6396 12.2308 79.6998 11.9981 78.7864C11.4181 76.5097 9.41907 75.4685 6.7585 76.1463C4.00528 76.8477 2.84127 78.8075 3.49209 81.3622C3.69442 82.1564 3.89675 82.9506 3.96722 83.8912L4.12344 84.0064C6.97168 83.0694 9.81756 82.3444 12.7802 81.801Z"
                  fill="white"
                />
                <path
                  d="M11.5034 71.1232L11.6094 72.101L1.017 73.2488L0.911048 72.271L11.5034 71.1232Z"
                  fill="white"
                />
                <path
                  d="M11.5028 63.5521C11.3567 66.704 8.98865 68.8232 5.74119 68.6727C2.37092 68.5165 0.270489 66.0399 0.406437 63.1062C0.498123 61.1277 1.60142 59.1551 3.73497 58.5566L4.04863 59.4599C2.39518 60.026 1.39841 61.4703 1.32127 63.135C1.21441 65.4409 2.86926 67.5004 5.80289 67.6363C8.9139 67.7805 10.4906 65.6247 10.593 63.4142C10.6961 61.1901 9.28507 59.771 7.5613 59.1988L7.9156 58.3401C10.0678 59.1099 11.6274 60.8641 11.5028 63.5521Z"
                  fill="white"
                />
                <path
                  d="M11.7778 57.2678L11.5254 58.2747L2.24055 51.4969L2.50297 50.4502L13.8872 48.8544L13.6347 49.8614C12.3591 50.0626 11.0471 50.2406 9.66228 50.2596L9.51314 50.3489C9.41325 51.0843 9.31005 51.833 9.12403 52.5749C8.9214 53.3831 8.66581 54.1218 8.38372 54.8537L8.48299 55.0194C9.61885 55.7126 10.705 56.4918 11.7778 57.2678ZM7.74458 54.4822L7.897 54.436C7.98031 53.7105 8.08016 53.0314 8.24957 52.3557C8.4057 51.733 8.63139 51.1136 8.86365 50.5804L8.76766 50.4578C6.89233 50.8043 5.18935 51.0252 3.33742 51.0537L3.25769 51.3717C4.89695 52.3037 6.32743 53.3383 7.74458 54.4822Z"
                  fill="white"
                />
                <path
                  d="M15.6394 45.0848L15.245 45.9708C12.275 44.6488 9.29249 43.3212 6.23941 41.7827C5.82813 43.1098 5.33375 44.2204 4.83938 45.331L4.02824 44.97L7.38888 37.4202L8.20001 37.7813C7.70564 38.8919 7.21126 40.0025 6.50604 41.1838C9.68688 42.4352 12.6694 43.7628 15.6394 45.0848Z"
                  fill="white"
                />
                <path
                  d="M21.4815 35.045L17.7236 40.7642L8.81938 34.9135L12.5023 29.3085L13.2443 29.796C12.2317 31.3371 11.2723 32.8968 9.95697 34.5006L9.9772 34.6936C11.1745 35.2842 12.2362 35.9818 13.261 36.835L13.4541 36.8148C14.3819 35.0545 15.3345 33.6047 16.3021 32.1321L17.067 32.6346C16.0993 34.1072 15.1392 35.5685 13.8879 37.0998L13.9459 37.285C15.2157 37.9396 16.3458 38.6821 17.443 39.5992L17.6511 39.5562C18.6275 37.6971 19.6626 36.1217 20.7053 34.5349L21.4815 35.045Z"
                  fill="white"
                />
                <path
                  d="M43.8042 14.7441C40.8563 15.8692 37.9676 14.5446 36.8085 11.5074C35.6055 8.35524 37.037 5.4404 39.7807 4.39326C41.6312 3.68705 43.8803 3.91059 45.2812 5.62749L44.5783 6.27587C43.3989 4.98615 41.6767 4.64923 40.1198 5.24342C37.9631 6.06652 36.7361 8.40622 37.7832 11.15C38.8937 14.0596 41.4998 14.644 43.5672 13.855C45.6474 13.0611 46.3848 11.2007 46.2208 9.39187L47.1495 9.37368C47.3035 11.6542 46.3182 13.7846 43.8042 14.7441Z"
                  fill="white"
                />
                <path
                  d="M54.1644 11.7005L53.2083 11.8631C52.9908 10.5838 52.7733 9.30455 52.6342 7.99807C50.8717 6.02546 49.1877 4.02566 47.5171 2.02356L48.5675 1.84496C50.0103 3.5671 51.4397 5.29153 52.8361 7.22941L52.9977 7.20193C53.6751 4.91143 54.4811 2.8069 55.2736 0.704653L56.297 0.53063C55.3686 2.97465 54.4514 5.40292 53.4422 7.86068C53.7271 9.12851 53.9469 10.4213 54.1644 11.7005Z"
                  fill="white"
                />
                <path
                  d="M59.4075 11.029L58.4241 11.0169L58.5558 0.363344L59.4572 0.374488C61.6874 3.40736 63.754 6.41089 65.8983 9.7569L66.0622 9.75892C65.8837 6.51918 65.9346 3.50085 65.9723 0.455027L66.9557 0.467184L66.824 11.1207L65.9225 11.1096C63.7327 8.13185 61.6244 5.18245 59.4933 1.87759L59.3294 1.87556C59.5084 5.07432 59.4445 8.03786 59.4075 11.029Z"
                  fill="white"
                />
                <path
                  d="M72.5054 12.1441L68.7168 11.3102L71.007 0.904892L74.6756 1.71234C78.144 2.47574 79.1005 5.1199 78.481 7.93467C77.7998 11.0296 75.5336 12.8106 72.5054 12.1441ZM69.7051 10.6326L69.8196 10.8116C70.882 10.8776 71.8292 11.0861 72.7496 11.2887C75.0441 11.7937 76.8727 10.4759 77.4629 7.7945C78.0736 5.01975 76.8459 3.09915 74.2713 2.53247C73.4709 2.3563 72.6704 2.18013 71.7986 1.82039L71.6254 1.90815C71.1825 4.87368 70.5512 7.74181 69.7051 10.6326Z"
                  fill="white"
                />
                <path
                  d="M79.7555 14.2561L78.8342 13.9118L82.5637 3.93153L83.485 4.27579L79.7555 14.2561Z"
                  fill="white"
                />
                <path
                  d="M86.2326 17.4826C83.4752 15.9487 82.6318 12.8848 84.2122 10.0439C85.8524 7.09549 89.0051 6.31714 91.5715 7.74481C93.3023 8.70766 94.5776 10.5737 94.1638 12.7507L93.2152 12.6294C93.4444 10.8968 92.5948 9.36134 91.1385 8.55122C89.1212 7.429 86.5404 7.99406 85.1128 10.5605C83.5988 13.282 84.8273 15.6536 86.7611 16.7293C88.7068 17.8117 90.6057 17.1799 91.8853 15.8911L92.4966 16.5906C90.8492 18.1751 88.5842 18.7907 86.2326 17.4826Z"
                  fill="white"
                />
                <path
                  d="M92.1089 20.7828L91.3225 20.1051L101.547 14.8519L102.365 15.5563L98.6795 26.445L97.8931 25.7673C98.286 24.5372 98.716 23.2849 99.3208 22.039L99.3079 21.8657C98.6957 21.4462 98.0731 21.0179 97.4936 20.5185C96.8624 19.9746 96.3172 19.4146 95.7898 18.8339L95.5972 18.8482C94.4678 19.5519 93.2839 20.1725 92.1089 20.7828ZM96.4087 18.4296L96.3816 18.5866C96.9925 18.9867 97.5544 19.3808 98.0821 19.8356C98.5685 20.2547 99.0206 20.7344 99.3927 21.1814L99.5454 21.1507C100.078 19.3194 100.645 17.6986 101.451 16.0309L101.203 15.8169C99.6338 16.8632 98.0671 17.6769 96.4087 18.4296Z"
                  fill="white"
                />
                <path
                  d="M101.136 29.5437L100.518 28.7965C103.023 26.7243 105.538 24.6434 108.274 22.593C107.268 21.6344 106.493 20.6977 105.718 19.761L106.403 19.1951L111.67 25.5626L110.986 26.1286C110.211 25.1919 109.436 24.2551 108.692 23.0982C106.156 25.3906 103.641 27.4715 101.136 29.5437Z"
                  fill="white"
                />
                <path
                  d="M107.576 39.3204L104.131 33.4073L113.337 28.0441L116.713 33.8392L115.946 34.2862C115.018 32.6928 114.049 31.1388 113.2 29.2465L113.018 29.1786C111.955 29.9872 110.858 30.6266 109.637 31.1638L109.569 31.3456C110.732 32.9607 111.605 34.4597 112.492 35.9822L111.701 36.4429C110.814 34.9204 109.934 33.4096 109.121 31.6069L108.929 31.5763C107.777 32.4212 106.609 33.1019 105.299 33.6754L105.245 33.8808C106.474 35.5835 107.422 37.2123 108.378 38.8529L107.576 39.3204Z"
                  fill="white"
                />
              </g>
              <circle cx="25.0423" cy="19.3507" r="1.13829" fill="#DBC99F" />
              <circle cx="118.382" cy="51.2228" r="1.13829" fill="#DBC99F" />
              <circle cx="44.1383" cy="118.138" r="1.13829" fill="#DBC99F" />
            </svg>
          </div>
        </div>
        <div className={styles.evolutionCards}>
          <div
            onClick={(ev) => {
              if (window.innerWidth <= 768) {
                const target = ev.target as HTMLDivElement

                !target.classList.contains(`${styles.mobileActive}`)
                  ? target.classList.add(`${styles.mobileActive}`)
                  : target.classList.remove(`${styles.mobileActive}`)
              }
            }}
            onMouseEnter={() => {
              if (
                card2.current &&
                card3.current &&
                card4.current &&
                card5.current &&
                window.innerWidth > 768
              ) {
                card2.current.style.transform = `translate(-25%, 0)`
                card3.current.style.transform = `translate(-100%, 0)`
                card4.current.style.transform = `translate(-175%, 0)`
                card5.current.style.transform = `translate(-250%, 0)`
              }
            }}
            ref={card1}
            className={styles.evolutionCard}
          >
            <span className={styles.evolutionCardTitle}>
              {evolutionCardsData[0].title}
            </span>
            <p className={styles.evolutionCardText}>
              {evolutionCardsData[0].text}
            </p>
            <span className={styles.evolutionCardNum}>01</span>
          </div>
          <div
            onClick={(ev) => {
              if (window.innerWidth <= 768) {
                const target = ev.target as HTMLDivElement

                !target.classList.contains(`${styles.mobileActive}`)
                  ? target.classList.add(`${styles.mobileActive}`)
                  : target.classList.remove(`${styles.mobileActive}`)
              }
            }}
            onMouseEnter={() => {
              if (
                card2.current &&
                card3.current &&
                card4.current &&
                card5.current &&
                window.innerWidth > 768
              ) {
                card2.current.style.transform = `translate(-75%)`

                card3.current.style.transform = `translate(-100%, 0)`
                card4.current.style.transform = `translate(-175%, 0)`
                card5.current.style.transform = `translate(-250%, 0)`
                card2.current.dataset.translate = `-75%`
              }
            }}
            ref={card2}
            className={styles.evolutionCard}
          >
            <span className={styles.evolutionCardTitle}>
              {evolutionCardsData[1].title}
            </span>
            <p className={styles.evolutionCardText}>
              {evolutionCardsData[1].text}
            </p>
            <span className={styles.evolutionCardNum}>02</span>
          </div>
          <div
            onClick={(ev) => {
              if (window.innerWidth <= 768) {
                const target = ev.target as HTMLDivElement

                !target.classList.contains(`${styles.mobileActive}`)
                  ? target.classList.add(`${styles.mobileActive}`)
                  : target.classList.remove(`${styles.mobileActive}`)
              }
            }}
            onMouseEnter={() => {
              if (
                card2.current &&
                card3.current &&
                card4.current &&
                card5.current &&
                window.innerWidth > 768
              ) {
                card2.current.style.transform = `translate(-75%)`
                card2.current.dataset.translate = `-75%`

                card3.current.style.transform = `translate(-150%)`
                card4.current.style.transform = `translate(-175%, 0)`
                card5.current.style.transform = `translate(-250%, 0)`
              }
            }}
            ref={card3}
            className={styles.evolutionCard}
          >
            <span className={styles.evolutionCardTitle}>
              {evolutionCardsData[2].title}
            </span>
            <p className={styles.evolutionCardText}>
              {evolutionCardsData[2].text}
            </p>
            <span className={styles.evolutionCardNum}>03</span>
          </div>
          <div
            onClick={(ev) => {
              if (window.innerWidth <= 768) {
                const target = ev.target as HTMLDivElement

                !target.classList.contains(`${styles.mobileActive}`)
                  ? target.classList.add(`${styles.mobileActive}`)
                  : target.classList.remove(`${styles.mobileActive}`)
              }
            }}
            onMouseEnter={() => {
              if (
                card2.current &&
                card3.current &&
                card4.current &&
                card5.current &&
                window.innerWidth > 768
              ) {
                card2.current.style.transform = `translate(-75%, 0)`
                card3.current.style.transform = `translate(-150%, 0)`
                card4.current.style.transform = `translate(-225%, 0)`
                card5.current.style.transform = `translate(-250%, 0)`
              }
            }}
            ref={card4}
            className={styles.evolutionCard}
          >
            <span className={styles.evolutionCardTitle}>
              {evolutionCardsData[3].title}
            </span>
            <p className={styles.evolutionCardText}>
              {evolutionCardsData[3].text}
            </p>
            <span className={styles.evolutionCardNum}>04</span>
          </div>
          <div
            onClick={(ev) => {
              if (window.innerWidth <= 768) {
                const target = ev.target as HTMLDivElement

                !target.classList.contains(`${styles.mobileActive}`)
                  ? target.classList.add(`${styles.mobileActive}`)
                  : target.classList.remove(`${styles.mobileActive}`)
              }
            }}
            onMouseEnter={() => {
              if (
                card2.current &&
                card3.current &&
                card4.current &&
                card5.current &&
                window.innerWidth > 768
              ) {
                card2.current.style.transform = `translate(-75%)`
                card2.current.dataset.translate = `-75%`
                card3.current.style.transform = `translate(-150%)`
                card3.current.dataset.translate = `-150%`
                card4.current.style.transform = `translate(-225%)`
                card4.current.dataset.translate = `-225%`

                card5.current.style.transform = `translate(-300%)`
                card5.current.dataset.translate = `-300%`
              }
            }}
            ref={card5}
            className={styles.evolutionCard}
          >
            <span className={styles.evolutionCardTitle}>
              {evolutionCardsData[4].title}
            </span>
            <p className={styles.evolutionCardText}>
              {evolutionCardsData[4].text}
            </p>
            <span className={styles.evolutionCardNum}>05</span>
          </div>
        </div>
      </div>
    </section>
  )
}

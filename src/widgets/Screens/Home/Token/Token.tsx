import clsx from 'clsx'
import styles from './Token.module.scss'
import { Button } from '../../../../shared/Button/Button'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper'
import { useEffect, useState } from 'react'
import { ISwiper } from '../../../../interfaces/ISwiper'

export const Token = () => {
  const [swiper, setSwiper] = useState<ISwiper>()

  useEffect(() => {
    if (swiper) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: '#token',
          start: 'top top-=25%',
          end: 'bottom bottom-=200%',
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            swiper?.setProgress(self.progress)
          },
        })
      })

      return () => ctx.revert()
    }
  }, [swiper])

  return (
    <section id="token" className={clsx('section', styles.token)}>
      <div className="container">
        <div className={styles.tokenTopWrapper}>
          <div className={styles.group}>
            <div className="section-span-group">
              <span className="section-num">005</span>
              <span className="section-span">token</span>
            </div>
            <h2>
              $CYND Token: <br /> Pioneering the Future <br /> of Self Evolution
            </h2>
          </div>
          <div className={styles.group}>
            <p className={styles.tokenTopText}>
              CYNDICATE is pioneering the future of personal development and
              blockchain technology by becoming the world’s first all-inclusive
              platformed designed for personal and financial success.
            </p>
            <div className={styles.row}>
              <div className="quote">
                <span className="quotes text-gold">“</span>
                <p className="text-gold">
                  Secure Your Spot on the $CYND Token Waitlist!
                </p>
              </div>
              <Button>Join the Future Now</Button>
            </div>
          </div>
        </div>
        <div className={styles.tokenCards}>
          <div className={styles.tokenCardsBlock}>
            <div className={styles.tokenCardsText}>
              <p className="text-white">
                Here is a high-level overview of how our utility token will be
                used to enhance your experience:
              </p>
            </div>
            <div className={styles.tokenCardsLogo}>
              <svg
                preserveAspectRatio="none"
                width="128"
                height="162"
                viewBox="0 0 128 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.271186"
                  y="0.271186"
                  width="127.458"
                  height="161.085"
                  rx="63.7288"
                  stroke="#DBC99F"
                  stroke-width="0.542373"
                />
                <g clip-path="url(#clip0_97_56)">
                  <path
                    d="M11.9991 48.7246L17.1361 51.6256L16.9883 52.2566L11.8935 52.4683L16.3462 54.9585L16.1983 55.5895L10.3093 55.8647L10.453 55.2634L15.4844 55.077L11.0697 52.6546L11.2387 51.9432L16.2532 51.7653L11.8597 49.3302L12.0034 48.7288L11.9991 48.7246Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M13.9931 43.537L15.5266 40.2168L16.0081 40.4412L14.7323 43.2109L16.5742 44.0664L17.7867 41.4365L18.2683 41.6609L17.0558 44.2908L18.9062 45.1463L20.182 42.3766L20.6636 42.6011L19.1301 45.9213L13.9888 43.537H13.9931Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M25.4584 34.9396L25.0951 35.4647L23.663 35.0751L22.214 37.1757L23.0842 38.3826L22.7209 38.9078L19.2484 33.9613L19.6159 33.4277L25.4584 34.9396ZM23.118 34.9311L19.9919 34.0799L21.8887 36.7183L23.1222 34.9311H23.118Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M24.2291 27.6426L24.6515 27.2021L28.3395 30.7807L30.0842 28.9724L30.4687 29.345L28.3015 31.5938L24.2291 27.6468V27.6426Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M31.2883 21.8623L30.0463 22.8237L29.721 22.4002L32.6782 20.1133L33.0035 20.5368L31.7699 21.4939L34.9087 25.5679L34.4271 25.9406L31.2883 21.8666V21.8623Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M37.2153 17.1617L37.7518 16.8779L39.0149 19.2664L41.7017 17.8392L40.4386 15.4507L40.9751 15.167L43.6239 20.1854L43.0873 20.4692L41.9467 18.3136L39.2599 19.7407L40.4006 21.8963L39.864 22.1801L37.2153 17.1617Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M57.0916 15.9757L56.4664 16.107L55.6933 14.8365L53.2009 15.3616L53.0023 16.8354L52.3771 16.9667L53.2558 10.9785L53.8895 10.8472L57.0916 15.9799V15.9757ZM55.4018 14.3537L53.7162 11.5756L53.2769 14.7984L55.3976 14.3537H55.4018Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M61.2443 9.83053L63.1875 9.76277C64.3408 9.72465 65.1393 10.398 65.1731 11.4356C65.1984 12.219 64.776 12.8289 64.0578 13.0914L65.4646 15.3698L64.7506 15.3953L63.4241 13.227L61.9667 13.2735L62.0385 15.4842L61.4301 15.5054L61.2443 9.83053ZM63.2847 12.6976C64.0578 12.6722 64.5605 12.1767 64.5352 11.4525C64.5098 10.7368 63.9775 10.2752 63.2044 10.3006L61.8653 10.343L61.9455 12.7442L63.2847 12.7018V12.6976Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M70.044 12.7654C70.289 11.0841 71.6155 10.0254 73.1955 10.2541C74.3319 10.4193 75.067 11.2408 75.2444 11.9862L74.6656 12.1725C74.4882 11.4441 73.9432 10.902 73.1195 10.7835C71.8775 10.6014 70.8467 11.4568 70.6439 12.8501C70.4411 14.2477 71.1889 15.3487 72.4309 15.5308C73.2504 15.6494 73.9264 15.2937 74.3023 14.6457L74.805 14.9888C74.4248 15.6494 73.4912 16.2254 72.3506 16.0602C70.7706 15.8315 69.7948 14.4467 70.0356 12.7654H70.044Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M80.8757 12.0293L81.4502 12.2283L80.5757 14.7905L83.4526 15.7772L84.3271 13.2151L84.9016 13.4141L83.0682 18.7883L82.4937 18.5892L83.2836 16.2812L80.4068 15.2944L79.6168 17.6025L79.0422 17.4035L80.8757 12.0293Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M90.0429 15.7554L90.5836 16.0349L87.9813 21.0787L87.4406 20.7992L90.0429 15.7554Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M96.1177 20.0155L94.8335 19.1134L95.1376 18.6772L98.1962 20.8244L97.892 21.2606L96.6162 20.3628L93.6717 24.5765L93.1732 24.225L96.1177 20.0113V20.0155Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M102.324 24.272L104.934 26.8299L104.563 27.211L102.387 25.0808L100.968 26.5377L103.033 28.562L102.662 28.9431L100.596 26.9188L99.1721 28.3799L101.348 30.5101L100.976 30.8912L98.3652 28.3333L102.324 24.272Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M106.223 32.5934C107.604 31.6067 109.281 31.8354 110.211 33.1397C110.878 34.0756 110.794 35.1767 110.384 35.8204L109.847 35.5282C110.249 34.8972 110.261 34.1265 109.775 33.4489C109.045 32.424 107.718 32.2716 106.573 33.0889C105.428 33.9063 105.154 35.2148 105.88 36.2355C106.362 36.9131 107.084 37.1545 107.811 36.9766L107.912 37.578C107.173 37.7601 106.113 37.4806 105.445 36.5446C104.516 35.2403 104.837 33.5802 106.218 32.5892L106.223 32.5934Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M114.245 41.2076L113.569 39.7931L114.051 39.5645L115.665 42.9397L115.183 43.1684L114.511 41.7582L109.881 43.9815L109.619 43.431L114.249 41.2076H114.245Z"
                    fill="#DBC99F"
                  />
                  <path
                    d="M113.434 48.9111L113.814 49.3727C113.121 49.8512 112.876 50.5415 113.1 51.3123C113.307 52.028 113.823 52.4134 114.372 52.2524C114.874 52.1042 115.073 51.7485 115.073 51.0963V50.0164C115.073 49.0889 115.504 48.4876 116.163 48.297C117.025 48.0471 117.849 48.5934 118.14 49.6014C118.427 50.5966 118.047 51.5028 117.409 51.9475L117.016 51.4901C117.62 51.0582 117.832 50.4441 117.629 49.7538C117.426 49.0593 116.928 48.7035 116.374 48.8645C115.922 48.9958 115.656 49.415 115.656 50.0418V51.0666C115.648 52.028 115.314 52.6082 114.591 52.8199C113.713 53.074 112.897 52.5192 112.589 51.4563C112.281 50.3891 112.707 49.3981 113.434 48.9068V48.9111Z"
                    fill="#DBC99F"
                  />
                </g>
                <path
                  d="M16.3276 111.63L17.8743 115.529L17.3088 115.757L16.0183 112.509L13.8577 113.373L15.0806 116.461L14.515 116.689L13.2922 113.601L11.1267 114.47L12.4173 117.718L11.8518 117.946L10.3051 114.038L16.3276 111.625V111.63Z"
                  fill="#DBC99F"
                />
                <path
                  d="M23.2928 124.883L17.8696 128.452L17.4877 127.864L21.775 125.044L17.9807 124.951L17.9614 124.922L19.4066 121.378L15.1048 124.209L14.723 123.621L20.1462 120.048L20.4797 120.558L18.9668 124.272L22.9593 124.359L23.2928 124.869V124.883Z"
                  fill="#DBC99F"
                />
                <path
                  d="M26.652 128.917L28.2229 130.504C29.1557 131.446 29.2089 132.65 28.3727 133.485C27.5317 134.32 26.3523 134.257 25.4146 133.305L24.3367 132.213L22.5435 134L22.0553 133.505L26.6616 128.917H26.652ZM25.8399 132.878C26.4635 133.509 27.2707 133.548 27.8603 132.961C28.4404 132.383 28.4162 131.572 27.7878 130.936L26.71 129.844L24.7621 131.781L25.8399 132.873V132.878Z"
                  fill="#DBC99F"
                />
                <path
                  d="M33.6944 135.277L34.2551 135.694L30.4028 140.932L29.8421 140.515L33.6944 135.277Z"
                  fill="#DBC99F"
                />
                <path
                  d="M38.7117 138.655L40.6886 139.689C41.8632 140.301 42.2788 141.427 41.7327 142.481C41.317 143.277 40.5581 143.651 39.6929 143.5L39.8186 146.568L39.0936 146.189L38.9872 143.277L37.5082 142.5L36.3433 144.748L35.7246 144.422L38.7214 138.65L38.7117 138.655ZM39.1371 142.67C39.9249 143.083 40.7031 142.869 41.085 142.131C41.462 141.403 41.1913 140.641 40.4034 140.228L39.0452 139.519L37.7788 141.961L39.1371 142.67Z"
                  fill="#DBC99F"
                />
                <path
                  d="M47.4168 142.637L51.419 143.841L51.2449 144.428L47.9098 143.423L47.2428 145.656L50.4087 146.613L50.2347 147.2L47.0688 146.244L46.3969 148.486L49.7321 149.491L49.5581 150.079L45.5559 148.875L47.4168 142.637Z"
                  fill="#DBC99F"
                />
                <path
                  d="M66.7509 149.952C66.7605 151.108 65.9388 151.836 64.6773 151.845L61.9802 151.865L61.9367 145.355L64.6338 145.335C65.731 145.331 66.4657 145.981 66.4705 146.957C66.4705 147.549 66.2095 148.044 65.7407 148.336C66.369 148.656 66.746 149.248 66.7509 149.952ZM62.6472 148.103L64.5951 148.088C65.2912 148.088 65.7407 147.651 65.7358 147.005C65.7358 146.369 65.2767 145.942 64.5806 145.947L62.6327 145.962L62.6472 148.103ZM66.021 149.957C66.021 149.195 65.4748 148.695 64.6531 148.7L62.6521 148.714L62.6714 151.248L64.6725 151.234C65.4893 151.229 66.0259 150.719 66.021 149.957Z"
                  fill="#DBC99F"
                />
                <path
                  d="M76.1181 143.878L77.0026 148.262C77.2588 149.529 76.5386 150.539 75.1659 150.82C73.7932 151.102 72.7395 150.456 72.4833 149.18L71.5988 144.796L72.29 144.655L73.1745 149.039C73.3485 149.903 74.1508 150.398 75.045 150.218C75.9296 150.039 76.4854 149.257 76.3114 148.403L75.4269 144.019L76.1181 143.878Z"
                  fill="#DBC99F"
                />
                <path
                  d="M81.1981 142.253L81.8506 142.005L84.1321 148.098L83.4795 148.345L81.1981 142.253Z"
                  fill="#DBC99F"
                />
                <path
                  d="M86.7614 139.826L87.3704 139.486L90.2174 144.646L92.7308 143.248L93.0256 143.782L89.9032 145.52L86.7614 139.826Z"
                  fill="#DBC99F"
                />
                <path
                  d="M93.973 135.35L95.6115 133.981C97.0906 132.748 98.8596 132.923 100.121 134.447C101.378 135.966 101.228 137.758 99.749 138.991L98.1104 140.36L93.973 135.35ZM99.3623 138.525C100.508 137.573 100.576 136.151 99.5605 134.918C98.5503 133.695 97.1389 133.505 96.003 134.452L94.8962 135.374L98.2554 139.442L99.3623 138.52V138.525Z"
                  fill="#DBC99F"
                />
                <path
                  d="M101.552 128.3L104.191 125.053L104.665 125.441L102.465 128.15L104.263 129.626L106.356 127.053L106.83 127.441L104.737 130.014L106.545 131.495L108.744 128.786L109.218 129.174L106.579 132.422L101.557 128.305L101.552 128.3Z"
                  fill="#DBC99F"
                />
                <path
                  d="M107.038 120.806L108.101 118.839C108.735 117.674 109.861 117.276 110.9 117.839C111.688 118.267 112.041 119.039 111.881 119.907L114.941 119.835L114.549 120.558L111.649 120.616L110.852 122.092L113.065 123.301L112.732 123.912L107.038 120.806ZM111.045 120.446C111.47 119.665 111.267 118.878 110.542 118.485C109.822 118.092 109.058 118.354 108.638 119.136L107.908 120.485L110.315 121.801L111.045 120.451V120.446Z"
                  fill="#DBC99F"
                />
                <path
                  d="M115.675 113.907L115.608 113.227C116.57 113.213 117.242 112.713 117.517 111.839C117.778 111.023 117.532 110.329 116.908 110.13C116.338 109.946 115.922 110.164 115.506 110.78L114.815 111.805C114.225 112.688 113.438 112.984 112.688 112.747C111.712 112.436 111.277 111.387 111.639 110.237C111.997 109.106 112.935 108.484 113.824 108.47L113.906 109.159C113.061 109.183 112.466 109.635 112.219 110.416C111.968 111.208 112.219 111.863 112.848 112.067C113.36 112.232 113.882 112.004 114.279 111.407L114.936 110.436C115.555 109.523 116.236 109.183 117.058 109.445C118.054 109.766 118.479 110.814 118.092 112.023C117.706 113.237 116.671 113.907 115.671 113.907H115.675Z"
                  fill="#DBC99F"
                />
                <path
                  opacity="0.8"
                  d="M9.70099 85.2715V84.9461L11.0548 83.5207C11.8618 82.6681 12.2002 82.2516 12.2002 81.7048C12.2002 81.1256 11.8488 80.8002 11.25 80.8002C10.6642 80.8002 10.2542 81.0865 10.0655 81.6137L9.64892 81.4185C9.87672 80.7611 10.4885 80.3446 11.25 80.3446C12.1026 80.3446 12.7209 80.9108 12.7209 81.7048C12.7209 82.2516 12.389 82.7592 11.66 83.5272L10.443 84.8159H12.8511V85.2715H9.70099ZM16.2652 85.3496C15.1197 85.3496 14.3452 84.3408 14.3452 82.8438C14.3452 81.3469 15.1132 80.3446 16.2587 80.3446C17.4042 80.3446 18.1722 81.3469 18.1722 82.8438C18.1722 84.3473 17.4107 85.3496 16.2652 85.3496ZM16.2652 84.8615C17.0983 84.8615 17.658 84.0544 17.658 82.8438C17.658 81.6398 17.0983 80.8327 16.2587 80.8327C15.4256 80.8327 14.8659 81.6398 14.8659 82.8438C14.8659 84.0479 15.4256 84.8615 16.2652 84.8615Z"
                  fill="#DBC99F"
                />
                <path
                  opacity="0.8"
                  d="M109.263 85.2715V84.9461L110.617 83.5207C111.424 82.6681 111.763 82.2516 111.763 81.7048C111.763 81.1256 111.411 80.8002 110.812 80.8002C110.227 80.8002 109.817 81.0865 109.628 81.6137L109.211 81.4185C109.439 80.7611 110.051 80.3446 110.812 80.3446C111.665 80.3446 112.283 80.9108 112.283 81.7048C112.283 82.2516 111.951 82.7592 111.223 83.5272L110.005 84.8159H112.414V85.2715H109.263ZM115.711 82.2841C116.446 82.3752 117.012 83.0261 117.012 83.8136C117.012 84.7052 116.335 85.3496 115.392 85.3496C114.637 85.3496 114.025 84.9461 113.778 84.2757L114.194 84.0804C114.389 84.5816 114.845 84.894 115.392 84.894C116.042 84.894 116.492 84.4514 116.492 83.8136C116.492 83.1888 116.029 82.7397 115.385 82.7397C115.268 82.7397 115.118 82.7527 115.034 82.7657L114.988 82.4793L116.238 80.8848L114.005 80.8783V80.4227H116.823V80.8783L115.711 82.2841Z"
                  fill="#DBC99F"
                />
                <path
                  d="M50.2113 64.0368C50.2113 63.8931 50.3952 63.8331 50.4799 63.9493L59.2288 75.9451C59.3004 76.0432 59.2302 76.1812 59.1087 76.1812H58.2046C58.1226 76.1812 58.0561 76.2477 58.0561 76.3297V85.2018C58.0561 85.2499 58.0795 85.2951 58.1188 85.323L62.6145 88.508C62.6539 88.5359 62.6772 88.5811 62.6772 88.6292V97.7724C62.6772 97.8902 62.5468 97.9612 62.4479 97.8971L58.2393 95.1712C58.1693 95.1258 58.1503 95.0317 58.1973 94.9628L60.7915 91.1594C60.8288 91.1047 60.8254 91.0319 60.7832 90.9809L60.3585 90.4682C60.3035 90.4019 60.2039 90.3961 60.1416 90.4555L56.2475 94.1681C56.1994 94.214 56.1262 94.2221 56.069 94.1883C53.8016 92.8486 52.1037 91.8033 50.7837 88.8669C50.7798 88.8583 50.7767 88.8492 50.7746 88.84C50.7539 88.7496 50.8225 88.6634 50.9152 88.6634H56.6656C56.755 88.6634 56.8242 88.585 56.813 88.4962L56.7068 87.6573C56.6989 87.5946 56.6523 87.5439 56.5905 87.5306L50.3724 86.1993C50.3039 86.1846 50.255 86.1241 50.255 86.054V80.7645C50.255 80.6423 50.3942 80.5724 50.4922 80.6454L54.6468 83.7385C54.7448 83.8115 54.884 83.7415 54.884 83.6194V82.2616C54.884 82.2175 54.8644 82.1756 54.8305 82.1474L50.308 78.386C50.2744 78.358 50.2548 78.3167 50.2544 78.273L50.2141 73.1255C50.2131 72.9931 50.3726 72.9256 50.4669 73.0185L54.6313 77.1181C54.7252 77.2105 54.884 77.144 54.884 77.0122V75.3572C54.884 75.3198 54.8699 75.2838 54.8446 75.2563L50.2508 70.2881C50.2254 70.2606 50.2113 70.2246 50.2113 70.1872V64.0368Z"
                  fill="url(#paint0_linear_97_56)"
                />
                <path
                  d="M77.5327 64.0368C77.5327 63.8931 77.3489 63.8331 77.2641 63.9493L68.5153 75.9451C68.4437 76.0432 68.5138 76.1812 68.6353 76.1812H69.5394C69.6214 76.1812 69.6879 76.2477 69.6879 76.3297V85.2018C69.6879 85.2499 69.6646 85.2951 69.6253 85.323L65.1295 88.508C65.0902 88.5359 65.0668 88.5811 65.0668 88.6292V97.7724C65.0668 97.8902 65.1973 97.9612 65.2961 97.8971L69.5047 95.1712C69.5747 95.1258 69.5937 95.0317 69.5467 94.9628L66.9525 91.1594C66.9152 91.1047 66.9186 91.0319 66.9608 90.9809L67.3856 90.4682C67.4405 90.4019 67.5401 90.3961 67.6025 90.4555L71.4965 94.1681C71.5447 94.214 71.6178 94.2221 71.675 94.1883C73.9425 92.8486 75.6403 91.8033 76.9604 88.8669C76.9642 88.8583 76.9673 88.8492 76.9694 88.84C76.9902 88.7496 76.9215 88.6634 76.8288 88.6634H71.0784C70.989 88.6634 70.9198 88.585 70.9311 88.4962L71.0372 87.6573C71.0451 87.5946 71.0918 87.5439 71.1535 87.5306L77.3716 86.1993C77.4401 86.1846 77.489 86.1241 77.489 86.054V80.7645C77.489 80.6423 77.3498 80.5724 77.2518 80.6454L73.0972 83.7385C72.9992 83.8115 72.86 83.7415 72.86 83.6194V82.2616C72.86 82.2175 72.8796 82.1756 72.9135 82.1474L77.436 78.386C77.4697 78.358 77.4892 78.3167 77.4896 78.273L77.5299 73.1255C77.5309 72.9931 77.3715 72.9256 77.2771 73.0185L73.1127 77.1181C73.0188 77.2105 72.86 77.144 72.86 77.0122V75.3572C72.86 75.3198 72.8741 75.2838 72.8995 75.2563L77.4932 70.2881C77.5186 70.2606 77.5327 70.2246 77.5327 70.1872V64.0368Z"
                  fill="url(#paint1_linear_97_56)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_97_56"
                    x1="51.3037"
                    y1="78.9996"
                    x2="61.349"
                    y2="88.6861"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DBC99F" />
                    <stop offset="1" stop-color="#877551" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_97_56"
                    x1="75.8554"
                    y1="77.7174"
                    x2="67.6533"
                    y2="87.0131"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DBC99F" />
                    <stop offset="1" stop-color="#877551" />
                  </linearGradient>
                  <clipPath id="clip0_97_56">
                    <rect
                      width="107.932"
                      height="46.1017"
                      fill="white"
                      transform="translate(10.3051 9.7627)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            slidesPerView={'auto'}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className={styles.tokenCardsWrapper}
          >
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.tokenCard}>
              <span className={styles.tokenCardTitle}>
                <span className={styles.tokenCardNum}>01</span>
                Access to Premium Education Content
              </span>
              <p className={styles.tokenCardText}>
                When you hold $CYND tokens, you gain privileged access to
                premium educational content on our platform. These tokens serve
                as your key to unlock advanced courses, exclusive webinars, and
                in-depth resources that cater to your personal and professional
                development.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

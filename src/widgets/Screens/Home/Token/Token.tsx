import clsx from 'clsx'
import styles from './Token.module.scss'
import { Button } from '../../../../shared/Button/Button'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { useContext, useEffect, useState } from 'react'
import { ISwiper } from '../../../../interfaces/ISwiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import { tokenCards } from '../../../../data'
import { MainContext } from '../../../../app/providers/MainContext'
import { Logo } from '../../../../shared/Logo/Logo'

export const Token = () => {
  const [swiper, setSwiper] = useState<ISwiper>()
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const { modalActive, setModalActive } = useContext(MainContext)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h3Split: any = new SplitText(`.${styles.token} h2`, {
        type: 'words',
      })

      const textSplit: any = new SplitText(`.${styles.tokenTopText}`, {
        type: 'words',
      })

      const text2Split: any = new SplitText(`.${styles.tokenCardsText}`, {
        type: 'words',
      })

      h3Split.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.025}`
          el.dataset.duration = `0.5`
          el.classList.add('reveal')
        })
      })

      textSplit.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.015 + 0.5}`
          el.dataset.start = `top top+=100%`
          el.dataset.duration = `0.35`
          el.classList.add('reveal')
        })
      })

      text2Split.elements.forEach((element: HTMLDivElement) => {
        const words = Array.from(
          element.querySelectorAll<HTMLDivElement>('div')
        )

        words.map((word, idx) => {
          const el = word as HTMLDivElement

          el.dataset.delay = `${idx * 0.0125 + 0.65}`
          el.dataset.start = `top top+=100%`
          el.dataset.duration = `0.35`
          el.classList.add('reveal')
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="token" className={clsx('section', styles.token)}>
      <div className="container">
        <div className={styles.tokenTopWrapper}>
          <div className={styles.group}>
            <div className="section-span-group">
              <span
                data-delay="0"
                data-duration="0.45"
                className="reveal opacity-0 translate-y-1/2 section-num"
              >
                005
              </span>
              <span
                data-delay="0.25"
                data-duration="0.45"
                className="reveal opacity-0 translate-y-1/2 section-span"
              >
                token
              </span>
            </div>
            <h2>
              $CYND Token: <br /> Pioneering the Future <br /> of Self Evolution
            </h2>
          </div>
          <div className={styles.group}>
            {window.innerWidth <= 768 && <div></div>}
            <p className={styles.tokenTopText}>
              CYNDICATE is pioneering the future of personal development and
              blockchain technology by becoming the world’s first all-inclusive
              platformed designed for personal and financial success.
            </p>
            <div className={styles.row}>
              <div className="quote">
                {window.innerWidth <= 768 && (
                  <svg
                    data-start="top top+=100%"
                    data-duration="0.75"
                    data-delay="0.5"
                    className="reveal opacity-0 translate-y-[50%] quotes text-gold"
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.82 0.159997C20.46 1.68 20.08 3.32 19.68 5.08C19.28 6.84 18.92 8.56 18.6 10.24C18.28 11.92 18.02 13.46 17.82 14.86H12.12L11.7 14.2C12.06 12.8 12.52 11.3 13.08 9.7C13.64 8.06 14.26 6.42 14.94 4.78C15.62 3.14 16.28 1.6 16.92 0.159997H20.82ZM9.72 0.159997C9.36 1.68 8.98 3.32 8.58 5.08C8.18 6.84 7.82 8.56 7.5 10.24C7.18 11.92 6.92 13.46 6.72 14.86H1.08L0.72 14.2C1.08 12.8 1.54 11.3 2.1 9.7C2.66 8.06 3.26 6.42 3.9 4.78C4.58 3.14 5.24 1.6 5.88 0.159997H9.72Z"
                      fill="#DBC99F"
                    />
                  </svg>
                )}
                <p
                  data-start="top top+=100%"
                  data-duration="0.45"
                  data-delay="0.75"
                  className="reveal opacity-0 translate-y-1/2 text-gold"
                >
                  Secure Your Spot on the $CYND Token Waitlist!
                </p>
                {window.innerWidth <= 768 && (
                  <svg
                    data-start="top top+=100%"
                    data-duration="0.75"
                    data-delay="0.5"
                    className="reveal opacity-0 translate-y-[50%] quotes text-gold"
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.82 0.159997C20.46 1.68 20.08 3.32 19.68 5.08C19.28 6.84 18.92 8.56 18.6 10.24C18.28 11.92 18.02 13.46 17.82 14.86H12.12L11.7 14.2C12.06 12.8 12.52 11.3 13.08 9.7C13.64 8.06 14.26 6.42 14.94 4.78C15.62 3.14 16.28 1.6 16.92 0.159997H20.82ZM9.72 0.159997C9.36 1.68 8.98 3.32 8.58 5.08C8.18 6.84 7.82 8.56 7.5 10.24C7.18 11.92 6.92 13.46 6.72 14.86H1.08L0.72 14.2C1.08 12.8 1.54 11.3 2.1 9.7C2.66 8.06 3.26 6.42 3.9 4.78C4.58 3.14 5.24 1.6 5.88 0.159997H9.72Z"
                      fill="#DBC99F"
                    />
                  </svg>
                )}
              </div>
              {window.innerWidth > 768 && (
                <Button
                  handleClick={() =>
                    modalActive ? setModalActive(false) : setModalActive(true)
                  }
                  isLink={false}
                  dataDelay={'0.9'}
                >
                  Join the Future Now
                </Button>
              )}
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
                width="188"
                height="193"
                viewBox="0 0 188 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M169.754 108.175C170.267 103.449 174.024 100.483 178.893 101.01C183.945 101.558 186.874 105.477 186.397 109.875C186.076 112.841 184.234 115.705 180.97 116.407L180.583 115.019C183.121 114.322 184.754 112.243 185.024 109.747C185.399 106.29 183.102 103.04 178.704 102.563C174.039 102.058 171.469 105.153 171.11 108.467C170.748 111.801 172.738 114.066 175.277 115.086L174.664 116.344C171.5 114.987 169.318 112.205 169.754 108.175Z"
                    fill="white"
                  />
                  <path
                    d="M166.777 123.841L167.213 122.447C169.079 123.029 170.945 123.611 172.794 124.318C176.647 123.3 180.482 122.406 184.312 121.532L183.834 123.064C180.535 123.824 177.244 124.564 173.688 125.114L173.614 125.35C176.226 127.825 178.5 130.345 180.781 132.846L180.315 134.339C177.669 131.422 175.036 128.531 172.426 125.496C170.529 125.012 168.644 124.424 166.777 123.841Z"
                    fill="white"
                  />
                  <path
                    d="M164.072 131.275L164.758 129.963L178.98 137.402L178.351 138.605C172.757 139.534 167.313 140.262 161.356 140.862L161.242 141.081C165.716 143.05 169.736 145.176 173.802 147.302L173.115 148.615L158.893 141.176L159.523 139.973C165.016 139.061 170.415 138.239 176.307 137.629L176.422 137.41C172.002 135.47 168.065 133.364 164.072 131.275Z"
                    fill="white"
                  />
                  <path
                    d="M153.532 148.192L157.24 143.675L169.647 153.857L166.057 158.231C162.663 162.367 158.459 161.845 155.103 159.091C151.413 156.062 150.569 151.803 153.532 148.192ZM157.475 145.465L157.156 145.496C156.342 146.878 155.415 148.007 154.514 149.104C152.269 151.84 152.789 155.196 155.986 157.82C159.295 160.535 162.712 160.198 165.232 157.128C166.015 156.174 166.798 155.22 167.877 154.295L167.877 154.002C164.198 151.382 160.778 148.575 157.475 145.465Z"
                    fill="white"
                  />
                  <path
                    d="M145.598 156.621L146.686 155.616L157.573 167.409L156.484 168.414L145.598 156.621Z"
                    fill="white"
                  />
                  <path
                    d="M136.617 163.26C140.561 160.606 145.25 161.568 147.984 165.631C150.822 169.847 149.712 174.612 146.042 177.082C143.567 178.747 140.19 179.184 137.55 177.141L138.361 175.951C140.531 177.442 143.173 177.351 145.255 175.949C148.14 174.008 149.145 170.157 146.675 166.487C144.056 162.594 140.033 162.623 137.267 164.484C134.485 166.357 134.035 169.338 134.891 171.936L133.534 172.279C132.533 168.985 133.254 165.523 136.617 163.26Z"
                    fill="white"
                  />
                  <path
                    d="M128.411 168.722L129.855 168.124L129.99 185.441L128.488 186.063L116.339 173.722L117.784 173.124C119.172 174.486 120.565 175.914 121.831 177.572L122.073 177.673C123.052 177.133 124.051 176.586 125.115 176.145C126.275 175.665 127.398 175.311 128.537 174.995L128.648 174.727C128.467 172.73 128.435 170.717 128.411 168.722ZM128.661 176.102L128.468 175.959C127.516 176.51 126.604 176.998 125.635 177.4C124.741 177.77 123.79 178.053 122.936 178.251L122.874 178.477C124.976 180.434 126.772 182.297 128.469 184.511L128.925 184.322C128.581 181.503 128.549 178.843 128.661 176.102Z"
                    fill="white"
                  />
                  <path
                    d="M110.06 174.97L111.486 174.653C112.55 179.433 113.618 184.233 114.495 189.308C116.47 188.616 118.257 188.218 120.045 187.82L120.336 189.126L108.184 191.83L107.893 190.525C109.681 190.127 111.468 189.729 113.531 189.523C112.192 184.551 111.124 179.75 110.06 174.97Z"
                    fill="white"
                  />
                  <path
                    d="M92.5915 176.875L102.883 176.279L103.812 192.302L93.7254 192.886L93.648 191.551C96.4212 191.39 99.1692 191.149 102.29 191.298L102.505 191.1C102.143 189.121 102.033 187.211 102.143 185.205L101.945 184.99C98.9833 185.45 96.3744 185.601 93.7244 185.755L93.6447 184.378C96.2946 184.225 98.9241 184.073 101.9 184.209L102.072 183.973C101.722 181.849 101.604 179.816 101.727 177.665L101.488 177.452C98.3628 177.942 95.5279 178.106 92.6725 178.272L92.5915 176.875Z"
                    fill="white"
                  />
                  <path
                    d="M42.3669 156.237C45.8596 159.461 46.0073 164.246 42.6855 167.844C39.2381 171.579 34.3462 171.6 31.0954 168.599C28.903 166.575 27.6981 163.391 29.0764 160.35L30.422 160.864C29.4718 163.32 30.1708 165.869 32.0154 167.572C34.5707 169.931 38.5496 170.019 41.5503 166.768C44.7325 163.321 43.7754 159.413 41.3259 157.152C38.8614 154.877 35.8572 155.128 33.5263 156.561L32.8797 155.32C35.8537 153.585 39.3883 153.487 42.3669 156.237Z"
                    fill="white"
                  />
                  <path
                    d="M31.6328 144.656L32.5008 145.832C30.9284 146.993 29.356 148.154 27.6937 149.229C26.2386 152.939 24.6935 156.561 23.1362 160.167L22.1826 158.876C23.5181 155.767 24.8659 152.673 26.5231 149.479L26.3764 149.281C22.8365 149.926 19.4592 150.272 16.0942 150.634L15.1651 149.376C19.0819 148.964 22.97 148.548 26.9602 148.236C28.4715 146.991 30.0604 145.818 31.6328 144.656Z"
                    fill="white"
                  />
                  <path
                    d="M27.142 137.919L27.7894 139.252L13.3531 146.266L12.7596 145.044C15.3387 139.994 17.9886 135.183 21.0473 130.037L20.9394 129.815C16.6968 132.242 12.5976 134.211 8.47026 136.216L7.82281 134.884L22.2591 127.87L22.8526 129.091C20.3206 134.05 17.7717 138.88 14.7595 143.981L14.8674 144.203C19.0544 141.803 23.0887 139.889 27.142 137.919Z"
                    fill="white"
                  />
                  <path
                    d="M19.8378 119.576L21.2805 125.239L5.72721 129.201L4.33024 123.717C3.00946 118.533 5.92024 115.456 10.1276 114.384C14.7537 113.205 18.6846 115.049 19.8378 119.576ZM19.6995 124.367L19.863 124.092C19.2325 122.618 18.8719 121.202 18.5213 119.826C17.6476 116.396 14.6362 114.828 10.6282 115.849C6.4807 116.905 4.7272 119.858 5.70762 123.706C6.01241 124.903 6.31721 126.099 6.42336 127.516L6.6587 127.69C10.9494 126.278 15.2365 125.186 19.6995 124.367Z"
                    fill="white"
                  />
                  <path
                    d="M17.7611 108.203L17.9207 109.676L1.96408 111.405L1.80447 109.932L17.7611 108.203Z"
                    fill="white"
                  />
                  <path
                    d="M17.7581 96.7114C17.538 101.46 13.9707 104.652 9.07858 104.425C4.00152 104.19 0.837368 100.459 1.04216 96.0398C1.18028 93.0593 2.84232 90.0877 6.05636 89.186L6.52887 90.5469C4.03807 91.3996 2.53651 93.5753 2.4203 96.083C2.25932 99.5568 4.75223 102.659 9.17153 102.864C13.8581 103.081 16.2332 99.8336 16.3876 96.5037C16.5428 93.1532 14.4172 91.0154 11.8205 90.1535L12.3542 88.8599C15.5963 90.0195 17.9457 92.6621 17.7581 96.7114Z"
                    fill="white"
                  />
                  <path
                    d="M18.1888 87.1308L17.8085 88.6477L3.82157 78.4374L4.21689 76.8606L21.3664 74.4567L20.9861 75.9736C19.0645 76.2768 17.088 76.5449 15.0019 76.5735L14.7772 76.7081C14.6267 77.8159 14.4713 78.9437 14.191 80.0614C13.8858 81.2789 13.5008 82.3915 13.0758 83.4942L13.2254 83.7438C14.9365 84.788 16.5726 85.9619 18.1888 87.1308ZM12.113 82.9346L12.3426 82.8649C12.4681 81.772 12.6185 80.749 12.8737 79.7311C13.1089 78.793 13.4489 77.86 13.7988 77.0567L13.6542 76.872C10.8291 77.3941 8.26372 77.7268 5.47392 77.7698L5.35382 78.2488C7.82325 79.6528 9.97816 81.2114 12.113 82.9346Z"
                    fill="white"
                  />
                  <path
                    d="M24.0379 68.6851L23.4438 70.0198C18.9697 68.0283 14.4768 66.0283 9.87757 63.7108C9.258 65.7099 8.51326 67.383 7.76852 69.056L6.54661 68.5121L11.6092 57.1389L12.8311 57.6828C12.0863 59.3559 11.3416 61.029 10.2792 62.8085C15.0709 64.6936 19.5638 66.6936 24.0379 68.6851Z"
                    fill="white"
                  />
                  <path
                    d="M32.8828 53.4792L27.2218 62.0948L13.8082 53.2811L19.3563 44.8375L20.4741 45.5719C18.9487 47.8935 17.5033 50.2431 15.5219 52.659L15.5524 52.9499C17.3561 53.8396 18.9554 54.8904 20.4992 56.1757L20.79 56.1452C22.1877 53.4934 23.6228 51.3094 25.0804 49.0911L26.2326 49.8481C24.775 52.0665 23.3286 54.2677 21.4435 56.5746L21.531 56.8536C23.4438 57.8396 25.1462 58.9583 26.7991 60.3398L27.1126 60.2749C28.5835 57.4743 30.1428 55.1012 31.7134 52.7108L32.8828 53.4792Z"
                    fill="white"
                  />
                  <path
                    d="M66.7844 22.6782C62.3435 24.373 57.992 22.3777 56.2458 17.8022C54.4336 13.0538 56.5901 8.6628 60.7233 7.08536C63.5109 6.02151 66.899 6.35825 69.0094 8.94464L67.9505 9.92138C66.1739 7.9785 63.5795 7.47096 61.2341 8.36607C57.9852 9.60601 56.1368 13.1306 57.7142 17.2639C59.387 21.647 63.313 22.5274 66.4274 21.3388C69.561 20.1429 70.6718 17.3403 70.4247 14.6154L71.8239 14.588C72.0558 18.0234 70.5716 21.2328 66.7844 22.6782Z"
                    fill="white"
                  />
                  <path
                    d="M82.4986 18.0634L81.0583 18.3083C80.7307 16.3812 80.403 14.454 80.1935 12.4859C77.5384 9.5143 75.0015 6.50174 72.485 3.48572L74.0672 3.21667C76.2408 5.81096 78.394 8.40869 80.4976 11.328L80.741 11.2866C81.7615 7.83609 82.9757 4.66576 84.1696 1.49888L85.7113 1.23673C84.3127 4.91847 82.931 8.57648 81.4107 12.2789C81.8398 14.1888 82.1709 16.1363 82.4986 18.0634Z"
                    fill="white"
                  />
                  <path
                    d="M90.5002 17.0438L89.0188 17.0255L89.2172 0.976679L90.5752 0.993466C93.9347 5.56228 97.0479 10.0869 100.278 15.1274L100.525 15.1304C100.256 10.25 100.333 5.7031 100.39 1.11479L101.871 1.13311L101.673 17.1819L100.315 17.1651C97.0158 12.6794 93.8399 8.23631 90.6295 3.25778L90.3826 3.25472C90.6523 8.07344 90.5559 12.5378 90.5002 17.0438Z"
                    fill="white"
                  />
                  <path
                    d="M110.347 18.7362L104.64 17.4801L108.09 1.80521L113.616 3.02157C118.841 4.17158 120.282 8.15482 119.349 12.3951C118.322 17.0573 114.909 19.7403 110.347 18.7362ZM106.128 16.4593L106.301 16.729C107.901 16.8284 109.328 17.1425 110.715 17.4477C114.171 18.2085 116.926 16.2232 117.815 12.1839C118.735 8.00395 116.885 5.1107 113.007 4.25704C111.801 3.99165 110.595 3.72626 109.282 3.18434L109.021 3.31655C108.354 7.78391 107.403 12.1045 106.128 16.4593Z"
                    fill="white"
                  />
                  <path
                    d="M121.346 21.9414L119.958 21.4228L125.576 6.38814L126.964 6.90674L121.346 21.9414Z"
                    fill="white"
                  />
                  <path
                    d="M131.181 26.8384C127.027 24.5276 125.757 19.9121 128.137 15.6324C130.608 11.1909 135.358 10.0184 139.224 12.1691C141.831 13.6195 143.752 16.4307 143.129 19.71L141.7 19.5274C142.045 16.9174 140.765 14.6042 138.571 13.3839C135.533 11.6933 131.645 12.5445 129.494 16.4106C127.213 20.5105 129.064 24.0831 131.977 25.7036C134.908 27.3341 137.769 26.3824 139.696 24.4408L140.617 25.4946C138.136 27.8815 134.723 28.809 131.181 26.8384Z"
                    fill="white"
                  />
                  <path
                    d="M140.128 31.8753L138.943 30.8544L154.347 22.9408L155.578 24.002L150.026 40.4051L148.842 39.3842C149.433 37.531 150.081 35.6446 150.992 33.7677L150.973 33.5065C150.051 32.8747 149.113 32.2294 148.24 31.4772C147.289 30.6578 146.468 29.8142 145.673 28.9394L145.383 28.961C143.682 30.0211 141.898 30.956 140.128 31.8753ZM146.605 28.3304L146.565 28.5668C147.485 29.1697 148.331 29.7634 149.126 30.4484C149.859 31.0798 150.54 31.8025 151.101 32.4757L151.331 32.4295C152.132 29.6708 152.987 27.2291 154.201 24.717L153.827 24.3946C151.464 25.9707 149.104 27.1965 146.605 28.3304Z"
                    fill="white"
                  />
                  <path
                    d="M153.794 45.1412L152.863 44.0154C156.636 40.8938 160.425 37.7591 164.547 34.6703C163.032 33.2264 161.864 31.8153 160.697 30.4042L161.727 29.5516L169.663 39.1439L168.632 39.9964C167.465 38.5853 166.297 37.1743 165.176 35.4314C161.357 38.8848 157.567 42.0195 153.794 45.1412Z"
                    fill="white"
                  />
                  <path
                    d="M163.548 59.9458L158.359 51.0381L172.227 42.9589L177.313 51.6888L176.157 52.3621C174.759 49.9618 173.3 47.6207 172.02 44.7702L171.746 44.6679C170.146 45.886 168.492 46.8492 166.654 47.6584L166.551 47.9323C168.302 50.3654 169.618 52.6235 170.954 54.9171L169.763 55.6111C168.426 53.3174 167.101 51.0416 165.876 48.3259L165.587 48.2799C163.852 49.5527 162.091 50.5781 160.118 51.442L160.036 51.7515C161.888 54.3164 163.317 56.7701 164.757 59.2415L163.548 59.9458Z"
                    fill="white"
                  />
                </g>
                <circle cx="38.724" cy="30.1513" r="1.71475" fill="#DBC99F" />
                <circle cx="179.334" cy="78.163" r="1.71475" fill="#DBC99F" />
                <circle cx="67.4911" cy="178.967" r="1.71475" fill="#DBC99F" />
              </svg>
              <div className={styles.logo}>
                <Logo />
              </div>
            </div>
          </div>
          {window.innerWidth > 768 ? (
            <Swiper
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              onSwiper={(swiper) => setSwiper(swiper)}
              slidesPerView={'auto'}
              spaceBetween={20}
              freeMode={true}
              direction="horizontal"
              modules={[FreeMode]}
              className={clsx(styles.tokenCardsWrapper, 'gold-drag-swiper')}
            >
              <SwiperSlide
                className={clsx(styles.tokenCard, 'opacity-0 ')}
              ></SwiperSlide>

              {tokenCards.map((card, idx) => (
                <SwiperSlide className={styles.tokenCard}>
                  <span className={styles.tokenCardTitle}>
                    <span className={styles.tokenCardNum}>0{idx + 1}</span>
                    {card.title}
                  </span>
                  <p className={styles.tokenCardText}>{card.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              onSwiper={(swiper) => setSwiper(swiper)}
              spaceBetween={20}
              slidesPerView={'auto'}
              direction="horizontal"
              className={clsx(styles.tokenCardsWrapper, 'gold-drag-swiper')}
            >
              {tokenCards.map((card, idx) => (
                <SwiperSlide className={styles.tokenCard}>
                  <span className={styles.tokenCardTitle}>
                    <span className={styles.tokenCardNum}>0{idx + 1}</span>
                    {card.title}
                  </span>
                  <p className={styles.tokenCardText}>{card.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {window.innerWidth <= 768 && (
            <div className={styles.tokenBullets}>
              {tokenCards.map((token, idx) => (
                <div
                  className={clsx(
                    styles.bullet,
                    activeSlide === idx && styles.active
                  )}
                ></div>
              ))}
            </div>
          )}
          {window.innerWidth <= 768 && (
            <Button
              handleClick={() =>
                modalActive ? setModalActive(false) : setModalActive(true)
              }
              isLink={false}
            >
              Join the Future Now
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

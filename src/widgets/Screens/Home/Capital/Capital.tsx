import clsx from 'clsx'
import styles from './Capital.module.scss'
import { capitalCards } from '../../../../data'
import { CapitalCard } from '../../../../entities/CapitalCard/CapitalCard'

export const Capital = () => {
  return (
    <section className={clsx('section', styles.capital)}>
      <div className="container">
        <div className="section-top">
          <div className="section-gold-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="section-row-flex">
            <div className="section-label-block">
              <span className="section-index">04</span>
              <h2 className="gold-texture">
                cyndicate
                <div className="section-title">capital</div>
              </h2>
            </div>
            <div className={styles.capitalTextBlock}>
              <div className="section-text-block">
                <p className="text-gold">
                  Revolutionizing Real Estate Investment
                </p>
                <p>
                  Our cutting-edge platform leverages blockchain technology to
                  reshape the way you invest in the real sector. Here's what
                  sets us apart:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.capitalCards}>
          {capitalCards.map((card) => (
            <CapitalCard
              title={card.title}
              text={card.text}
              cardBg={card.cardBg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

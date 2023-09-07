import clsx from 'clsx'
import styles from './Evolution.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { evolutionCardsData } from '../../../../data'
import { EvolutionCard } from '../../../../entities/EvolutionCard/EvolutionCard'

export const Evolution = () => {
  return (
    <section className={clsx('section', styles.evolution)}>
      <div className="container">
        <div className="section-top">
          <div className="section-gold-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="section-row-flex">
            <div className="section-label-block">
              <span className="section-index">01</span>
              <h2 className="gold-texture">
                cyndicate
                <div className="section-title">evolution</div>
              </h2>
            </div>
            <div className={styles.evolutionTextBlock}>
              <div className="section-text-block">
                <p>
                  <span className="text-gold">CYNDICATE Evolution</span>: Your
                  Pathway to Cryptocurrency Mastery. Dive into the world of
                  digital finance, learn from experts, and excel in crypto
                  trading.
                </p>
                <div className="button-group">
                  <Button colorType="second">Online Training</Button>
                  <Button colorType="second">Online Training</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.evolutionCards}>
          {evolutionCardsData.map((card, idx) => (
            <EvolutionCard
              key={idx}
              title={card.title}
              text={card.text}
              icon={card.icon}
              goldStyle={card.goldStyle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

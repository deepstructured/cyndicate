import clsx from 'clsx'
import styles from './Exclusives.module.scss'
import { exclusivesCardsData } from '../../../../data'
import { ExclusiveCard } from '../../../../entities/ExclusiveCard/ExclusiveCard'

export const Exclusives = () => {
  return (
    <section className={clsx('section', styles.exclusives)}>
      <div className="container">
        <div className="section-top">
          <div className="section-gold-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="section-row-flex">
            <div className="section-label-block">
              <span className="section-index">02</span>
              <h2 className="gold-texture">
                cyndicate
                <div className="section-title">exclusives</div>
              </h2>
            </div>
            <div className={styles.exclusivesTextBlock}>
              <div className="section-text-block">
                <p>
                  Your gateway to{' '}
                  <span className="text-gold">premium apparel</span> and
                  merchandise that embodies the essence of the Cyndicate
                  community. Embrace the{' '}
                  <span className="text-gold">exclusivity</span> and{' '}
                  <span className="text-gold">make a statement</span> with
                  CYNDICATE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exclusivesCards}>
          {exclusivesCardsData.map((card) => (
            <ExclusiveCard image={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

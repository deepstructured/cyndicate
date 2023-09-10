import clsx from 'clsx'
import styles from './Token.module.scss'
import { Logo } from '../../../../shared/Logo/Logo'
import { TokenCard } from '../../../../entities/TokenCard/TokenCard'
import { tokenCards } from '../../../../data'

export const Token = () => {
  return (
    <section className={clsx('section', styles.token)}>
      <div className="container">
        <div className="section-top">
          <div className="section-gold-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="section-row-flex">
            <div className="section-label-block">
              <span className="section-index">05</span>
              <h2 className="text-gold">
                $cynd
                <div className="section-title">Token</div>
              </h2>
            </div>
            <div className={styles.tokenTextBlock}>
              <div className="section-text-block">
                <p>
                  Cyndicate's <span className="text-gold">CYND</span> token is
                  your passport to the world of{' '}
                  <span className="text-gold">decentralized finance</span>,
                  providing seamless access to exclusive benefits and
                  opportunities within our{' '}
                  <span className="text-gold">ecosystem</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tokenLogo}>
          <div className={styles.cyndLogo}>
            <Logo logoType="third" />
          </div>
        </div>
        <div className={styles.tokenWrapper}>
          {tokenCards.map((card) => (
            <TokenCard
              title={card.title}
              listItems={card.listItems}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

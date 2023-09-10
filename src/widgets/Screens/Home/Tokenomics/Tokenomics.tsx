import clsx from 'clsx'
import styles from './Tokenomics.module.scss'
import { TokenomicsChart } from '../../../../entities/TokenomicsChart/TokenomicsChart'

export const Tokenomics = () => {
  return (
    <section className={clsx('section', styles.tokenomics)}>
      <div className="container">
        <TokenomicsChart />
      </div>
    </section>
  )
}

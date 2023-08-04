import { Button } from '../../../shared/Button/Button'
import Header from '../../Header/Header'

export const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="wrapper">
            <h1 className="c-gold-primary">
              The Future of Real Estate
              <br /> Investment Tokenization
            </h1>
            <h3 className="c-gold-secondary">
              The World's Largest Real Estate Tokenization Investment.
            </h3>
            <div className="countdown">
              <ul className="date">
                <li className="date__item">
                  <span>21</span>
                  <p>days</p>
                </li>
                <li className="date__item">
                  <span>18</span>
                  <p>hours</p>
                </li>
                <li className="date__item">
                  <span>35</span>
                  <p>minutes</p>
                </li>
              </ul>
              <div className="progress">
                <div className="thumb"></div>
              </div>
            </div>
            <div className="bottom-row">
              <p>From 2023</p>
              <Button>
                Join The Waitlist
                <img src="/images/icons/btn-arrow-right.svg" alt="" />
              </Button>
              <p>
                Sculpting Wealth, <br />
                Forging Empires
                <img src="/images/icons/star.svg" alt="" className="star" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

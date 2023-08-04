import { benefitsData } from '../../../data'
import { BenefitCard } from '../../../entities/BenefitCard/BenefitCard'

export const Community = () => {
  return (
    <section id="community">
      <div className="container">
        <div className="wrapper">
          <h2 className="c-gold-primary">
            Join <span className="cyndicate-span">Cyndicate</span> community
          </h2>
          <div className="row">
            <p>The benefits of our community</p>
            <a href="">
              <p>
                Updates on <span className="c-token">$cynd</span> Token Launch.
              </p>
              <img src="/images/icons/gray-arrow-right.svg" alt="" />
            </a>
          </div>
          <div className="benefits-community">
            {benefitsData.map((benefit) => (
              <BenefitCard
                title={benefit.title}
                text={benefit.text}
                img={benefit.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

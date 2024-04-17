import GovCard from './gov-card'

import { Attributes } from '~/interfaces/Homepage'
const GovCardContainer = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-content">
          <div className="expertise-text">
            <h2 className="expertise-title">Expertise in Government IT Solutions</h2>
            <p className="expertise-description">
              At iVoyant LLC, our commitment to excellence is at the core of everything we do.
              Through meticulous planning, rigorous quality control, and a relentless pursuit of
              perfection, we strive to exceed our clients' expectations and deliver unparalleled
              results.
            </p>
          </div>
        </div>
        <div className="expertise-list">
          <div className="expertise-list-container">
            <h3 className="expertise-list-title">Customized Solutions</h3>
            <div className="expertise-list-item">IT Transformation</div>
            <div className="expertise-list-item">Products & Solutions</div>
            <div className="expertise-list-item">Cyber Security</div>
            <div className="expertise-list-item">Cloud Solutions</div>
            <div className="expertise-list-item">Agile Development</div>
          </div>
        </div>
      </div>
    </section>
    // <div role="banner" classNameName="flex flex-col w-full max-h-fit lg:flex-row CardDark">
    //   <GovCard attributes={attributes} />
    //   <SummaryCard attributes={attributes} />
    // </div>
  )
}
export default GovCardContainer

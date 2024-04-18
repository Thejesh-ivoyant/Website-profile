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
          <ul className="expertise-list-container">
            <li className="expertise-list-title">Customized Solutions</li>
            <li className="expertise-list-item">IT Transformation</li>
            <li className="expertise-list-item">Products & Solutions</li>
            <li className="expertise-list-item">Cyber Security</li>
            <li className="expertise-list-item">Cloud Solutions</li>
            <li className="expertise-list-item">Agile Development</li>
          </ul>
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

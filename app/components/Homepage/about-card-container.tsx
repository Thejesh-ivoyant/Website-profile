import AboutCard from './about-card'
import SummaryCard from './summary-card'
import { Attributes } from '~/interfaces/Homepage'
const AboutCardContainer = ({ attributes }: { attributes: Attributes }) => {
  return (
    <div id="main-cnt" role="banner" className="flex flex-col w-full max-h-fit lg:flex-row CardDark">
      <AboutCard attributes={attributes} />
      <SummaryCard attributes={attributes} />
    </div>
  )
}
export default AboutCardContainer

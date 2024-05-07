// src/components/Card.js
import { Link } from '@remix-run/react'
import { Attributes } from '~/interfaces/Homepage'
const AboutCard = ({ attributes }: { attributes: Attributes }) => {
  const aboutUsTitle = attributes?.AboutUsTitle
  const highlightString = "iVoyant's"
  const indexOfHighlight = aboutUsTitle.indexOf(highlightString)
  return (
    <div className="flex lg:w-1/2 flex-1 bg-white flex-wrap w-full text-black font-medium justify-center items-center px-4 py-10">
      <div className="flex flex-col gap-7 w-[34rem]  h-fit">
        <div
          className="summary-about-us-title font-montserrat font-medium tracking-wider"
          role="heading"
          aria-level={2}
          aria-label="About us title"
        >
          {aboutUsTitle.substring(0, indexOfHighlight)}
          <span
            role="heading"
            aria-level={2}
            aria-label="Ivoyant's title highlighted"
            style={{ color: '#7534F1' }}
          >
            {highlightString}
          </span>
          {aboutUsTitle.substring(indexOfHighlight + highlightString?.length)}
        </div>
        <div className="text-md font-poppins font-light lg:leading-[1.75rem] " id="about-desc">
          {attributes.AboutUs}
        </div>
        <Link
          to={'/company/about-us'}
          className="button-test"
          role="link"
          aria-label="Link to About us page"
        >
          {attributes.AboutUsBtnText}
        </Link>
      </div>
    </div>
  )
}
export default AboutCard

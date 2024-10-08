import { Clients } from '~/interfaces/Homepage'
import line from '../../../public/assets/pur-line.svg'
const Section4 = ({ clients }: { clients: Clients | undefined }) => {
  return (
    <div role="complementary" className="grid lg:gap-5 md:gap-4 gap-3 section-p-y">
      <div className="section-title section-title-blue">
        <p role="heading" aria-level={3} aria-label="Clients title">Satisfied clients</p>
      </div>
      <img className="mx-auto w-96" alt="ornament" src={line} />
      <div className="logos" aria-label="Carousel of our multiple delighted clients">
        <div className="logos-slide whitespace-nowrap">
          {clients?.data?.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data?.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data?.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Section4

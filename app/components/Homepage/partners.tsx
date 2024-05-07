import { Partners } from '~/interfaces/Homepage'
import line from '../../../public/assets/pur-line.svg'
const Section6 = ({ partners }: { partners: Partners | undefined }) => {
  return (
    <div role="complementary" className="grid lg:gap-5 md:gap-4 gap-3 section-p-y">
      <div className="text-PurpBlue font-montserrat font-medium xl:text-3xl lg:text-2xl text-xl text-center tracking-wider">
        <p role="heading">Trusted Partners</p>
      </div>
      <img aria-hidden={true} className="mx-auto w-96" alt="ornament" src={line} />
      <div className="logos" role="complementary">
        <div className="logos-slide whitespace-nowrap" role="complementary">
          {partners?.data?.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {partners?.data?.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {partners?.data?.map((logo, index: number) => (
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
export default Section6

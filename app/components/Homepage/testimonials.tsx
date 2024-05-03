import { useOutletContext } from '@remix-run/react'
import { Carousel } from 'antd'
import { useEffect, useState } from 'react'
import { StrapiConfig } from '~/utils/format'
interface Testimonial {
  title: string
  subtitle: string
  designation: string
  summary: string
}
interface TestimonialData {
  data: {
    id: number
    attributes: {
      TestimonialList: Testimonial[]
      // Add any other attributes if present in the actual API response
    }
  }[]
}
const Testimonials = () => {
  const outletCon: StrapiConfig = useOutletContext()
  const strapiUrl = outletCon?.STRAPI_URL
  const SECTION9_API_URL = `${strapiUrl}/api/section9s?populate=%2A`
  const [testimonialList, setTestimonialList] = useState<Testimonial[]>([])
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0)
  useEffect(() => {
    fetch(SECTION9_API_URL)
      .then((response) => response.json())
      .then((data: TestimonialData) => {
        const firstItem = data.data[0]
        if (firstItem) {
          const testimonialList = firstItem.attributes.TestimonialList
          setTestimonialList(testimonialList)
        }
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error)
      })
  }, [])
  const handleCarouselChange = (current: number) => {
    setCurrentTestimonialIndex(current)
  }
  return (
    <div id="testimonials" aria-label='testimonials' role="complementary" className="section-container section-p-y">
      <span className="anchor" id="testimonials"></span>
      <section className="section-heading">
        <p
          role="contentinfo"
          aria-level={1}
          className="text-center xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wider"
        >
          Testimonials
        </p>
      </section>
      <svg
        role="none"
        aria-hidden="true"
        className="flex mx-auto my-3"
        width="100%"
        height="24"
        viewBox="0 0 1280 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {' '}
        <rect
          x="60.5"
          y="12.25"
          width="0.5"
          height="579.5"
          transform="rotate(-90 60.5 12.25)"
          fill="url(#paint0_linear_2670_97811)"
        ></rect>{' '}
        <rect
          x="1219.5"
          y="11.75"
          width="0.5"
          height="579.5"
          transform="rotate(90 1219.5 11.75)"
          fill="url(#paint1_linear_2670_97811)"
        ></rect>{' '}
        <defs>
          <linearGradient
            id="paint0_linear_2670_97811"
            x1="61.25"
            y1="587.432"
            x2="61.25"
            y2="1.88636"
            gradientUnits="userSpaceOnUse"
          >
            {' '}
            <stop stopColor="#AEBEFF"></stop>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"></stop>{' '}
          </linearGradient>
          <linearGradient
            id="paint1_linear_2670_97811"
            x1="1220.25"
            y1="586.932"
            x2="1220.25"
            y2="1.38636"
            gradientUnits="userSpaceOnUse"
          >
            {' '}
            <stop stopColor="#AEBEFF"></stop>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"></stop>{' '}
          </linearGradient>
        </defs>
      </svg>
      {testimonialList.length > 0 && (
        <>
          <section
            role="region"
            aria-label="Section which contains multiple testimonials from Ivoyant's clients"
            className="testimonial-section pb-4"
          >
            <Carousel
              beforeChange={handleCarouselChange}
              afterChange={handleCarouselChange}
              autoplay
            >
              {testimonialList.map((testimonial, index) => (
                <div key={index} className="inner-container pb-4 w-full">
                  <div className="flex flex-col justify-center">
                    <div
                      role="contentinfo"
                      aria-level={1}
                      className="industry flex items-start justify-start testimonial-industry"
                    >
                      {testimonial?.title}
                    </div>
                    <div role ="heading" className="flex text-sm py-4 font-poppins font-normal subtitle justify-between">
                      <div className="flex text-start">{testimonial.subtitle}</div>
                      <div className="flex mb-4">
                        <svg aria-hidden="true" role="presentation" width="44" height="33" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 0v16.5h11c0 6.064-4.93 11-11 11V33c9.098 0 16.5-7.402 16.5-16.5V0zm27.5 0v16.5h11c0 6.064-4.93 11-11 11V33C36.598 33 44 25.598 44 16.5V0z" fill="#fff" fill-opacity=".25"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h44v33H0z"/></clipPath></defs></svg>
                      </div>
                    </div>
                    <div
                      role="complementary"
                      className="flex text-sm py-2 font-poppins font-normal designation"
                    >
                      {testimonial?.designation}
                    </div>
                    <p
                      role="comment"
                      aria-label={`Testimonial from our client ${testimonial?.designation}}`}
                      className="flex text-sm py-4 font-poppins font-normal summary"
                    >
                      {testimonial?.summary}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
        </>
      )}
    </div>
  )
}
export default Testimonials

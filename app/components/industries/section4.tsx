import { useLoaderData, useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import DarkArrow from '../icons/dark-arrow'
const Section4 = () => {
  const location = useLocation()
  const loaderData = useLoaderData() as any
  const [currState, setCurrState] = useState<number>(-1)
  useEffect(() => {
    setCurrState(-1)
  }, [location])
  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId))
  }
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.section4Image}) lightgray 50% / cover no-repeat`,
    backgroundPosition: '100% 50%',
  }
  return (
    <section className="relative flex justify-center flex-col lg:flex-row lg:h-[600px] w-full">
      <div className="flex flex-1 flex-col h-full min-h-[16rem]" style={gradientStyle}>
        <h2 className="flex float-left my-auto lg:my-0 text-white font-montserrat items-center justify-center section-heading text-center section-p-y px-4">
          {loaderData?.section4Title}
        </h2>
      </div>
      <div className="flex flex-1 flex-col h-full font-montserrat justify-center">
        <div className="overflow-y-auto w-fit snap-y">
          {loaderData.servicesList?.map((service: any) => (
            <div
              key={service?.id}
              className={`flex flex-col items-center gap-1 w-full p-4 ${service.id === currState ? 'bg-white snap-center' : 'bg-[#F9F8FC]'}`}
            >
              <div
                onClick={() => toggleExpansion(service?.id)}
                className="flex justify-start items-start cursor-pointer font-medium sm:text-xl w-full service-title p-4"
              >
                <span className="text-left" title={service?.name}>
                  {service?.name}
                </span>
                <button
                  className="ml-auto my-auto"
                  role="button"
                  aria-label={`view details for ${service?.name}`}
                >
                  {<DarkArrow active={service?.id === currState ? false : true} />}
                </button>
              </div>
              <div
                className={`service-description ${service?.id === currState ? 'open' : ''} font-poppins px-4`}
              >
                <p>{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Section4

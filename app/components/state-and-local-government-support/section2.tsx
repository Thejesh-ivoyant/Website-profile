import { useLoaderData } from '@remix-run/react'

const GovSection2 = () => {
  const loaderData = useLoaderData() as any
  return (
    <section className="staffing-services">
      <h2 className="staffing-services-title section-heading">
        {loaderData?.govPage.staffing_service_title}
      </h2>
      <svg
        width="100%"
        height="25"
        viewBox="0 0 328 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="12.5"
          width="1"
          height="164"
          transform="rotate(-90 0 12.5)"
          fill="url(#paint0_linear_13978_146117)"
        />
        <rect
          x="328"
          y="11.5"
          width="1"
          height="164"
          transform="rotate(90 328 11.5)"
          fill="url(#paint1_linear_13978_146117)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13978_146117"
            x1="1.5"
            y1="175.278"
            x2="1.5"
            y2="9.56706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AEBEFF" />
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_13978_146117"
            x1="329.5"
            y1="174.278"
            x2="329.5"
            y2="8.56706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AEBEFF" />
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <p className="staffing-services-description">{loaderData?.govPage.staffing_service_desc}</p>
      <div className="staffing-services-list">
        {loaderData.govPage.staffing_service?.map((service: any, index: number) => (
          <div className="staffing-services-item">
            <img
              loading="lazy"
              src={service.s7_techIcon?.data?.attributes?.url}
              alt={service.s7_techIconName}
            />
            <span>{service.s7_techIconName}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default GovSection2

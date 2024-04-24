import { useLoaderData } from '@remix-run/react'

const GovSection5 = () => {
  const loaderData = useLoaderData() as any
  return (
    <section className="mbe-certification">
      <div className="mbe-certification-content">
        <div className="mbe-certification-text">
          <h2 className="mbe-certification-title">{loaderData?.govPage.MBE_title}</h2>
          <p className="mbe-certification-description">{loaderData?.govPage.MBE_desc}</p>
        </div>
        <div className="mbe-certification-image-wrapper">
          <img
            src={loaderData?.govPage.MBE_logo?.data?.attributes?.url}
            alt={loaderData?.govPage.MBE_title}
            className="mbe-certification-image"
          />
        </div>
      </div>
    </section>
  )
}
export default GovSection5

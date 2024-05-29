import { useLoaderData } from '@remix-run/react';

const GovSection3 = () => {
  const loaderData = useLoaderData() as any

  return (
    <section className="services-section">
      <header className="services-header">
        <div className="services-title">
          <h2 className="services-heading">{loaderData?.govPage.service_offered_title}</h2>
        </div>
        <p className="services-text">{loaderData?.govPage.service_offered_desc} </p>
      </header>

      {loaderData.govPage.name_desc_link?.map((key: any, index: number) => (
        <div className="service-item">
          <div className="service-content">
            <div className="service-name">{key.title}</div>
            <p>{key?.description}</p>

            {/* <Link className="service-icon" to={key?.link} target="_blank">
              <ArrowCircle />
            </Link> */}
          </div>
        </div>
      ))}
    </section>
  )
}
export default GovSection3

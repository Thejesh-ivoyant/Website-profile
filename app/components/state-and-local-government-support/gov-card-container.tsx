import { useLoaderData } from '@remix-run/react'

const GovCardContainer = () => {
  const loaderData = useLoaderData() as any
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-content">
          <div className="expertise-text">
            <h2 className="expertise-title">{loaderData?.govPage.section2Title}</h2>
            <p className="expertise-description">{loaderData?.govPage.section2Desc}</p>
          </div>
        </div>
        <div className="expertise-list">
          <ul className="expertise-list-container">
            <li className="expertise-list-title">Customized Solutions</li>
            {loaderData.govPage.customizedSolutions?.map((sol: any, index: number) => (
              <li key={index} className="expertise-list-item">
                {sol.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default GovCardContainer

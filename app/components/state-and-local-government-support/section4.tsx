import { useLoaderData } from '@remix-run/react'
import { Tabs } from 'antd'
import { useState } from 'react'

const GovSection4 = () => {
  const loaderData = useLoaderData() as any

  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (key: any) => {
    setActiveTab(key)
  }

  return (
    <section className="tied-services">
      <h2 className="staffing-services-title section-heading">{loaderData?.govPage.tie_ups_title}</h2>
      <svg className='mx-auto' width="100%" height="25" viewBox="0 0 1200 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="13.0001" width="1" height="600" transform="rotate(-90 0 13.0001)" fill="url(#paint0_linear_13978_145744)"/>
<rect x="1200" y="12.0001" width="1" height="600" transform="rotate(90 1200 12.0001)" fill="url(#paint1_linear_13978_145744)"/>
<defs>
<linearGradient id="paint0_linear_13978_145744" x1="1.5" y1="608.529" x2="1.49999" y2="2.2698" gradientUnits="userSpaceOnUse">
<stop stop-color="#AEBEFF"/>
<stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_13978_145744" x1="1201.5" y1="607.529" x2="1201.5" y2="1.26986" gradientUnits="userSpaceOnUse">
<stop stop-color="#AEBEFF"/>
<stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

      <p className="staffing-services-description">
      {loaderData?.govPage.tie_ups_desc} </p>
      <Tabs defaultActiveKey={activeTab} centered onChange={handleTabChange} tabBarGutter={0}>
        <Tabs.TabPane
          tab={
            <button className={` tab-btn ${activeTab === '1' ? 'active tab-btn' : ''}`}>
              States
            </button>
          }
          key="1"
        >
          {/* content for tab1 */}
          <div className="tied-up-services-list">
          {loaderData.govPage.states_tied_up?.map((service: any, index: number) => (

            <div className="staffing-services-item">
              <img
                loading="lazy"
                src={service.s7_techIcon?.data?.attributes?.url}  
                alt={service.s7_techIconName}
                className="staffing-services-item-image"
              />
              <h3 className="staffing-services-item-title">{service.s7_techIconName}</h3>
            </div>
               ))}
          </div>
      
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <button className={` tab-btn ${activeTab === '2' ? 'active tab-btn' : ''}`}>
              Counties
            </button>
          }
          key="2"
        >
          {/* content for tab2 */}
          <div className="tied-up-services-list">
          {loaderData.govPage.counties_tied_up?.map((service: any, index: number) => (

            <div className="staffing-services-item">
              <img
                loading="lazy"
                src={service.s7_techIcon?.data?.attributes?.url}  
                alt={service.s7_techIconName}
                className="staffing-services-item-image"
              />
              <h3 className="staffing-services-item-title">{service.s7_techIconName}</h3>
            </div>
              ))}
          </div>
       
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <button className={` tab-btn ${activeTab === '3' ? 'active tab-btn' : ''}`}>
              Cities
            </button>
          }
          key="3"
        >
          {/* content for tab3 */}
          <div className="tied-up-services-list">
          {loaderData.govPage.cities_tied_up?.map((service: any, index: number) => (

            <div className="staffing-services-item">
              <img
                loading="lazy"
                src={service.s7_techIcon?.data?.attributes?.url}  
                alt={service.s7_techIconName}
                className="staffing-services-item-image"
              />
              <h3 className="staffing-services-item-title">{service.s7_techIconName}</h3>
            </div>
             ))}
          </div>
        
        </Tabs.TabPane>
      </Tabs>
    </section>
  )
}
export default GovSection4

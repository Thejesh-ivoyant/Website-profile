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
    <section className="tied-services relative">
      <h2 className="staffing-services-title section-heading">
        {loaderData?.govPage.tie_ups_title}
      </h2>
      <div className='absolute bg-center-shade '>
      <svg width="100%" height="619" viewBox="0 0 1371 619" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M984.277 265.174C1085.4 261.254 1196.76 240.938 1277.4 266.149C1361.96 292.589 1371.28 342.309 1370.03 385.783C1368.8 428.646 1343.95 471.959 1270.61 502.643C1196.46 533.663 1088.61 555.21 984.277 547.169C889.062 539.832 859.166 492.754 788.902 465.521C714.777 436.792 578.769 427.266 567.877 385.783C556.86 343.827 657.688 311.323 742.001 286.902C812.099 266.598 898.705 268.491 984.277 265.174Z" fill="#7758F1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M502.623 162.689C489.519 129.584 430.045 97.3607 459.861 66.1122C491.286 33.1773 570.408 3.07947 656.863 1.03821C743.1 -0.997899 788.124 45.3752 870.153 56.4249C951.485 67.3806 1052.81 41.8884 1120.21 63.4537C1189.23 85.5328 1205.64 126.927 1202.3 162.689C1199.03 197.65 1160.45 230.918 1102.15 256.568C1048.15 280.331 972.914 296.395 893.665 298.486C823.384 300.34 767.832 277.769 702.42 267.115C642.983 257.434 567.672 259.562 528.286 238.976C488.609 218.238 512.905 188.664 502.623 162.689Z" fill="#6C4BCB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M282.889 536.788C207.325 519.538 270.582 469.582 242.349 436.184C209.231 397.009 60.5842 366.556 107.993 329.901C154.875 293.652 295.896 319.402 396.202 317.227C463.462 315.768 538.068 302.189 590.497 319.435C640.811 335.986 600.087 370.338 629.219 393.877C676.77 432.296 850.183 455.279 807.306 494.61C766.144 532.367 614.561 490.479 515.193 498.471C430.007 505.322 358.651 554.084 282.889 536.788Z" fill="#9A41E0"/>
</svg>

      </div>
      <div className='absolute bg-shade'> 
      <svg width="100%" height="1024" viewBox="0 0 622 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6" filter="url(#filter0_f_13978_145738)">
<circle cx="89" cy="491" r="293" fill="url(#paint0_linear_13978_145738)" fill-opacity="0.24"/>
</g>
<defs>
<filter id="filter0_f_13978_145738" x="-444" y="-42" width="1066" height="1066" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_13978_145738"/>
</filter>
<linearGradient id="paint0_linear_13978_145738" x1="0.999882" y1="314" x2="319" y2="652.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#6E9FFD"/>
<stop offset="1" stop-color="#2F42A5" stop-opacity="0.52"/>
</linearGradient>
</defs>
</svg>

      </div>
      <svg
        className="mx-auto"
        width="100%"
        height="25"
        viewBox="0 0 1200 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="13.0001"
          width="1"
          height="600"
          transform="rotate(-90 0 13.0001)"
          fill="url(#paint0_linear_13978_145744)"
        />
        <rect
          x="1200"
          y="12.0001"
          width="1"
          height="600"
          transform="rotate(90 1200 12.0001)"
          fill="url(#paint1_linear_13978_145744)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13978_145744"
            x1="1.5"
            y1="608.529"
            x2="1.49999"
            y2="2.2698"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AEBEFF" />
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_13978_145744"
            x1="1201.5"
            y1="607.529"
            x2="1201.5"
            y2="1.26986"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AEBEFF" />
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <p className="staffing-services-description">{loaderData?.govPage.tie_ups_desc} </p>
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

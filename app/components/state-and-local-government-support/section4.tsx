import { Tabs } from 'antd'
import { useState } from 'react'

const GovSection4 = () => {
  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (key: any) => {
    setActiveTab(key)
  }

  return (
    <section className="tied-services">
      <h2 className="staffing-services-title section-heading">States we are tied up with</h2>
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
        As a leading IT services provider, we have a strong presence across multiple states,
        strategically positioned to serve clients nationwide. Explore our interactive map to
        discover the states we operate in and learn more about our footprint in each region.
      </p>
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
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71531f92d1c8f18096c64e1beefcc5c95e3f36227908a2344c086d6666bc0be7?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Oregon"
              />
              <h3 className="staffing-services-item-title">State of Oregon1</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c722b633835aa515cc91c0e14201378dbc1341bef2b36392e48121d48ab3b8c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Tennessee"
              />
              <h3 className="staffing-services-item-title">State of Tennessee</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f29f5ffe8b1bbf42ff9fac53d3d177aac945f7e164f92a6b481aa960439a6c1b?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Colorado"
              />
              <h3 className="staffing-services-item-title">State of Colorado</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
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
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71531f92d1c8f18096c64e1beefcc5c95e3f36227908a2344c086d6666bc0be7?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Oregon"
              />
              <h3 className="staffing-services-item-title">State of Oregon2</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c722b633835aa515cc91c0e14201378dbc1341bef2b36392e48121d48ab3b8c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Tennessee"
              />
              <h3 className="staffing-services-item-title">State of Tennessee</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f29f5ffe8b1bbf42ff9fac53d3d177aac945f7e164f92a6b481aa960439a6c1b?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Colorado"
              />
              <h3 className="staffing-services-item-title">State of Colorado</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
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
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71531f92d1c8f18096c64e1beefcc5c95e3f36227908a2344c086d6666bc0be7?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Oregon"
              />
              <h3 className="staffing-services-item-title">State of Orego3</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c722b633835aa515cc91c0e14201378dbc1341bef2b36392e48121d48ab3b8c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Tennessee"
              />
              <h3 className="staffing-services-item-title">State of Tennessee</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f29f5ffe8b1bbf42ff9fac53d3d177aac945f7e164f92a6b481aa960439a6c1b?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Colorado"
              />
              <h3 className="staffing-services-item-title">State of Colorado</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0473f2f0a5686444c4d1e9480a37504788016a2f57189fb6d7fcadd18425a52?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="State of Connecticut"
              />
              <h3 className="staffing-services-item-title">State of Connecticut</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2984592bf1aee7778f86deca0ac58833511e1a13665574237a2ec6587c1ff95f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Fulton county"
              />
              <h3 className="staffing-services-item-title">Fulton county</h3>
            </div>
            <div className="staffing-services-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d3b88ca158aa5fb5551353993b6cf324518132ded96800368e45daae2179b3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="staffing-services-item-image"
                alt="Idaho State"
              />
              <h3 className="staffing-services-item-title">Idaho State</h3>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </section>
  )
}
export default GovSection4

import { Tabs } from 'antd'
import { useState } from 'react'

const GovSection4 = () => {
  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (key: any) => {
    setActiveTab(key)
  }

  return (
    <section className="tied-services">
      <h2 className="staffing-services-title">States we are tied up with</h2>
      <div className="staffing-services-divider">
        <div className="staffing-services-divider-line"></div>
        <div className="staffing-services-divider-line"></div>
      </div>
      <p className="staffing-services-description">
        As a leading IT services provider, we have a strong presence across multiple states,
        strategically positioned to serve clients nationwide. Explore our interactive map to
        discover the states we operate in and learn more about our footprint in each region.
      </p>
      <Tabs defaultActiveKey={activeTab} centered onChange={handleTabChange}   tabBarGutter={0} >
        <Tabs.TabPane
          tab={
            <button
            className={` tab-btn ${activeTab === '1' ? 'hue-btn-primary tab-btn' : ''}`}            >
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
            <button
            className={` tab-btn ${activeTab === '2' ? 'hue-btn-primary tab-btn' : ''}`}            >
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
            <button
            className={` tab-btn ${activeTab === '3' ? 'hue-btn-primary tab-btn' : ''}`}            
            >
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

const GovSection3 = () => {
  function handleclick(event: any): void {
    window.open('/abc/here_corresponding_service_route_renders ', '_blank')
  }

  return (
    <section className="services-section">
      <div className="services-container">
        <header className="services-header">
          <div className="services-title">
            <h2 className="services-heading">What Services We're Offering</h2>
          </div>
          <div className="services-description">
            <p className="services-text">
              At iVoyant LLC, we specialize in providing comprehensive IT solutions tailored to meet
              the diverse needs of our clients. From IT staffing solutions to cutting-edge IT
              services, we are committed to delivering excellence in every aspect of our work.
            </p>
          </div>
        </header>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Custom Applications</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Mobile App Development</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">UX/UI Design</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Data Integration</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name devops">DevOps</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Website Development</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">API Integration</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Cloud Migration</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Low Code - No Code</div>
          <button className="service-icon" onClick={handleclick}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ddf66c1eb9573b58067f8868d7cb687642ba08bccce5135952db9845293936?apiKey=9e16588387084fb2a9a51a1b99489136&"
              alt=""
              className="service-image"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
export default GovSection3

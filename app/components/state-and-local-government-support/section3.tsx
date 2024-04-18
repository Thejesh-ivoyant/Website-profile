import ArrowCircle from '../icons/arrow'

const GovSection3 = () => {
  function handleclick(event: any): void {
    window.open('/abc/here_corresponding_service_route_renders ', '_blank')
  }

  return (
    <section className="services-section">
      <header className="services-header">
        <div className="services-title">
          <h2 className="services-heading">What Services We're Offering</h2>
        </div>
        <p className="services-text">
          At iVoyant LLC, we specialize in providing comprehensive IT solutions tailored to meet the
          diverse needs of our clients. From IT staffing solutions to cutting-edge IT services, we
          are committed to delivering excellence in every aspect of our work.
        </p>
      </header>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Custom Applications</div>
          <p>
            Creating apps for smartphones and tablets, mobile app development involves designing,
            building, and deploying software tailored for mobile devices.
          </p>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Mobile App Development</div>
          <p>
            Creating apps for smartphones and tablets, mobile app development involves designing,
            building, and deploying software tailored for mobile devices.
          </p>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">UX/UI Design</div>
          <p>
            Creating apps for smartphones and tablets, mobile app development involves designing,
            building, and deploying software tailored for mobile devices.
          </p>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Data Integration</div>
          <p>
            Creating apps for smartphones and tablets, mobile app development involves designing,
            building, and deploying software tailored for mobile devices.
          </p>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name devops">DevOps</div>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Website Development</div>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">API Integration</div>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Cloud Migration</div>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
      <div className="service-item">
        <div className="service-content">
          <div className="service-name">Low Code - No Code</div>
          <button className="service-icon" onClick={handleclick}>
            <ArrowCircle />
          </button>
        </div>
      </div>
    </section>
  )
}
export default GovSection3

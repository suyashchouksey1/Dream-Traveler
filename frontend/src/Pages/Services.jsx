import "../Styles/Services.css";
import ServiceCard from "../Components/ServiceCard";
import services from "../Data/servicesData";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-subtitle">SERVICES</span>
        <h2 className="services-title">Our Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
